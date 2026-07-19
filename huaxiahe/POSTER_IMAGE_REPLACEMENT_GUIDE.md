# Huaxiahe Master Poster — Image Replacement Guide

This guide covers the wide-format master product poster:

- Editable source: `huaxiahe/assets/posters/huaxiahe-product-master-3170x1040.svg`
- Rendered output: `huaxiahe/assets/posters/huaxiahe-product-master-3170x1040.png`
- Preview page: `huaxiahe/poster/index.html`

The poster currently uses four designed placeholder images (soft VI-palette
gradient/light studies — no photography, no fake product, no text baked in).
Each is referenced in the SVG through a `<g clip-path="...">` + `<image
preserveAspectRatio="xMidYMid slice">` pair, so replacing the raster file
in place — same filename, same folder — updates the poster with **no
change to the SVG structure or layout**.

## The four image slots

### 1. `huaxiahe/assets/images/product/master-poster-product.jpg`
- **Position:** Center area of the poster (the dominant, full-bleed field)
- **Subject:** The main complete incense-bead product
- **Recommended minimum source:** 5000 × 3200 px
- **Recommended crop:** Product positioned center-right within the frame,
  clean warm-neutral background, consistent with VI photography direction
  (natural side-light, no flash, no high-saturation edit)
- **Focal area:** Center-right — the poster's clip region is 1395 × 1040 px
  (a slightly-wide-of-square field); `preserveAspectRatio="xMidYMid slice"`
  will crop a taller or wider photo to fill this field from its center, so
  keep the product roughly centered with margin on all sides in the source

### 2. `huaxiahe/assets/images/materials/master-poster-material.jpg`
- **Position:** Right column, "材料" (Materials) block, small square tile
- **Subject:** Authentic aromatic materials or blended powder — macro or
  still-life
- **Recommended minimum source:** 3000 × 3000 px
- **Recommended crop:** Square, tight macro framing
- **Focal area:** Center

### 3. `huaxiahe/assets/images/process/master-poster-craft.jpg`
- **Position:** Right column, "工艺" (Craft) block, small square tile
- **Subject:** Authentic hands shaping or blending the material — no
  staged "ancient workshop" theatrics
- **Recommended minimum source:** 3000 × 3000 px
- **Recommended crop:** Square, tight framing on hands/material/tool
- **Focal area:** Center

### 4. `huaxiahe/assets/images/product/master-poster-wearing.jpg`
- **Position:** Right column, "佩用" (Wearing) block, small square tile
- **Subject:** Authentic bracelet in palm or on wrist — neutral clothing
  and background
- **Recommended minimum source:** 3000 × 3000 px
- **Recommended crop:** Square, tight framing
- **Focal area:** Center

## How to replace an image

1. Prepare the new photograph per the guidance above.
2. Export it as `.jpg` using the **exact filename and folder** listed.
   (If you must change the extension, update the matching `href` inside
   `huaxiahe-product-master-3170x1040.svg` to match — search for the old
   filename.)
3. Replace the existing file in place.
4. Regenerate the PNG (see below).
5. Open `huaxiahe/poster/index.html` locally and confirm the new image
   fills its field without visible stretching or distortion.
6. Commit and deploy.

## How to regenerate the PNG

The SVG is the source of truth; the PNG is a rendered export. From the
repository root:

```bash
cd huaxiahe/assets/posters
rsvg-convert -w 3170 -h 1040 \
  huaxiahe-product-master-3170x1040.svg \
  -o huaxiahe-product-master-3170x1040.png
```

`rsvg-convert` (part of `librsvg`) is the recommended renderer. Any SVG
renderer that supports `preserveAspectRatio` and clip-paths will produce
an equivalent result (e.g. opening the SVG in a browser or Illustrator and
exporting a 3170×1040 PNG at 1:1 scale also works).

> **Note:** some minimal `librsvg`/`gdk-pixbuf` installations do not ship
> a JPEG loader and will silently omit JPEG `<image>` content when
> rasterizing. If your rendered PNG is missing the photos, convert the
> four `.jpg` files to temporary `.png` mirrors, point a scratch copy of
> the SVG at the `.png` paths, render from that copy, then discard the
> scratch files — the committed SVG itself must keep referencing the real
> `.jpg` files, since real browsers and design tools render JPEG natively.

## How to verify the final dimensions

```bash
sips -g pixelWidth -g pixelHeight huaxiahe-product-master-3170x1040.png
```

Expected output: `pixelWidth: 3170`, `pixelHeight: 1040`.

## What must never change on replacement

- The four filenames and folders.
- The SVG's canvas size (3170 × 1040), zone layout, safe margins (160 px
  left/right, 90 px top/bottom), or text content — those are governed by
  the approved Huaxiahe VI and should only change with a new design pass,
  not an image swap.
- `huaxiahe/vi/` — never touched by this poster.
