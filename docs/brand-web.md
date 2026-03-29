# Tessariq Website Brand Notes

This repo follows the canonical brand assets in `../tessariq/assets/logo/`, with a small set of documented website-specific decisions.

## Canonical assets

- Source of truth: `../tessariq/assets/logo/`
- Synced into this repo with `scripts/sync-brand-assets.sh`
- Navbar uses the official horizontal lockups, not a hand-built SVG + live text approximation.
- Favicon derivatives are generated from the canonical `favicon.svg`.

## Website-specific exceptions

### Navbar state over the homepage hero

The homepage keeps a dark hero at the top. While the navbar overlaps that hero, it uses the official monochrome horizontal lockup (`lockup-horizontal-mono-dark.svg`).

Once the hero scrolls out of view, the navbar returns to the regular website state and uses the petrol horizontal lockup:

- light theme: `lockup-horizontal-petrol-light.svg`
- dark theme: `lockup-horizontal-petrol-dark.svg`

Reasoning: this preserves the existing dark-to-light navbar transition while still using canonical brand assets.

### Interface neutrals

Brand mark colors stay exact to the brand guide. Website surfaces and long-form text use screen-optimized interface neutrals:

- light background: `#fafaf8`
- light surface: `#f4f1eb`
- light text: `#111111`
- dark background: `#111117`
- dark surface: `#171821`
- dark text: `#ece8e1`

Reasoning: pure black-on-white and pure white-on-black are harsher on screens during extended reading. These neutrals keep the site close to the brand while improving readability.
