# Huaxiahe Master Banner Series — Image Replacement Guide

This guide covers the six-poster Huaxiahe master banner series:

| # | Poster | SVG | PNG |
|---|---|---|---|
| 01 | 产品总览 Product Overview | `huaxiahe-product-overview-3170x1040.svg` | `huaxiahe-product-overview-3170x1040.png` |
| 02 | 材料 Materials | `huaxiahe-materials-3170x1040.svg` | `huaxiahe-materials-3170x1040.png` |
| 03 | 工艺 Craft | `huaxiahe-craft-3170x1040.svg` | `huaxiahe-craft-3170x1040.png` |
| 04 | 成品 Finished Product | `huaxiahe-finished-product-3170x1040.svg` | `huaxiahe-finished-product-3170x1040.png` |
| 05 | 佩用 Wearing | `huaxiahe-wearing-3170x1040.svg` | `huaxiahe-wearing-3170x1040.png` |
| 06 | 品牌 Brand Philosophy | `huaxiahe-brand-philosophy-3170x1040.svg` | `huaxiahe-brand-philosophy-3170x1040.png` |

All files live in `huaxiahe/assets/posters/`. The original single-poster
filename (`huaxiahe-product-master-3170x1040.svg`/`.png`) is kept as an
exact copy of poster 01 for backward compatibility with any existing
external links — it is not a separate design.

Preview page: `huaxiahe/poster/index.html` — shows all six in order with
PNG/SVG download links.

## Primary logo

All six posters use the same **official primary logo lockup**: the
approved icon mark (`huaxiahe/assets/icon.svg`, unaltered gradient path
data) combined with the "华夏和" wordmark, built at the exact ratio the
live VI uses in its own navigation bar (`huaxiahe/vi/index.html`,
`.nav-logo` / `.nav-logo-mark` / `.nav-logo-text`: icon square, gap =
icon-width × 12/32, wordmark font-size = icon-width × 15/32, Noto Serif
SC 500, letter-spacing 0.18em, amber `#614A25`). It was verified by
side-by-side comparison against the live nav mark at
https://enxpower.com/huaxiahe/vi/.

A standalone reusable copy of this lockup is saved at:

```
huaxiahe/assets/logo-primary-horizontal.svg
```

Each poster's SVG embeds its own inline copy (for crisp resolution-
independent scaling at each poster's specific logo size) rather than
referencing this file directly — but the construction is identical in
every case. Do not hand-typeset "华夏和" beside the icon anywhere; always
use this lockup.

## Typography — line-height correction

All multiline text blocks across the series now use explicit,
optically-checked baseline-to-baseline spacing (never default SVG
leading):

| Text role | Ratio (× font-size) | Used for |
|---|---|---|
| Large headline | 1.24 | single large display lines (rarely multiline) |
| Subtitle / statement | 1.42 | 2-line taglines and statements |
| Body copy | 1.78 | the 3–4 line definition/description paragraphs |
| Small editorial | 1.68 | the compact 材料/工艺/佩用 list content |

If you edit any poster's copy, keep new multiline blocks within these
ratios — going tighter reintroduces the cramped feeling this series
corrected.

## Poster 01 — 产品总览 Product Overview

Corrected version of the original single master poster: same three-zone
structure (brand + definition / dominant product field / 材料·工艺·佩用
column), now with the corrected logo lockup and corrected line-height on
the two-line 工艺/佩用 content.

| File | Position | Subject | Min. source | Crop |
|---|---|---|---|---|
| `assets/images/posters/series-product-overview.jpg` | Center field (1395×1040) | Complete product, campaign-grade | 5000×3200 | center-right focal, slice-fill |
| `assets/images/materials/master-poster-material.jpg` | Right, "材料" tile (140×140) | Material macro | 3000×3000 | center |
| `assets/images/process/master-poster-craft.jpg` | Right, "工艺" tile (140×140) | Hands shaping/blending | 3000×3000 | center |
| `assets/images/product/master-poster-wearing.jpg` | Right, "佩用" tile (140×140) | Bracelet on wrist/palm | 3000×3000 | center |

