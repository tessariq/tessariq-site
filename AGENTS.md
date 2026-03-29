# AGENTS.md
Guidance for coding agents working in the Tessariq website repository.

## Scope and intent
- This is the Tessariq website repository, built with Hugo and Thulite/Doks.
- Main website content lives under `content/`.
- Site configuration lives under `config/`.
- Theme overrides live under `layouts/`.
- Repo-local assets live under `assets/` and `static/`.
- Planning and brand notes live under `docs/`; they are source material, not rendered site pages.
- Keep changes small, deliberate, and behavior-preserving unless explicitly requested.
- Do not hand-edit generated outputs under `public/`, `resources/_gen/`, or dependency contents under `node_modules/`.

## Source-of-truth files
- Developer workflow and local commands: `README.md`.
- Package scripts and Node toolchain: `package.json`.
- Core Hugo site behavior: `config/_default/hugo.toml`.
- Theme, SEO, and UX settings: `config/_default/params.toml`.
- Brand asset policy and website-specific visual decisions: `docs/brand-web.md`.
- Messaging, IA, and copy direction: `docs/notes-website.md`.
- Brand asset sync workflow: `scripts/sync-brand-assets.sh`.

## Toolchain and environment
- Node.js version: `>=20.11.0` (`package.json`).
- Package manager: `npm` (`package-lock.json` is committed).
- Hugo version: extended edition `>=0.120.0` (`README.md`).
- ImageMagick is required only when regenerating favicon raster assets via `scripts/sync-brand-assets.sh`.
- Prefer commands that reflect the repo's documented local workflow.

## Build, formatting, and validation commands
Use these defaults unless a task requires otherwise.

### Install dependencies
- `npm install`

### Development
- Preferred local dev server: `npm run dev`
- Content-only Hugo server: `hugo server`

### Formatting
- Check and write formatting: `npm run format`

### Production build
- Build the site into `public/`: `npm run build`

### Preview production output
- Preview the built site locally: `npm run preview`

## Content authoring guidelines
Follow the existing content model and keep tone consistent across pages.

### Structure and front matter
- Keep page content in the existing sections under `content/` (`blog`, `docs`, `manifesto`, taxonomies, and top-level pages).
- Preserve stable slugs and section placement unless the task explicitly requires an IA change.
- Use valid front matter and keep keys consistent with neighboring content.
- Respect the configured permalinks:
  - blog pages publish under `/blog/:slug/`
  - docs pages publish under `/docs/:sections[1:]/:slug/`

### Copy and voice
- Prefer an "independent engineering lab" voice: direct, specific, technical, and calm.
- Keep the site manifesto-first and field-notes oriented.
- Avoid startup hype, vague AI boosterism, and proprietary-platform framing.
- Emphasize Git-native workflows, evidence, safety, open artifacts, and portability.
- When explaining Tessariq, prefer concrete artifacts and workflows over marketing abstractions.

### Documentation and examples
- Keep examples realistic and inspectable.
- Prefer Markdown, JSON, YAML, and filesystem examples over polished mock marketing language.
- When updating navigation or section structure, make sure linked overview pages still describe the current layout.

## Layout, styling, and asset guidelines
Keep theme overrides intentional and local to this repo.

### Hugo layouts
- Treat files under `layouts/` as overrides on top of upstream Thulite/Doks behavior.
- Keep overrides minimal; prefer extending the existing structure instead of reimplementing theme internals.
- Preserve the custom homepage composition in `layouts/home.html` unless a redesign is explicitly requested.

### SCSS and JavaScript
- Put style changes in the repo's custom SCSS files under `assets/scss/common/`.
- Put repo-specific behavior in `assets/js/custom.js` or new repo-local asset files when needed.
- Do not edit files inside `node_modules/`.
- Match existing naming and selector patterns before introducing new ones.

### Generated and static assets
- Do not manually edit files in `public/` or `resources/_gen/`.
- `hugo_stats.json` is generated input for the CSS pipeline; do not treat it as hand-authored content unless the task is explicitly about that pipeline.
- Keep static assets in `static/` only when they are meant to be served as-is.

## Branding and design guidance
Preserve the brand system documented for this website.

### Canonical brand assets
- The source of truth for logos is `../tessariq/assets/logo/`.
- Sync website logo files and favicon derivatives with `scripts/sync-brand-assets.sh`.
- Do not hand-draw replacements for official lockups or selectively tweak synced logo assets.

### Website-specific brand rules
- Preserve the homepage/navbar behavior documented in `docs/brand-web.md`:
  - the homepage hero is always dark
  - the navbar uses monochrome lockup treatment over the hero
  - the navbar returns to petrol lockups outside the hero state
- Preserve the documented interface neutrals used for long-form reading.
- Avoid introducing hosted font dependencies; prefer the repo's existing local/system-font approach.
- Keep visual changes aligned with the current Tessariq brand tone: restrained, technical, and editorial rather than glossy or startup-like.

## Change checklist for agents
- Run `npm run format` on touched files when formatting applies.
- Run `npm run build` for non-trivial site changes before handoff.
- If layout or asset-pipeline behavior changed, verify the affected pages render through `npm run dev` or `npm run preview`.
- Update relevant content or docs when navigation, copy, or visible site behavior changes materially.
- Use `scripts/sync-brand-assets.sh` instead of manual favicon/logo edits when brand assets need to be refreshed.

## Agent do/don'ts
- Do keep changes focused on one logical content, design, or site-behavior update.
- Do use conventional commit messages when creating commits for this repository.
- Do preserve Hugo/Thulite conventions already present in the repo.
- Do keep user-visible copy concrete and technically grounded.
- Do prefer repo-local overrides over patching upstream theme or dependency files.
- Don't invent CI requirements or repository workflows that do not exist here.
- Don't hand-edit generated directories or dependency trees.
- Don't introduce unrelated refactors, formatting churn, or content rewrites alongside a targeted site change.
- Don't weaken the site's positioning around safety, evidence, or Git-native workflows through casual wording changes.

## Notes on repository behavior
- `npm run dev` is the primary local development path.
- Running `hugo server` directly is acceptable for content-only work, but it skips the full Node-driven asset pipeline described in `README.md`.
- The site currently uses Hugo config layering under `config/_default/`, `config/next/`, and `config/production/`.
- The homepage, manifesto, blog, and docs each serve distinct roles; avoid collapsing the site into generic product-marketing copy.
