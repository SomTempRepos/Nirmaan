---
name: nirmaan-adaptive-shell
description: How the Nirmaan site is structured to feel like an app on mobile and like a studio site on desktop. Use when building or changing navigation, the page shell or layout, the bottom tab bar, drawers or sheets, page transitions, responsive behavior, the web app manifest, safe-area handling, or anything that should look different on phone versus desktop. Also use whenever a new page or route is added, so it fits both shells.
---

# Nirmaan adaptive shell

The owner wants the site to look and behave differently on a phone (app-like) and on a desktop. This skill records the decision and the rules that keep it from turning into two diverging sites.

## The decision (fixed)

**One codebase, one URL per page, two shells selected by screen size.** The content is identical. The frame around it (navigation, layout, secondary actions) differs.

Why not the alternatives:
- Separate mobile and desktop sites: GitHub Pages serves the same static files to everyone, and duplicate pages fragment shared links and search results.
- Device detection in JavaScript: causes flashes of the wrong layout and duplicates logic.

Links from LinkedIn and resumes must open correctly on any device, which is why URL parity matters.

## Mobile shell (app-like)

Default breakpoint: phone shell below 768px. Override in `docs/DESIGN.md` if the owner changes it.

- **Bottom tab bar** for the 4-5 primary destinations listed in `docs/DESIGN.md`. Keep it persistent across navigations so it doesn't re-render or flash.
- **Top app bar** showing the current screen's title, with a back control on detail screens (a case study opened from the list).
- **Screens, not pages.** Navigation between routes should feel like moving between app screens, using the client-side router and view transitions that Astro provides. The names of the component and directives have changed between Astro major versions, so read the current Astro docs before writing this. Do not write it from memory.
- **Sheets for secondary actions** (contact, share, project details). Use shadcn's Sheet or Drawer on mobile. On desktop, the same action can open a Dialog. Write the content once and swap only the container.
- **Safe areas and viewport:** set `viewport-fit=cover`, pad with `env(safe-area-inset-*)`, and size full-height layouts with `dvh` units, never bare `100vh`.
- **Touch:** targets at least 44x44px, no hover-only controls, sensible overscroll and scroll restoration.
- **App-like in structure, not imitation.** Do not recreate iOS or Android chrome pixel for pixel. The aim is the navigation model and feel, wearing the Nirmaan design.

## Desktop shell (studio)

Default: desktop shell from 1024px. Between 768px and 1023px, use the desktop content layout with the mobile navigation until 1024px, unless `docs/DESIGN.md` says otherwise.

- Top navigation or side rail with the same destinations as the tabs.
- Wider, multi-column layouts. A case study gets a readable text column plus a sticky outline or diagram panel.
- Real hover and focus states, and keyboard support throughout.
- Optional command palette (Ctrl/Cmd+K). Add it only if the page-weight budget allows and the owner approves the dependency.
- Keep prose measure under about 80 characters even on wide screens.

## Parity rules

- Same routes, same content, same page metadata on both shells.
- Nothing is reachable only by gesture. Every destination works by link, keyboard and screen reader.
- Never hide meaningful content on one shell.
- Test both at 390x844 and 1440x900 before calling any layout work done.

## Performance guardrails

- The shell is the one place interactivity is expected, so keep its JavaScript small. Hydrate islands with the narrowest directive that works, including media-conditioned loading where Astro supports it (check the current docs).
- No animation library without the owner's approval.
- Honor `prefers-reduced-motion`: transitions become instant, nothing is lost.
- Lighthouse performance and accessibility targets are in CI. A shell change that drops either below target is not done.

## Installability

A web app manifest, icons, and a `theme-color` are fine in v1, so the site can be added to a home screen. Do **not** add a service worker or offline caching in v1. That needs an ADR (see `nirmaan-architecture`) because of cache-invalidation risk.

## When adding a route

1. Decide whether it is a primary destination (tab/nav) or a detail screen. Primary destinations are limited to 5 and are the owner's call.
2. Add it to both shells' navigation as appropriate.
3. Check back behavior and transitions on mobile, and focus handling on desktop.
4. Add page title, description and share-image metadata.
5. Confirm the page works with JavaScript slow or blocked: content must still render.