(The three tile images are shared with the original single-poster asset
set from the prior task — no duplicate files were created for them.)

## Poster 02 — 材料 Materials

One dominant material field plus four supporting fields in a photographic
filmstrip on the right; all copy on the left.

| File | Position | Subject | Min. source | Crop |
|---|---|---|---|---|
| `assets/images/posters/series-materials-main.jpg` | Dominant field (~1265×1040) | Materials arranged together, macro/still-life | 4000×3200 | center, slice-fill |
| `assets/images/posters/series-materials-wood.jpg` | Supporting tile 1 of 4 | Aromatic wood | 3000×3000 | center |
| `assets/images/posters/series-materials-flower.jpg` | Supporting tile 2 of 4 | Dried flower material | 3000×3000 | center |
| `assets/images/posters/series-materials-resin.jpg` | Supporting tile 3 of 4 | Natural resin | 3000×3000 | center |
| `assets/images/posters/series-materials-botanical.jpg` | Supporting tile 4 of 4 | Botanical material | 3000×3000 | center |

Avoid: card/box styling, medicine-shop staging, decorative flower
arrangements, fake ingredient photography.

## Poster 03 — 工艺 Craft

A photography-led, nine-field cinematic filmstrip (no flowchart, no
arrows, no boxes) reading left to right, each field full-bleed
top-to-bottom with a step number and short label overlaid on a bottom
scrim.

| File | Step | Subject | Min. source |
|---|---|---|---|
| `assets/images/posters/series-craft-selection.jpg` | 01 选材 | Material selection | 2400×3200 |
| `assets/images/posters/series-craft-preparation.jpg` | 02 炮制 | Material preparation | 2400×3200 |
| `assets/images/posters/series-craft-grinding.jpg` | 03 研磨 | Grinding | 2400×3200 |
| `assets/images/posters/series-craft-composition.jpg` | 04 配伍 | Composing the blend | 2400×3200 |
| `assets/images/posters/series-craft-blending.jpg` | 05 和泥 | Blending the body | 2400×3200 |
| `assets/images/posters/series-craft-resting.jpg` | 06 醒泥 | The resting material | 2400×3200 |
| `assets/images/posters/series-craft-shaping.jpg` | 07 成珠 | Shaping the beads | 2400×3200 |
| `assets/images/posters/series-craft-drying.jpg` | 08 阴干 | Slow, shaded drying | 2400×3200 |
| `assets/images/posters/series-craft-aging.jpg` | 09 养藏 | The aged/finished material | 2400×3200 |

Each field is a portrait crop (~352×620 display ratio) — vertical/portrait
source photography works best. Focal area: center, with the bottom ~20%
reserved visually quiet since a dark scrim + white caption text sits
there. Avoid staged "ancient workshop" theatrics or costume.

## Poster 04 — 成品 Finished Product

The most minimal, product-dominant poster — a single large image plus one
framed detail inset, generous negative space, minimal copy.

| File | Position | Subject | Min. source | Crop |
|---|---|---|---|---|
| `assets/images/posters/series-finished-product-main.jpg` | Dominant field (2270×1040) | Complete bracelet or sculptural bead arrangement | 5000×3200 | center, slice-fill |
| `assets/images/posters/series-finished-product-detail.jpg` | Framed inset (380×380) | Macro material/surface detail | 3000×3000 | center |

## Poster 05 — 佩用 Wearing

Intimate, asymmetric: a large wearing-scene field on the left with a
small framed palm-detail inset, quiet copy on the right.

| File | Position | Subject | Min. source | Crop |
|---|---|---|---|---|
| `assets/images/posters/series-wearing-main.jpg` | Dominant field (1950×1040) | Wrist or palm, natural gesture, no face required | 4000×3200 | center-left focal, slice-fill |
| `assets/images/posters/series-wearing-palm.jpg` | Framed inset (320×320) | Palm/detail close-up | 3000×3000 | center |
| `assets/images/posters/series-wearing-detail.jpg` | *(reserved for future layout use — not currently placed)* | Bead/cord detail | 3000×3000 | center |

