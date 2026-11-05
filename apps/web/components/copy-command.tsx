"use client";

import { useState } from "react";

export function CopyCommand({ command }: { command: string }) {
  const [copied, setCopied] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(command);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1600);
    } catch {
      setCopied(false);
    }
  }

  return <button className="copy-command" type="button" onClick={copy} aria-live="polite" aria-label={copied ? "Command copied" : "Copy command"}>{copied ? "Copied" : "Copy"}</button>;
}
