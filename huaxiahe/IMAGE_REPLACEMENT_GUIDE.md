# Huaxiahe — Image Replacement Guide

The product homepage (`/huaxiahe/index.html`) currently uses designed
placeholder images: soft VI-palette gradient and light studies, generated
programmatically. No stock photography, no AI-generated scenes, no fake
product or people. They exist so the layout is complete and ready — every
slot below can be replaced by swapping a single file, same filename, same
folder.

All placeholders live under `huaxiahe/assets/images/` in four folders:
`product/`, `materials/`, `process/`, `posters/`. Each image is referenced
in `huaxiahe/index.html` through a `.imgbox` container with a fixed
`aspect-ratio` (see `css/styles.css`) and `object-fit: cover`, plus
`width`/`height` attributes matching the placeholder's pixel size — this
reserves the layout space so a same-aspect-ratio replacement causes no
layout shift. The `width`/`height` attributes are hints only; the CSS
`aspect-ratio` is what actually governs the box, so a differently-sized
source photo will still scale and crop correctly.

## Replacement workflow

1. Prepare the new image, cropped per the guidance below.
2. Export it as `.jpg`, `.png`, or `.webp` using the **exact filename**
   listed (only the extension may change — if you change it, update the
   matching `src` in `index.html`).
3. Replace the existing file in place.
4. Preserve the documented orientation/aspect ratio when practical — the
   `.imgbox` will crop via `object-fit: cover`, so close-but-not-exact
   ratios are fine; very different ratios will crop aggressively.
5. Run a local static server (`python3 -m http.server` from the repo
   root) and check `http://localhost:PORT/huaxiahe/`.
6. Review desktop (1440px) and mobile (390px) crops — confirm the subject's
   focal point isn't cropped out.
7. Commit and deploy.

---

## Product images — `assets/images/product/`

### hero-product.jpg
- **Section:** Homepage hero (first viewport)
- **Subject:** One complete Huaxiahe incense-bead bracelet, or a sculptural
  arrangement of beads, as the dominant hero image
- **Orientation:** Portrait / near 4:5
- **Recommended minimum:** 1800 × 2200 px
- **Focal area:** Center, with room to breathe on all sides — the box
  crops to 4:5 and bleeds to the section edge
- **Background:** Warm neutral, minimal, consistent with VI photography
  direction (soft side-light, no flash)
- **Avoid:** Busy props, artificial smoke, visible third-party branding
- **Alt text:** Describe the actual bracelet/arrangement shown

### product-palm.jpg
- **Section:** "What It Is" (`#what-it-is`)
- **Subject:** Loose incense beads held in an open palm
- **Orientation:** Square / near 4:5
- **Recommended minimum:** 1600 × 1600 px
- **Focal area:** Center-weighted on the beads, hand may be partially framed
- **Avoid:** Visible rings/jewelry, nail polish, distracting background

### product-detail.jpg
- **Section:** "What It Is" (`#what-it-is`)
- **Subject:** Macro detail of a single bead's surface — grain, sheen, texture
- **Orientation:** Square
- **Recommended minimum:** 1600 × 1600 px
- **Focal area:** Center, shallow depth of field
- **Avoid:** Overexposed highlights that erase surface texture

### product-wrist.jpg
- **Section:** "Wearing" (`#object`)
- **Subject:** The bracelet worn on a wrist, natural hand position
- **Orientation:** Landscape / near 4:3
- **Recommended minimum:** 1800 × 1350 px
- **Focal area:** Center-right, following the VI photography direction
  (the moment before/after an action, not mid-gesture)
- **Avoid:** Visible face, busy clothing patterns, other jewelry

### product-still-life.jpg
- **Section:** "Wearing" (`#object`)
- **Subject:** The bracelet resting on linen, wood, paper, or a simple tray
- **Orientation:** Landscape / near 4:3
- **Recommended minimum:** 1800 × 1350 px
- **Focal area:** Off-center per classical asymmetric still-life composition
- **Avoid:** Symmetric product-catalogue framing

### packaging-detail.jpg
- **Section:** "Wearing" (`#object`)
- **Subject:** Packaging detail, once packaging exists (box corner, label,
  ribbon, or wax seal per the VI packaging system)
