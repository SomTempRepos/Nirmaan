---
name: nirmaan-case-studies
description: How to write, structure and review case studies, project pages, architecture write-ups, posts and any copy that describes Somnath's work on the Nirmaan site. Use when adding a project, writing or editing MDX content, defining the content collection schema or frontmatter, creating architecture diagrams, drafting the about or positioning text, or filling any page with placeholder content. Use it even when the request is just "add a project" or "write some sample text".
---

# Nirmaan case studies and content

The site's argument is proof over promises. Case studies are where that proof lives, and hiring managers for systems roles read them closely because they reveal judgment. A fabricated or inflated case study is worse than none.

## Prime directive: never fabricate

Do not invent projects, metrics, employers, stacks, roles, dates, quotes, or outcomes. Use only what the owner supplied in this conversation or in the repo. If something is missing, ask for it, or write a visible placeholder like `[TODO: real latency figure]` and tell the owner what is missing.

Content with placeholders must not be published. Give the collection schema a `status: draft | published` field and exclude drafts from the production build.

## Confidentiality

Before writing about any project, ask whether it can be shown as it is. Each case study records one of these in frontmatter:

- `public`: safe to show as built
- `abstracted`: real design, with names, hosts, customers and exact figures generalized
- `rebuilt`: a sanitized version rebuilt independently of employer code

Never include internal hostnames, customer names, proprietary code or data, or exact internal metrics unless the owner confirms they are cleared. When unsure, abstract and ask.

## Frontmatter schema (starting point)

Define in `src/content.config.ts` with a validated schema:

- `title`, `summary` (one sentence: what it is and the outcome)
- `role` (exactly what the owner did, not the team), `timeframe`
- `stack` (list), `status` (`draft` | `published`), `confidentiality` (see above)
- `links` (optional: repo, demo), `order` (for the index)

## Structure of a case study

Target 600-1200 words plus one diagram. A reader should get the point in 60 seconds from the summary block alone, then be able to go deep.

1. **Summary block:** one-sentence summary, role, timeframe, stack, outcome.
2. **Problem and constraints:** what was hard, and what limited the options.
3. **What I built:** the architecture, with a diagram.
4. **Decisions and trade-offs:** for each major decision, the options considered, the choice, the reason, and the cost. This is the heart of the piece.
5. **What broke or what I'd change:** real failures and what they taught.
6. **Outcome:** only real numbers, with context for what they measure.
7. **Next:** what would be done with more time.

## Voice

- Lead with the problem, never the stack. The stack is supporting detail.
- Be exact about ownership. Use "I" for what the owner did and "we" or the team's name for shared work.
- Plain, specific, sentence case. Prefer concrete nouns and verbs.
- Admit uncertainty and limits. Honest scale is more persuasive than inflated scale.
- Avoid hype and filler: passionate, leverage, robust, seamless, cutting-edge, state-of-the-art, end-to-end solution, game-changing.
- Numbers need context: "p95 latency dropped from X to Y on Z load", not "much faster".

## Diagrams

- One diagram that earns its place beats three decorative ones.
- Label each box by its responsibility, not only the technology ("Retrieval service", not just "pgvector").
- Show async boundaries, queues, and where failures are handled.
- Use Mermaid for simple flows. Use an interactive diagram (React Flow) only for the one or two flagship systems, because it adds JavaScript weight.
- Every diagram has a caption and text alternative. On mobile, make wide diagrams scroll inside their own container or provide a simplified view. The page itself never scrolls sideways.

## Positioning and about text

The owner is targeting AI engineer and backend/AI systems roles. A proposed positioning line is "Backend engineer building production AI systems." It is a proposal, not a decision. Confirm the final wording with the owner before using it anywhere, and record it in `docs/DESIGN.md`.

## Review checklist

- Every factual claim traces to something the owner provided
- Confidentiality field set and respected
- Summary block works on its own
- Trade-offs are explicit, not just a tech list
- No banned hype words, no invented numbers
- Diagram labelled, captioned, readable on a phone
- Frontmatter validates and `status` is correct