Avoid: visible face, jewelry-advertising poses, luxury watches, visible
fashion branding, staged lifestyle photography.

## Poster 06 — 品牌 Brand Philosophy

The series conclusion: logo at its largest, most prominent size in the
series, a two-line philosophy statement, and one quiet, low-opacity
material band near the bottom margin.

| File | Position | Subject | Min. source | Crop |
|---|---|---|---|---|
| `assets/images/posters/series-brand-philosophy.jpg` | Quiet bottom band (2850×120) | Subtle material texture, very low visual weight | 3000×1200 | center, slice-fill |

## How to replace an image

1. Prepare the new photograph per the guidance above.
2. Export it as `.jpg` using the **exact filename and folder** listed.
   (If the extension must change, update the matching `href` inside the
   relevant poster's `.svg` file — search for the old filename.)
3. Replace the existing file in place.
4. Regenerate that poster's PNG (see below).
5. Open `huaxiahe/poster/index.html` locally and confirm the new image
   fills its field without visible stretching or distortion.
6. Commit and deploy.

Every image field in every poster is wired through `clipPath` +
`preserveAspectRatio="xMidYMid slice"`, so a same-folder file swap never
requires touching the SVG layout.

## How to regenerate a PNG

The SVG is the source of truth; the PNG is a rendered export. From the
repository root, for any one poster:

```bash
cd huaxiahe/assets/posters
rsvg-convert -w 3170 -h 1040 \
  huaxiahe-<poster-name>-3170x1040.svg \
  -o huaxiahe-<poster-name>-3170x1040.png
```

> **JPEG rendering workaround:** some minimal `librsvg`/`gdk-pixbuf`
> installations (including the one used to build this series) ship no
> JPEG loader and will silently omit JPEG `<image>` content when
> rasterizing directly. If your rendered PNG is missing photos:
> 1. Convert each referenced `.jpg` to a temporary `.png` mirror
>    (`sips -s format png source.jpg --out /tmp/mirror.png`).
> 2. Make a scratch copy of the poster's `.svg` with its `href="...jpg"`
>    values pointed at the temporary `.png` mirrors.
> 3. Run `rsvg-convert` against the scratch copy, writing to the real
>    PNG output path.
> 4. Discard the scratch SVG and PNG mirrors.
> The **committed production SVG must keep referencing the real `.jpg`
> files** — real browsers and design tools render JPEG natively, so this
> workaround is a local-rendering accommodation only, never a permanent
> change to the source files.

To rebuild the entire series at once (regenerates all six SVGs, all six
PNGs, and refreshes the legacy `huaxiahe-product-master-*` compatibility
copy from poster 01), the generation script used to build this series
follows the same pattern — recreate it from this guide's specifications
if it is not present in your working copy, since it is a build-time tool
rather than a committed repository asset.

## How to verify final dimensions

```bash
sips -g pixelWidth -g pixelHeight huaxiahe-<poster-name>-3170x1040.png
```

Expected output for every poster: `pixelWidth: 3170`, `pixelHeight: 1040`.

## What must never change on replacement

- The documented filenames and folders.
- Each SVG's canvas size (3170 × 1040 / `viewBox="0 0 3170 1040"`).
- Safe margins: minimum 160px left/right, 90px top/bottom, for all text,
  logo, and non-bleed content. Dominant photographic fields are
  permitted to bleed to the canvas edge by design (matching the
  approved poster 01 starting point) — this applies only to full-bleed
  image fields, never to text.
- The primary logo lockup construction (icon + wordmark, VI-exact
  ratios) — never replace it with the icon alone or hand-typeset text.
- Line-height ratios documented above.
- `huaxiahe/vi/` — never touched by this series.
