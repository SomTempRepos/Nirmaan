import process from 'node:process';
import { defineConfig } from 'astro/config';

const base = process.env.ASTRO_BASE ?? '/';

export default defineConfig({
  site: 'https://somtemprepos.github.io',
  base,
  output: 'static',
});
