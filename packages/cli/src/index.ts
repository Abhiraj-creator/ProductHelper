#!/usr/bin/env node
import { confirm, isCancel, select } from "@clack/prompts";
import { Command } from "commander";
import { downloadTemplate } from "giget";
import {
  cp,
  lstat,
  mkdir,
  mkdtemp,
  readdir,
  readFile,
  rename,
  rm,
  writeFile,
} from "node:fs/promises";
import { homedir, tmpdir } from "node:os";
import { dirname, isAbsolute, join, relative, resolve } from "node:path";
import { z } from "zod";
import { compareVersions } from "./version.js";

type AgentId = "codex" | "claude";
type Scope = "global" | "local";
type Agent = {
  id: AgentId;
  name: string;
  global: () => string;
  local: (root: string) => string;
  detect: () => Promise<boolean>;
};
type Metadata = z.infer<typeof metadataSchema>;

const metadataSchema = z.object({
  name: z.literal("project-pilot"),
  version: z.string().regex(/^\d+\.\d+\.\d+(?:-[\w.]+)?$/),
  installedAt: z.string().datetime(),
  source: z.literal("github-release"),
  agent: z.enum(["codex", "claude"]),
  scope: z.enum(["global", "local"]),
  managedFiles: z.array(z.string().regex(/^(?!.*(?:^|[\\/])\.\.(?:[\\/]|$)).+$/).refine((file) => !isAbsolute(file))),
});
const skillSchema = z.object({
  name: z.literal("project-pilot"),
  description: z.string().min(1),
});
const skillDirectory = "skills/project-pilot";
const metadataFile = ".projectpilot-install.json";
const source =
  process.env.PROJECTPILOT_REPOSITORY ?? "github:Abhiraj-creator/dev-helper#v0.1.1";

const agents: Record<AgentId, Agent> = {
  codex: {
    id: "codex",
    name: "Codex",
    global: () => join(homedir(), ".codex", "skills", "project-pilot"),
    local: (root) => join(root, ".agents", "skills", "project-pilot"),
    detect: async () => exists(join(homedir(), ".codex")),
  },
  claude: {
    id: "claude",
    name: "Claude Code",
    global: () => join(homedir(), ".claude", "skills", "project-pilot"),
    local: (root) => join(root, ".claude", "skills", "project-pilot"),
    detect: async () => exists(join(homedir(), ".claude")),
  },
};

