import assert from 'node:assert/strict';
import { readdir, readFile, stat } from 'node:fs/promises';
import process from 'node:process';
import path from 'node:path';
import test from 'node:test';

const root = path.resolve(import.meta.dirname, '..');
const outputDirectory = path.join(root, 'dist');
const base = process.env.ASTRO_BASE ?? '/';

async function filesIn(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const nested = await Promise.all(
    entries.map((entry) => {
      const entryPath = path.join(directory, entry.name);
      return entry.isDirectory() ? filesIn(entryPath) : [entryPath];
    }),
  );
  return nested.flat();
}

async function exists(filePath) {
  try {
    await stat(filePath);
    return true;
  } catch {
    return false;
  }
}

test('build emits the core static routes', async () => {
  assert.ok(await exists(path.join(outputDirectory, 'index.html')));
  assert.ok(await exists(path.join(outputDirectory, '404.html')));
  assert.ok(await exists(path.join(outputDirectory, 'work', 'index.html')));
  assert.ok(await exists(path.join(outputDirectory, 'ideas', 'index.html')));
});

test('all generated root-relative links and assets honor the Pages base', async () => {
  const htmlFiles = (await filesIn(outputDirectory)).filter((filePath) =>
    filePath.endsWith('.html'),
  );
  const expectedPrefix = base === '/' ? '/' : `${base.replace(/\/$/, '')}/`;

  for (const filePath of htmlFiles) {
    const html = await readFile(filePath, 'utf8');
    const attributes = html.matchAll(/\b(?:href|src)="([^"]+)"/g);

    for (const [, url] of attributes) {
      if (url.startsWith('/') && !url.startsWith('//')) {
        assert.ok(
          url.startsWith(expectedPrefix),
          `${path.relative(outputDirectory, filePath)} contains unbased URL ${url}`,
        );
      }
    }
  }
});

test('draft collection entries are not exposed in built output', async () => {
  const workIndex = await readFile(
    path.join(outputDirectory, 'work', 'index.html'),
    'utf8',
  );
  const ideasIndex = await readFile(
    path.join(outputDirectory, 'ideas', 'index.html'),
    'utf8',
  );
  const collectionDirectories = ['projects', 'ideas'];

  for (const collection of collectionDirectories) {
    const contentDirectory = path.join(root, 'src', 'content', collection);
    const entries = (await filesIn(contentDirectory)).filter((filePath) =>
      filePath.endsWith('.md'),
    );

    for (const entryPath of entries) {
      const source = await readFile(entryPath, 'utf8');
      const status = source.match(/^status:\s*(\w+)/m)?.[1] ?? 'draft';
      const title = source.match(/^title:\s*['"]?([^'"\n]+)['"]?\s*$/m)?.[1];
      if (status !== 'draft' || !title) continue;

      const id = path.basename(entryPath, '.md');
      const outputPath =
        collection === 'projects'
          ? path.join(outputDirectory, 'work', id, 'index.html')
          : path.join(outputDirectory, 'ideas', `${id}`, 'index.html');
      const index = collection === 'projects' ? workIndex : ideasIndex;

      assert.equal(
        await exists(outputPath),
        false,
        `draft route was generated for ${id}`,
      );
      assert.equal(
        index.includes(title),
        false,
        `draft title was included in the ${collection} index: ${title}`,
      );
    }
  }
});
