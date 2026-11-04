import { describe, expect, it } from 'vitest';
import { posix, win32 } from 'node:path';

describe('installation path conventions', () => {
  it('keeps project skills inside agent-specific folders', () => {
    expect(posix.join('/repo', '.agents', 'skills', 'project-pilot')).toBe('/repo/.agents/skills/project-pilot');
    expect(posix.join('/repo', '.claude', 'skills', 'project-pilot')).toBe('/repo/.claude/skills/project-pilot');
    expect(win32.join('C:\\repo', '.agents', 'skills', 'project-pilot')).toBe('C:\\repo\\.agents\\skills\\project-pilot');
    expect(win32.join('C:\\repo', '.claude', 'skills', 'project-pilot')).toBe('C:\\repo\\.claude\\skills\\project-pilot');
  });
});