- **Orientation:** Square
- **Recommended minimum:** 1600 × 1600 px
- **Focal area:** Center
- **Avoid:** Full flat-lay of unrelated objects

---

## Material images — `assets/images/materials/`

All five: **square**, recommended minimum **1400 × 1400 px**, macro/tight
crop, single material only, no labels baked into the image (labels are
live HTML text).

| File | Subject | Avoid |
|---|---|---|
| `material-wood.jpg` | Aromatic wood — grain, cross-section, or shavings | Painted/stained wood |
| `material-flower.jpg` | Dried flower material | Fresh-cut flowers in a vase (too floral/decorative) |
| `material-resin.jpg` | Natural resin, raw or in process | Synthetic-looking glossy props |
| `material-botanical.jpg` | Botanical material (bark, root, herb) | Culinary herb-garden styling |
| `material-blend.jpg` | The blended incense paste/body mid-process | Anything resembling food dough |

---

## Process images — `assets/images/process/`

All nine: **landscape / near 4:3**, recommended minimum **1600 × 1200 px**.
Section: "Making" (`#making`), alternating left/right editorial sequence.

| File | Step | Subject |
|---|---|---|
| `process-01-selection.jpg` | 01 选材 | Material selection |
| `process-02-preparation.jpg` | 02 炮制 | Material preparation |
| `process-03-grinding.jpg` | 03 研磨 | Grinding |
| `process-04-composition.jpg` | 04 配伍 | Composing the blend ratio |
| `process-05-blending.jpg` | 05 和泥 | Blending the body |
| `process-06-resting.jpg` | 06 醒泥 | The resting material |
| `process-07-shaping.jpg` | 07 成珠 | Shaping the beads |
| `process-08-drying.jpg` | 08 阴干 | Slow, shaded drying |
| `process-09-wearing.jpg` | 09 养藏与佩用 | The finished object in use |

- **Focal area:** Hands may appear per VI photography direction (the
  moment before/after an action), tools and material texture favored
  over faces
- **Avoid:** Staged "ancient workshop" theatrics, costume, fabricated
  historical scenes

---

## Poster campaign images — `assets/images/posters/`

All six: **portrait 3:4**, recommended minimum **1800 × 2400 px**. These
are full-bleed campaign backgrounds — the poster's index number and
bilingual caption are overlaid live in HTML (via `.campaign-scrim` and
`.campaign-cap`) over the bottom third, so **reserve visual quiet in the
lower third of the frame** for legibility.

| File | Poster | Subject |
|---|---|---|
| `poster-01-product.jpg` | 合香珠 / The Product | Hero product shot, campaign-grade |
| `poster-02-materials.jpg` | 众香和，方成香 | Materials arranged in balance |
| `poster-03-character.jpg` | 木有其性 | A single material's character, macro |
| `poster-04-time.jpg` | 静待成香 | Resting/drying — stillness, time passing |
| `poster-05-bead.jpg` | 圆融自成 | The finished bead, isolated |
| `poster-06-wearing.jpg` | 香随身行 | The object worn, in life |

- **Avoid:** Any text baked into the photo (captions are live HTML);
  cluttered composition — the scrim needs a darker, calmer lower third

---

## Social preview — `assets/social/og-image-home.png` (+ `.svg` source)

- **Section:** Open Graph / Twitter Card for `/huaxiahe/`
- **Current state:** Designed placeholder (logo, product name, abstract
  bead-strand motif, VI palette) — not a photograph
- **If replacing with real photography:** 1200 × 630 px exactly, product
  clearly visible, logo and "合香珠 / Blended Incense Beads" text should
  remain (regenerate from the `.svg` source or composite over a photo)
- **Avoid:** Small illegible text, cluttered backgrounds

The exhibition route keeps its own separate preview at
`assets/social/og-image-exhibition.png` — do not conflate the two.

---

## Notes

- All 26 placeholder images plus the two OG images are procedurally
  generated abstractions in the approved VI palette (`#CEC9BE` →
  `#4A3318` family) — no photography, no AI-generated imagery, no
  fabricated people, tools, or historical scenes.
- Filenames are final and stable; only pixel content should change on
  replacement.
- If a new image slot is ever needed, follow the same naming pattern
  (`category-descriptive-name.ext`, English, lowercase, hyphenated).
