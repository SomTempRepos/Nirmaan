# Nirmaan design decisions

**Status: Instrument Panel direction selected 2026-10-05.** Theme supports light and dark modes, follows the system by default, and remembers a visitor's manual choice.

Tokens live in `src/styles/global.css` (Tailwind theme plus shadcn CSS variables). This file is the human-readable source of truth for what those tokens mean and why.

## Identity

- One-sentence feel: a quiet engineering notebook with a visible request trace.
- Signature element (the one memorable thing; everything else stays quiet): the request-trace panel, showing problem -> decision -> evidence.
- What it must never look like: a developer-portfolio template, a SaaS landing page

## Palette and theme

- Direction: **Instrument Panel**. The mist and green-charcoal neutrals suggest a measured engineering instrument; cobalt marks the main action, coral calls attention to selected decisions/evidence, and chartreuse marks trace/system state. Keep accents sparse so project evidence remains the first thing visitors notice.
- Canvas: light `#EEF3F1`, dark `#121B1D`.
- Surface: light `#FBFCFA`, dark `#1C282B`.
- Ink: light `#172426`, dark `#EDF3F1`.
- Primary (cobalt): light `#254FC7`, dark `#A7BAFF`.
- Secondary (coral): light `#B84538`, dark `#FF9A88`.
- Tertiary (chartreuse): light `#687D24`, dark `#D1E77F`.
- Supporting neutrals: muted text light `#5A6C68` / dark `#A9B7B4`; divider light `#CED8D5` / dark `#3A494C`.
- Use primary for the main action, active navigation, and keyboard focus; use secondary for occasional evidence/decision emphasis; reserve tertiary for compact non-text trace markers. Never use color alone to communicate status. Check text pairings against WCAG AA (4.5:1 normal text; 3:1 large text and meaningful UI boundaries). The light chartreuse is for markers only because it does not meet normal-text contrast on the light surface.
- Default to `prefers-color-scheme`; a manual light/dark choice is stored locally and overrides the system preference. Do not infer theme from time of day.

## Type

- Family: Fira Code throughout the interface and prose, preferring an installed FiraCode Nerd Font before the web-loaded Fira Code font. Lucide SVGs provide interface icons; Nerd Font glyphs are not used as UI icons.

## Shape and density

- Radius scale (with hierarchy, not one value everywhere): 4px controls and cards; 12px trace panel; no decorative rounding.
- Spacing density: compact metadata and generous section breaks; prose stays readable on a phone.
- shadcn preset in `components.json`: _not decided_ (record the choice here once made)

## Motion budget

- Allowed: one orchestrated moment per page at most; motion that responds to a user action.
- Not decided: which moment, if any.

## Voice

- Plain, specific, sentence case. No hype words. See `nirmaan-case-studies` skill.
- Tagline / positioning line: not decided; do not publish the proposed line until confirmed.

## Navigation

- Primary destinations (these become the mobile tabs and the desktop nav, 4-5 max): Home, Work, Ideas, About, Contact.
- Desktop: sticky studio header with icon-and-label raised navigation controls and a compact theme icon button.
- Mobile: fixed bottom tabs with Lucide icons and labels; keep the theme control in the top app bar.
- Breakpoints: defaults are in the `nirmaan-adaptive-shell` skill; override here.

## Decision log

- 2026-10-01: chose a code-oriented type system and four primary routes so the empty scaffold becomes a usable first release without inventing project claims.
- 2026-10-05: selected the Instrument Panel palette and system-following light/dark theme with a remembered manual override. Keep the request-trace panel as the signature element; use color to clarify hierarchy rather than add decoration.
- 2026-10-05: use Fira Code for metadata, Lucide icons for navigation and theme control, a sticky desktop header, and fixed icon tabs on mobile. Keep project cards neutral and remove accent stripes.
