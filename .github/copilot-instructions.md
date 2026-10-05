# Nirmaan

Nirmaan is a studio site by Somnath Jha. It is hiring-manager-facing proof of backend and AI systems engineering, and it must be able to grow into a company later without a rebrand. For the next 6-12 months the audience is recruiters and hiring managers, who skim fast and often on a phone.

Read `docs/PRINCIPLES.md` before any non-trivial change. Read `docs/DESIGN.md` before any visual change.

## Stack (decided)

- Astro (static output), MDX for case studies and posts, Tailwind CSS, shadcn/ui on Base UI, TypeScript.
- React only as islands, only where real interaction is needed.
- Hosted on GitHub Pages, built and deployed by GitHub Actions.
- Phase 1 has no servers and no database.
- Use the package manager whose lockfile is already in the repo. Never create a second lockfile.
- Astro, Tailwind and shadcn/ui change quickly. Check their current official docs before writing config or using an API from memory.

## Skills (in `.github/skills`)

- `nirmaan-design-direction`: any visual, UI, or on-page copy work
- `nirmaan-adaptive-shell`: navigation, layout shell, mobile (app-like) vs desktop, page transitions
- `nirmaan-architecture`: backend, data, hosting, CI, dependencies, phases, ADRs
- `nirmaan-case-studies`: writing and structuring project content

## Working rules

- Work on a branch, make small commits with conventional prefixes (`feat:`, `fix:`, `chore:`, `docs:`), and open a PR. `main` stays deployable.
- Before saying a task is done, run the build, lint, format check and `astro check`, and report the actual results.
- Never weaken a CI check to get a green build. Fix the cause.
- Ask before adding a dependency, a service, or anything that needs a server.
- The repo is public. Never commit secrets, employer or client material, or personal data.
- Never invent projects, metrics, employers, dates, quotes, or logos. Use a clearly marked placeholder and say so.
