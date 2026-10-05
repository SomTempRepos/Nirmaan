# Nirmaan

A static portfolio for backend and AI systems engineering work, built with Astro and deployed through GitHub Pages.

## Requirements

- Node.js 24.16.0 or newer
- pnpm 10.28.2

## Local development

```sh
pnpm install --frozen-lockfile
pnpm dev
```

## Quality checks

```sh
pnpm format:check
pnpm lint
pnpm check
pnpm build
pnpm test
```

The generated-output tests run after a successful build. `pnpm test` verifies required routes, GitHub Pages base paths, and that draft collection entries are not exposed.

## Project structure

```text
src/
  components/       Reusable content and media presentation
  content/          Markdown project and idea entries
  layouts/          Shared document and responsive site shell
  lib/              Shared content and URL helpers
  pages/            Route composition
  styles/           Theme tokens and global presentation
  content.config.ts Validated content collection schemas
tests/              Generated-output smoke tests
docs/               Design, principles, content workflow, and decisions
.github/workflows/  Pull request checks and Pages deployment
```

Projects and ideas are authored in Markdown. See [docs/CONTENT.md](docs/CONTENT.md) for draft, confidentiality, media, and publishing rules.

## Deployment

GitHub Actions builds for `https://somtemprepos.github.io/Nirmaan/` by setting `ASTRO_BASE=/Nirmaan`. Local development and builds default to `/` so Astro's dev and preview servers work normally. The workflow validates every pull request and deploys successful pushes to `main`. Enable GitHub Pages for the repository with **GitHub Actions** as the build and deployment source.
