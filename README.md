# Tessariq Website

Built with [Hugo](https://gohugo.io/) and the [Doks](https://getdoks.org/) theme (via [Hyas](https://gethyas.com/)).

## Prerequisites

- [Node.js](https://nodejs.org/) >= 20 (npm included)
- [Hugo](https://gohugo.io/) extended edition >= 0.120.0

## Development

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

The site will be available at `http://localhost:1313/`.

### npm vs Hugo commands

`npm run dev` runs the full Hyas/Node pipeline (PostCSS, asset processing) before starting Hugo's dev server. This is the recommended way to develop.

Running `hugo server` directly works for content-only editing but skips Node-based asset processing — styles and JS may not render correctly.

| Command | What it does |
|---|---|
| `npm run dev` | Full dev server (recommended) |
| `npm run build` | Production build → `public/` |
| `npm run preview` | Preview production build locally |
| `hugo server` | Hugo only — content editing, no asset pipeline |

## Project Structure

```
content/        # Site content (Markdown)
  docs/         # Documentation pages
  blog/         # Blog posts
config/         # Hugo configuration
  _default/     # Default config (hugo.toml, params.toml, etc.)
assets/         # Processed assets (SCSS, JS)
layouts/        # Hugo layout overrides
static/         # Static files (served as-is)
docs/           # Planning documents (not part of the site)
```
