---
name: nirmaan-architecture
description: System-design rules for the Nirmaan site - what to build when, and how. Use for any architecture decision - adding a backend, API, database, auth, live demo, form handling, analytics, hosting or CI/CD change, new dependency or service, content or data model, folder structure, or when judging whether a feature belongs in the current phase. Use it BEFORE adding any dependency, server, or paid service, and when writing or reviewing an ADR.
---

# Nirmaan architecture

The owner is a backend and AI systems engineer, and the site is evidence of how he designs. The correct architecture is the smallest one that proves something real. Complexity added early is both a maintenance cost and a bad signal to the people reading the repo.

## Phases

**Phase 1 (current): static, zero servers.**
- Astro static output on GitHub Pages, deployed by GitHub Actions.
- Content lives in the repo as Markdown/MDX in Astro content collections with a typed schema.
- Contact via a free third-party form service or `mailto:`. Analytics via a cookieless, privacy-friendly free option.
- No database, no API, no auth, no CMS.

**Phase 2: one live demo service.** Only when a real demo exists that a static page can't deliver. Requirements, all of them:
- A small FastAPI service in a container, one purpose, one health endpoint.
- **Cost and abuse control:** per-IP rate limit, a hard daily spend cap, and a kill switch that turns the demo off without a deploy.
- **Cold starts:** free tiers sleep. The UI shows a clear "waking up" state and times out gracefully.
- **Replay fallback:** a recorded run of the demo that works when the service is down, asleep, or capped.
- **Untrusted input:** visitor input is hostile by default. No tools with side effects, no secrets in prompts, outputs length-limited, and no storage of visitor input without a visible notice.
- **CORS** restricted to the site's origin. No secrets in the client bundle.
- **Persistence:** free backends often have ephemeral filesystems, so a SQLite file written at runtime can vanish on restart. Choose deliberately: a read-only SQLite file bundled at build time, a hosted SQLite-compatible service, or hosted Postgres with pgvector. Record the choice in an ADR.

**Phase 3: only if the company becomes real.** Split into separate apps or subdomains, add auth, add whatever a product needs. Do not pre-build any of it.

## The gate

Before adding anything, answer in writing (in the PR or ADR):
1. Does it prove something real? (principle 1)
2. Does it help a recruiter decide faster? (principle 3)
3. Can it be finished and maintained? (principle 5)
4. Does it need a server, and what does the visitor see when that server is down?
5. What is the worst-case monthly cost if it is abused?

If any answer is weak, the feature waits. Say so plainly instead of building a lighter version of it.

## ADRs

Record architectural decisions in `docs/adr/NNNN-short-title.md` using `references/adr-template.md`. An ADR is required for: any new runtime service, database, auth, paid service, framework or major library swap, and a service worker. Include options considered and a "revisit when" trigger. Short is fine; missing is not.

## Structure and boundaries

- Content separate from code. Adding a case study never requires touching components.
- `.astro` pages compose; they don't hold business logic. Shared logic goes in `src/lib`.
- React islands only where interaction is required, hydrated with the narrowest directive that works.
- Keep sections modular so "writing" or "lab" can later become their own app or subdomain.
- Do not create empty sections or placeholder routes for future phases.

## Security and confidentiality

- The repo is public, including history. A committed secret is leaked even after deletion. Use hosting-side secrets for anything sensitive, and check current Astro docs for how public versus private environment variables are exposed.
- Employer and client material never enters the repo. If a request implies it, stop and ask.
- Avoid third-party scripts. Anything that sets cookies or tracks individuals needs the owner's explicit approval.
- Form handling needs spam protection and must not store personal data in the repo.

## Dependencies

- Add few. Pin versions through the lockfile. Prefer widely used, maintained packages.
- Before adding one, say what it replaces, its bundle cost, and who maintains it.
- Dependabot (or equivalent) handles updates through PRs. Do not bump major versions casually.

## CI/CD gates

Pull requests run: lint, format check, `astro check`, build, Lighthouse CI (targets 90+ performance and accessibility), and internal link checking. Deploy to Pages runs only after all pass on `main`. External link checking runs on a weekly schedule, not on PRs, because other people's sites flake.

Never loosen a threshold, skip a check, or add a broad ignore rule to get a green build. Find and fix the cause. If a check is genuinely wrong, raise it with the owner and record the change.

## Pin to current docs

Astro, Tailwind, shadcn/ui and GitHub Actions change often. Before writing configuration or workflow files, read the current official docs for the version in `package.json`. Pin GitHub Actions to specific versions.
