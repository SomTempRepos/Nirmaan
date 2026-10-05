# ADR template

Save as `docs/adr/NNNN-short-title.md`, numbering upward from 0001. Keep it to one page. A short, honest ADR beats a long one nobody reads.

```markdown
# NNNN. Title in plain words

- Status: proposed | accepted | superseded by NNNN
- Date: YYYY-MM-DD

## Context
What problem or pressure forces a decision now? Include constraints (free tier, public repo, phase, cost).

## Options considered
1. Option A - one line on what it is, and its main cost.
2. Option B - same.
3. Do nothing / defer - always include this one.

## Decision
What was chosen, in one or two sentences.

## Consequences
- Good: what gets easier or better.
- Bad: what gets harder, what is now locked in, what it costs.
- Failure modes: what the visitor sees if this part breaks.

## Revisit when
A concrete trigger, such as "free tier limits change", "the demo needs writes", "traffic exceeds X".
```

## Example titles worth recording early

- 0001 Static-first: Astro on GitHub Pages, no servers in phase 1
- 0002 Content in MDX collections with a typed schema
- 0003 Mobile app-like shell and desktop shell from one codebase
- 0004 Package manager choice (record whichever is picked)
