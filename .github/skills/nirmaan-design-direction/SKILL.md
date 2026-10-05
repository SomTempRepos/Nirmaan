---
name: nirmaan-design-direction
description: Design brief and anti-generic rules for the Nirmaan site. Use for ANY visual or UI work on this project - new pages, sections, hero, cards, components, layout, colors, typography, animation, styling or restyling shadcn/ui components, and any copy that appears on a page. Use it even for small tweaks like "add a button style" or "make a features grid", because generic defaults creep in through small changes.
---

# Nirmaan design direction

The goal is a site that nobody mistakes for a template or an AI-generated portfolio. Generated sites share a recognizable set of defaults. This skill exists so each design choice here is made for this project, not inherited from habit.

## The brief (fixed)

- **Audience:** recruiters and hiring managers, skimming quickly, often on a phone.
- **Job of the site:** within about 60 seconds, a visitor knows what the owner builds, believes it is real, and sees that he thinks clearly. Distinctiveness serves that job. It never replaces it.
- **Subject world:** backend and AI systems engineering - request lifecycles, queues, state graphs, traces, schemas, latency budgets, failure modes. Distinctive visual choices should come from this world, not from generic "tech" imagery.
- **Name:** Nirmaan means to build or construct. That vocabulary is available as raw material, but use it with restraint. A literal blueprint-grid background is its own cliche.

## Process (follow in order)

1. **Read `docs/DESIGN.md`.** Anything marked _not decided_ is not yours to invent.
2. **If a needed decision is open, propose, don't build.** Write a compact plan: 4-6 named hex colors, type roles, a layout concept with ASCII wireframes for both mobile (about 390px) and desktop (about 1440px), and a short list of principles. Offer two genuinely different directions, not two variations of one. Stop and ask the owner to choose. Record the choice in `docs/DESIGN.md`.
3. **Review the plan against the defaults.** Ask: "Would I produce this for any developer portfolio?" If yes, revise that part and say what changed and why.
4. **Build from tokens.** Colors, radius, spacing and type come from CSS variables in `src/styles/global.css`. Do not hardcode hex values or one-off sizes inside components.
5. **Critique before declaring done.** If a browser or screenshot tool is available, look at the result at 390px and 1440px. Remove one decoration. Check against `references/ai-tells.md`.

## Where to spend boldness

Pick one memorable thing and keep everything around it quiet. Good candidates for this project, because they are also proof of the work (principle 1):

- the system itself as the visual: a request trace, state graph, or queue view designed as part of the identity rather than pasted in as an illustration
- a strong typographic treatment drawn from the build vocabulary

These are suggestions for the proposal in step 2, not mandates. Whatever is chosen, record it in `docs/DESIGN.md` as the signature element.

## Rules, and why

- **Restyle shadcn components after adding them.** The preset is a starting point. Set radius, borders, shadows and spacing from the project tokens, or the site looks like every other shadcn site.
- **Use a radius scale with hierarchy.** One radius on everything, with identical soft shadows, is the clearest tell of a generated page.
- **At most two type families, chosen deliberately.** Do not leave the preset's font in place by default. Keep prose lines under 80 characters.
- **Motion is rare.** No fade-and-slide-up on every section, no hover-lift on every card. One orchestrated moment at most. Motion that responds to a user action (opening, expanding, confirming) is fine. Respect `prefers-reduced-motion`.
- **No filler imagery.** No stock photos, gradient blobs, abstract 3D shapes, emoji as icons, or fake logo walls. Use real diagrams, real screenshots, or typography.
- **Structure must carry information.** Use numbers only for real sequences, dividers and labels only when they encode something. No all-caps eyebrow above every heading.
- **Copy is design.** Plain verbs, sentence case, specific over clever. Buttons say what happens ("Read the case study", not "Learn more"). No hype words (see `nirmaan-case-studies`).
- **Never invent content.** No made-up projects, metrics, testimonials, employers, or dates. Use a visible placeholder such as `[TODO: real metric]` and tell the owner.

## Quality floor (do it without announcing it)

- Responsive from 360px up, no horizontal page scroll
- Text contrast meets WCAG AA, visible keyboard focus on every interactive element
- Touch targets at least 44x44px on mobile, no hover-only affordances
- Semantic landmarks and heading order, alt text on every meaningful image
- Reduced-motion respected, no layout shift from late-loading fonts or images

## Done means

The result follows `docs/DESIGN.md`, passes the checks above, and none of the items in `references/ai-tells.md` appear without a stated reason.
