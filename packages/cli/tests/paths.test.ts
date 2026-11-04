import { describe, expect, it } from 'vitest';
import { posix, win32 } from 'node:path';

describe('installation path conventions', () => {
  it('keeps project skills inside agent-specific folders', () => {
    expect(posix.join('/repo', '.agents', 'skills', 'product-helper')).toBe('/repo/.agents/skills/product-helper');
    expect(posix.join('/repo', '.claude', 'skills', 'product-helper')).toBe('/repo/.claude/skills/product-helper');
    expect(win32.join('C:\\repo', '.agents', 'skills', 'product-helper')).toBe('C:\\repo\\.agents\\skills\\product-helper');
    expect(win32.join('C:\\repo', '.claude', 'skills', 'product-helper')).toBe('C:\\repo\\.claude\\skills\\product-helper');
  });
});