async function exists(path: string) {
  try {
    await lstat(path);
    return true;
  } catch {
    return false;
  }
}
function targets(value?: string, all = false): AgentId[] {
  if (all || value === "all") return ["codex", "claude"];
  if (value === "codex" || value === "claude") return [value];
  throw new Error(
    "Choose an agent with --agent codex, --agent claude, or --agent all.",
  );
}
function pathFor(agent: AgentId, scope: Scope, root: string) {
  return scope === "global"
    ? agents[agent].global()
    : agents[agent].local(root);
}
function frontmatter(text: string) {
  const match = text.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  if (!match) throw new Error("SKILL.md has no YAML frontmatter.");
  const values = Object.fromEntries(
    match[1]
      .split(/\r?\n/)
      .map((line) => line.match(/^(name|description):\s*(.*)$/))
      .filter((line): line is RegExpMatchArray => Boolean(line))
      .map(([, key, value]) => [key, value.replace(/^['\"]|['\"]$/g, "")]),
  );
  return skillSchema.parse(values);
}
async function validate(dir: string) {
  const file = join(dir, "SKILL.md");
  if (!(await exists(file)))
    throw new Error("Downloaded skill is missing SKILL.md.");
  const text = await readFile(file, "utf8");
  frontmatter(text);
  await filesIn(dir);
  for (const [, target] of text.matchAll(/\[[^\]]+\]\(([^)]+)\)/g)) {
    if (/^(?:https?:|#)/.test(target)) continue;
    const referenced = resolve(dir, target.split("#", 1)[0]);
    if (relative(dir, referenced).startsWith("..") || !(await exists(referenced)))
      throw new Error(`SKILL.md references a missing file: ${target}.`);
  }
}
async function readMetadata(dir: string): Promise<Metadata | undefined> {
  try {
    return metadataSchema.parse(
      JSON.parse(await readFile(join(dir, metadataFile), "utf8")),
    );
  } catch {
    return undefined;
  }
}
async function filesIn(dir: string, prefix = ""): Promise<string[]> {
  const entries = await readdir(dir, { withFileTypes: true });
  const files: string[] = [];
  for (const entry of entries) {
    if (entry.name === metadataFile) continue;
    const relative = join(prefix, entry.name);
    if (entry.isSymbolicLink()) throw new Error(`Skill contains symlink ${relative}; symlinks are not allowed.`);
    if (entry.isDirectory()) files.push(...(await filesIn(join(dir, entry.name), relative)));
    else if (entry.isFile()) files.push(relative);
  }
  return files;
}
async function removeEmptyDirectories(dir: string): Promise<void> {
  for (const entry of await readdir(dir, { withFileTypes: true }))
    if (entry.isDirectory()) {
      const child = join(dir, entry.name);
      await removeEmptyDirectories(child);
      if ((await readdir(child)).length === 0) await rm(child, { recursive: true, force: true });
    }
}
async function download(): Promise<{ dir: string; version: string }> {
  const root = await mkdtemp(join(tmpdir(), "projectpilot-"));
  try {
    await downloadTemplate(source, { dir: root, force: true });
    const dir = join(root, skillDirectory);
    await validate(dir);
    const version =
      process.env.PROJECTPILOT_VERSION ??
      source.match(/#v?(\d+\.\d+\.\d+)/)?.[1];
    if (!version)
      throw new Error(
        "The release source must use an immutable vMAJOR.MINOR.PATCH tag.",
      );
    return { dir, version };
  } catch (error) {
    await rm(root, { recursive: true, force: true });
    throw error;
  }
}
async function installOne(
  agent: AgentId,
  scope: Scope,
  root: string,
  incoming: { dir: string; version: string },
  replace: boolean,
) {
  const target = pathFor(agent, scope, root);
  const existing = await readMetadata(target);
  if ((await exists(target)) && !existing)
    throw new Error(
      `${target} exists but is not a ProjectPilot-managed installation; it was left unchanged.`,
    );
  if (existing && !replace) throw new Error(`${agents[agent].name} already has ProjectPilot at ${target}. Use update or confirm replacement.`);
  const stage = `${target}.projectpilot-stage`;
  const backup = `${target}.projectpilot-backup`;
  await mkdir(dirname(stage), { recursive: true });
  await rm(stage, { recursive: true, force: true });
  if (existing) {
    await cp(target, stage, { recursive: true });
    await Promise.all(existing.managedFiles.map((file) => rm(join(stage, file), { force: true })));
  } else await mkdir(stage);
  await cp(incoming.dir, stage, { recursive: true });
  const managedFiles = await filesIn(incoming.dir);
  await writeFile(
    join(stage, metadataFile),
    JSON.stringify(
      {
        name: "project-pilot",
        version: incoming.version,
        installedAt: new Date().toISOString(),
        source: "github-release",
        agent,
        scope,
        managedFiles,
      },
      null,
      2,
    ) + "\n",
  );
  await validate(stage);
  try {
    if (await exists(target)) {
      await rm(backup, { recursive: true, force: true });
      await rename(target, backup);
    }
    await rename(stage, target);
    await rm(backup, { recursive: true, force: true });
  } catch (error) {
    await rm(stage, { recursive: true, force: true });
    if ((await exists(backup)) && !(await exists(target)))
      await rename(backup, target);
    throw error;
  }
  return target;
}
async function chooseAgent() {
  const found = (
    await Promise.all(
      (Object.keys(agents) as AgentId[]).map(async (id) =>
        (await agents[id].detect()) ? id : undefined,
      ),
    )
  ).filter((id): id is AgentId => Boolean(id));
  const answer = await select({
    message: "Which coding agent should receive ProjectPilot?",
    options: [
      { value: "codex", label: "Codex" },
      { value: "claude", label: "Claude Code" },
      { value: "all", label: "Both" },
    ],
    initialValue: found.length === 1 ? found[0] : undefined,
  });
  if (isCancel(answer)) process.exit(0);
  return targets(answer);
}
async function chooseScope() {
  const answer = await select({
    message: "Where should ProjectPilot be installed?",
    options: [
      { value: "global", label: "Global" },
      { value: "local", label: "Current project" },
    ],
  });
  if (isCancel(answer)) process.exit(0);
  return answer as Scope;
}
async function install(options: {
  agent?: string;
  global?: boolean;
  local?: boolean;
  verbose?: boolean;
}) {
  if (options.global && options.local)
    throw new Error("Use only one of --global or --local.");
  const agentIds = options.agent ? targets(options.agent) : await chooseAgent();
  const scope = options.global
    ? "global"
    : options.local
      ? "local"
      : await chooseScope();
  const root = process.cwd();
  const incoming = await download();
  try {
    for (const agent of agentIds) {
      const target = pathFor(agent, scope, root);
      if (await exists(target)) {
        const yes = await confirm({
          message: `${target} exists. Replace its managed ProjectPilot files?`,
          initialValue: false,
        });
        if (isCancel(yes) || !yes) continue;
      }
      console.log(
        `Installed ${agents[agent].name} at ${await installOne(agent, scope, root, incoming, true)}.`,
      );
    }
  } finally {
    await rm(dirname(incoming.dir), { recursive: true, force: true });
  }
}
async function update(options: { agent?: string; all?: boolean }) {
  const root = process.cwd();
  const selected =
    options.agent || options.all
      ? targets(options.agent, options.all)
      : (Object.keys(agents) as AgentId[]);
  const incoming = await download();
  try {
    for (const agent of selected)
      for (const scope of ["global", "local"] as Scope[]) {
        const target = pathFor(agent, scope, root);
        const meta = await readMetadata(target);
        if (meta && compareVersions(incoming.version, meta.version) > 0)
          console.log(
            `Updated ${agents[agent].name} (${scope}) from ${meta.version} to ${incoming.version}: ${await installOne(agent, scope, root, incoming, true)}`,
          );
        else if (meta) console.log(`${agents[agent].name} (${scope}) is already at ${meta.version}.`);
      }
  } finally {
    await rm(dirname(incoming.dir), { recursive: true, force: true });
  }
}
async function uninstall(options: {
  agent?: string;
  all?: boolean;
  yes?: boolean;
}) {
  const root = process.cwd();
  const selected =
    options.agent || options.all
      ? targets(options.agent, options.all)
      : (Object.keys(agents) as AgentId[]);
  for (const agent of selected)
    for (const scope of ["global", "local"] as Scope[]) {
      const target = pathFor(agent, scope, root);
      const metadata = await readMetadata(target);
      if (!metadata) continue;
      const approved =
        options.yes ||
        (await confirm({
          message: `Remove ProjectPilot from ${target}?`,
          initialValue: false,
        }));
      if (isCancel(approved) || !approved) continue;
      await Promise.all(metadata.managedFiles.map((file) => rm(join(target, file), { force: true, recursive: true })));
      await rm(join(target, metadataFile), { force: true });
      await removeEmptyDirectories(target);
      if ((await readdir(target)).length === 0) await rm(target, { recursive: true, force: true });
      console.log(`Removed ProjectPilot-managed files from ${target}.`);
    }
}
async function info(json: boolean) {
  const root = process.cwd();
  const installations = [];
  for (const agent of Object.keys(agents) as AgentId[])
    for (const scope of ["global", "local"] as Scope[]) {
      const path = pathFor(agent, scope, root);
      installations.push({
        agent,
        scope,
        path,
        metadata: (await readMetadata(path)) ?? null,
      });
    }
  if (json)
    console.log(
      JSON.stringify({ cliVersion: "0.1.1", installations }, null, 2),
    );
  else
    for (const item of installations)
      console.log(
        `${agents[item.agent].name} (${item.scope}): ${item.metadata ? `installed ${item.metadata.version} at ${item.path}` : "not installed"}`,
      );
}

const program = new Command()
  .name("projectpilot")
  .description("Install and manage the ProjectPilot agent skill.")
  .version("0.1.1");
program
  .command("install")
  .option("--agent <agent>", "codex, claude, or all")
  .option("--global")
  .option("--local")
  .option("--verbose")
  .action(run(install));
program
  .command("update")
  .option("--agent <agent>", "codex, claude, or all")
  .option("--all")
  .action(run(update));
program
  .command("uninstall")
  .option("--agent <agent>", "codex, claude, or all")
  .option("--all")
  .option("--yes", "skip confirmation")
  .action(run(uninstall));
program
  .command("info")
  .option("--json", "machine-readable output")
  .action(run((options: { json?: boolean }) => info(Boolean(options.json))));
function run<T>(fn: (options: T) => Promise<void>) {
  return async (options: T) => {
    try {
      await fn(options);
    } catch (error) {
      console.error(
        `ProjectPilot: ${error instanceof Error ? error.message : String(error)}`,
      );
      process.exitCode = 1;
    }
  };
}
await program.parseAsync(process.argv);
