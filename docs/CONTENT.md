# Adding projects and ideas

Project and idea content lives in Markdown under `src/content/`. Astro validates the frontmatter against `src/content.config.ts` during development and production builds.

## Projects

1. Copy `src/content/projects/project-template.md` to a descriptive filename such as `queue-replay-tool.md`.
2. Replace every `[TODO: ...]` with owner-confirmed facts. Do not publish until the story and media are ready.
3. Set `status: published` only after reviewing confidentiality. Choose `public`, `abstracted`, or `rebuilt`; never commit employer/client source, customer data, internal hostnames, or uncleared exact metrics.
4. Set `featured: true` to nominate a project for Home. Home shows up to two featured published projects, or the first two ordered published projects if none are featured.
5. Add external destinations under `links` with a clear label and URL. They open in a new tab with safe `rel` attributes.
6. Add an optional `videoUrl` for YouTube, Vimeo, or an MP4 URL. The page does not contact the video host until the visitor selects “Load video”; a direct link remains available.
7. Put cleared screenshots and diagrams in `public/projects/<project-id>/` and reference them from Markdown with the current GitHub Pages base, for example `/Nirmaan/projects/<project-id>/architecture.png`. If the deployment base changes, update these media URLs. Write useful image alt text.

Each published project gets `/work/<markdown-filename>/`. Its case study should explain the problem, constraints, your role, decisions and trade-offs, evidence/outcome, lessons, and supporting technologies. Never invent project details, results, or dates.

## Ideas

1. Copy `src/content/ideas/idea-template.md` to a descriptive filename such as `retry-budget-notes.md`.
2. Write a short note grounded in your own experience or reasoning. `excerpt` is shown on the Ideas page; the Markdown body follows it.
3. Add tags or `relatedProjects` only when relevant. Related project values use the Markdown filename/collection ID.
4. Keep `status: draft` until ready. Set `status: published` to show the note on `/ideas/`; up to three recent notes will also appear on Home.

Draft entries never appear in the public indexes or project routes. Run `pnpm run build` before publishing to confirm schemas and generated routes.
