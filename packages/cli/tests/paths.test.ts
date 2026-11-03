import { describe, expect, it } from 'vitest';
import { join } from 'node:path';

describe('installation path conventions', () => {
  it('keeps project skills inside agent-specific folders', () => {
    const project = 'repo';
    expect(join(project, '.agents', 'skills', 'project-pilot')).toBe(join('repo', '.agents', 'skills', 'project-pilot'));
    expect(join(project, '.claude', 'skills', 'project-pilot')).toBe(join('repo', '.claude', 'skills', 'project-pilot'));
  });
});
