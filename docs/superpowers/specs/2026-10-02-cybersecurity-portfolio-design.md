# Cybersecurity Portfolio — Design Spec (v2)

## Subject (grounded in real resumes)
- **Who**: Taha Aliasgar Badami — entry-level Cybersecurity Analyst / Network Security Engineer
- **Where**: Pune, Maharashtra · BCA graduate, current MCA student
- **One real role**: IT Support Engineer / Security Analyst L1, Olympus Computers, Pune (Sep 2024 – 2025)
- **Certs**: CEH (EC-Council, 2025), CCNA (Sysap Technologies, 2023), CHFI (EC-Council, 2026)
- **Audience**: hiring managers looking for security talent (SOC, VAPT, forensics, infra)

## Visual direction (v2 — replaces v1 neon-on-black template)
v1 was a generic "hacker terminal" look the client rejected. v2 is grounded in
**network security operations**: packet analysis, topology maps, alert triage.

### Color tokens
| Role | Hex |
|---|---|
| Base | `#050811` |
| Panel | `#0b1226` |
| Panel-2 | `#111a33` |
| Border | `#1c2744` |
| Primary (cyan) | `#00e5ff` |
| Secondary (amber) | `#ffb020` |
| Text | `#e6e9f2` |
| Muted | `#7c8499` |
| Danger | `#ff5d5d` |

### Type
- Headings: **Space Grotesk** (Google Fonts) — geometric, distinctive
- Body: **Inter** (Google Fonts)
- Mono / terminal: **JetBrains Mono**

### Layout
- Full-viewport hero with animated **particle network** background (the signature element)
- Drifting gradient orbs + faint perspective grid behind sections
- Fixed terminal sidebar (kept, restyled) on desktop; collapses on mobile
- Sections: Hero → Skills → Experience → Projects → About → Contact

### Principles
- One memorable element (particle network); everything else quiet
- No SaaS-card-everywhere, no all-caps labels, no em-dash fragments
- Motion: page-load reveal + hover only; particle field is ambient, not reactive-to-scroll
- Responsive to mobile, keyboard-accessible, respects `prefers-reduced-motion`

## Content corrections (v1 fabricated roles — removed)
- DELETED: Accenture Associate Developer (2021–2022)
- DELETED: Capgemini Software Engineer (2022–2023)
- DELETED: Cybersecurity Analyst at "Various Organizations" (2023–Present)
- REPLACED with: IT Support Engineer / Security Analyst L1 — Olympus Computers, Pune (Sep 2024 – 2025)

## v2 implementation (verified 2026-10-02)
- **Production build**: `npm run build` passes — 1559 modules, 0 errors
- **Runtime**: Playwright headless Chromium verifies 15/15 DOM checks + 9/9 interaction checks, 0 console/page errors
- **Signature element**: `<canvas>` particle network (90 particles, 130px connect, 180px mouse repulsion), respects `prefers-reduced-motion`
- **Ambient**: two drifting gradient orbs (cyan/amber, 24s cycle) + perspective grid floor
- **Sections**: 01 Skills → 02 Certifications → 03 Experience → 04 Projects → 05 About → 06 Contact
- **Certifications section added**: CEH / CHFI / CCNA were previously rendered nowhere
- **Type**: Space Grotesk (display) + Inter (body) + JetBrains Mono (terminal), via Google Fonts CDN
- **Terminal**: slide-in panel, `view <section>` commands drive smooth-scroll navigation (verified: scrollY 897 after `view skills`)
- **Mobile**: 390px viewport, 0 horizontal overflow, hamburger menu
- **Known deviation from spec**: spec listed `website` social key; data has none, so Contact renders only GitHub + LinkedIn