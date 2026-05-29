# CLAUDE.md — Work Hard Company Website

## Project Context
This is a prop website for a short film satirizing corporate America. The company 
("Work Hard Company") is intentionally vague — it should mention every industry 
(AI, tech, finance, consulting, sales) without clarifying what it actually does. 
The goal is a real-looking, corporate website that confuses rather than informs. 
Buzzword-heavy copy is intentional, not a bug.

## Pages
1. Home — Hero with building image front and center, fake stats, vague taglines
2. Mission — Corporate jargon, no clear mission
3. Our Team — Generic stock photo headshots, vague titles
4. What We Do — Mention every industry, explain nothing
5. Careers — Vague job titles, no real descriptions
6. Contact — Standard contact form, no real info

## Aesthetic
- Sleek, hypermodern AI company feel (reference: Palantir.com energy, not a copy)
- Cold, professional, dark or neutral palette
- Scrollable, full page-length sections
- Stock images only — must be copyright-free (Unsplash/Pexels style)
- Building stock image as hero on homepage (placeholder until real location scout image)
- Team headshots are stock placeholders until real cast photos provided

## Fake Stats (use these verbatim)
- $4.2B revenue last fiscal quarter
- 127 countries served
- 30,000+ enterprise clients worldwide
- 94% reduction in client operational inefficiency
- #1 in customer satisfaction across 12 consecutive quarters
- 78% of Fortune 500 companies trust our platform
- 1.4M hours of productivity unlocked for clients in 2025
- $18.2B total contract value secured in 2025
- 99.97% uptime across all infrastructure

## Approved Copy / Taglines
- "Provide innovative solutions"
- "Managing modernization"
- "Innovating at the edge of tomorrow"

## Screenshot Workflow
- Puppeteer is installed in `./node_modules/puppeteer/`. 
- Chrome cache is at `~/.cache/puppeteer/`.
- Always screenshot from localhost: `node screenshot.mjs http://localhost:3000`
- Screenshots saved to `./temporary-screenshots/screenshot-N.png` (auto-incremented)
- Optional label: `node screenshot.mjs http://localhost:3000 label`
- After screenshotting, read the PNG with the Read tool for visual comparison
- When comparing, be specific: "heading is 32px but reference shows ~24px"
- Check: spacing, font size/weight, colors (exact hex), alignment, border-radius, shadows

## Dev Server
- Start with: `npm run dev` (serves at http://localhost:3000)
- Do not start a second instance if already running

## Frontend Rules
- Invoke the `frontend-design` skill before writing any frontend code, every session
- Tailwind CSS for styling
- Copyright-free images only (placeholder URLs via https://placehold.co/ or Unsplash)
- Mobile-first responsive
- Do at least 2 screenshot comparison rounds before stopping

## Anti-Generic Guardrails
- Never use default Tailwind palette (indigo-500, blue-600, etc.)
- Never use flat `shadow-md` — use layered, color-tinted shadows
- Never pair the same font for headings and body
- Never use `transition-all`
- Every clickable element needs hover, focus-visible, and active states
- Surfaces should have a layering system (base → elevated → floating)

## Hard Rules
- Confusing copy is intentional — do not simplify or clarify it
- Do not add sections not listed above
- Do not use default Tailwind blue/indigo as primary color
- Do not stop after one screenshot pass