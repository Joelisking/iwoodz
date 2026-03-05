# iWoodz Creation — Homepage Build Guide (Next.js + shadcn)

## Overview & Design Language

The inspiration site (The Wood Works) uses a **luxury, editorial aesthetic**: warm off-white/linen backgrounds, near-black text, serif headings, spaced-out uppercase tracking for eyebrow labels, and minimal outlined buttons. Replicate this feel for iWoodz Creation.

**Key design tokens to use:**
- Background: `#F4F1EC` (warm linen/off-white)
- Navbar bg: `#3C3530` (warm dark brown — same tone as footer)
- Footer bg: `#2C2C2C` (near-black/dark charcoal)
- Text: `#1A1A1A`
- Accent/Gold: `#B8976A` (warm brass — use sparingly for borders, dividers, hover states)
- Button style: outlined, uppercase, wide letter-spacing, no fill (ghost style)
- Fonts: A serif for headings (e.g. `Cormorant Garamond` or `Playfair Display` via Google Fonts) + a clean sans-serif for body (e.g. `Inter` or `Jost`)
- Eyebrow labels: `text-xs uppercase tracking-[0.2em] text-muted-foreground`

---

## Page Structure (Top to Bottom)

### 1. Announcement Bar

- Thin bar, ~36px tall
- Background: `#1A1A1A`, text: white, centered
- Text example: `"MARCH OPEN DAY : THE COTSWOLDS."` with an underlined `book now` link beside it
- Adapt for iWoodz: e.g. a promo or event message

---

### 2. Navbar

**Layout:**
- Sticky, full-width
- Background: `#3C3530` (warm dark brown) — same dark tone as the footer
- Nav link text, logo, and icons all in white/off-white to contrast against the dark background
- Three zones: `[left nav links] [center logo] [right: CTA button + icons]`
- Logo: "iWOODZ CREATION" in serif, centered, with a thin decorative rule below it
- Outlined CTA button: white border + white text: `"REQUEST A CONSULTATION"`
- Icon buttons: brochure/book icon + phone icon (both white)

**Nav links (left side):**
- `PROJECTS` | `WHY iWOODZ CREATION` | `SHOWROOM` | `CONTACT`

**Popover Dropdown (CRITICAL — click-triggered, not hover):**

Use shadcn's `Popover` component. On click of `PROJECTS` or `WHY iWOODZ CREATION`, a dropdown panel appears below the navbar. Only one popover open at a time; clicking outside or another nav item closes it.

**PROJECTS popover columns:**

| INTERIORS | DOG KENNELS | CONTAINER WORKS | CONSTRUCTIONS | OTHER PROJECTS |
|---|---|---|---|---|
| - Kitchens | - Single Kennel | Explore all container works | Explore all constructions | Pergola |
| - Living Spaces | - Double Kennel | - Layout Planning | - Villa D'Tuger | Hand-Wash Stations |
| - Wardrobes & Storage | - Feeding Dishes | - Windows & Doors | - {other} | |
| | | - Roofing & Exterior | | |
| | | - Electrical & Plumbing | | |
| | | - Finishing Touches | | |

**WHY iWOODZ CREATION popover columns:**
- **WHY iWOODZ CREATION** (bold header)
- Why choose us?
- Our design service
- Our installation service
- Our construction service

The popover panel should be wide, with a white/linen background, generous padding, and a multi-column CSS grid layout.

---

### 3. Hero Section

**Behavior:**
- Full viewport height (`h-screen`) and full width
- Image carousel — images **slide** horizontally on a track
- Text overlay and CTA are **absolutely positioned and completely static** — they never move while images slide beneath them
- Images are `object-cover` filling the entire area
- A dark gradient overlay on the bottom-left ~40% of the image helps text legibility

**Slide transition (important):**
- All images sit in a horizontal flex-row track
- The track translates on the X axis: `translateX(-index * 100%)`
- Apply `transition-transform duration-500 ease-in-out` for a smooth slide
- **Auto-advance / right arrow:** track slides **left** (negative X direction — next image comes in from the right)
- **Left arrow:** track slides **right** (positive X direction — previous image comes in from the left)

```tsx
// Implementation pattern:
// - Outer wrapper: overflow-hidden, relative, h-screen w-full
// - Inner track: flex, width = slides.length * 100%, transition-transform duration-500 ease-in-out
//   transform: `translateX(-${currentIndex * 100}%)`
// - Each slide: min-w-full h-screen, img with object-cover
// - Text overlay: absolute, sits outside the track, z-10, bottom-left
```

**Text overlay (bottom-left, ~`left-16 bottom-20`):**
- Eyebrow (small, uppercase, white, spaced): e.g. `"BESPOKE WOODWORK"`
- Heading (large serif, white, ~`text-5xl`): e.g. `"Crafted For Every Space"`
- Subtext (white/muted, ~`text-base max-w-sm`): e.g. `"From bespoke kitchens to container builds, iWoodz Creation brings your vision to life."`
- Button: outlined ghost button, white border + white text, uppercase: `"EXPLORE OUR PROJECTS"`

**Carousel indicators:** small dots centered at the bottom of the hero

**Carousel navigation:** subtle left/right arrow buttons on the left and right edges

---

### 4. "Bespoke Interiors & Builds" Intro Section

Directly below the hero, light linen background (`#F4F1EC`), generous vertical padding.

- Eyebrow label (centered): `"CRAFTED FOR YOU & YOUR HOME"`
- Heading (centered, large serif): `"Bespoke Interiors & Builds"`
- Body paragraph (centered, `max-w-2xl mx-auto`): brand description text
- Below: **2-column image grid** — two tall portrait images side by side
  - Each with a title (e.g. "Kitchens", "Living Spaces") and a short description below
  - Outlined `"EXPLORE"` button beneath each

---

### 5. Projects Grid Section

**3-column card grid** showing main project categories:

Each card:
- Large image (`aspect-[4/5]`, `object-cover`)
- Title below in serif (e.g. "Container Works")
- Short description
- Outlined `"EXPLORE [NAME]"` button

Suggested first row: **Container Works**, **Constructions**, **Interiors**

A second row can show: **Dog Kennels**, **Other Projects** — use a 2-col or offset layout for variety.

---

### 6. "Arrange A Consultation" Full-Width Banner CTA

Full-width section, ~`50vh` tall, with a **dark background image** (e.g. a workshop/wood grain shot) and a dark overlay.

- All text in white, left-aligned (~`left-16`)
- Eyebrow: `"TALK TO AN EXPERT"`
- Heading (serif): `"Arrange A Design Consultation"`
- Body: short paragraph about the free consultation
- Button: outlined white ghost button: `"ARRANGE A DESIGN CONSULTATION"`

---

### 7. "Why Choose iWoodz Creation?" Section

Light linen background, centered layout:

- Eyebrow: `"THOUGHTFUL DESIGN & EXPERT CRAFTMANSHIP"`
- Heading (serif): `"Why Choose iWoodz Creation?"`
- Body paragraph (centered, `max-w-2xl`)
- Dark filled button: `"WHY CHOOSE iWOODZ?"` — this is one of the few dark-filled (non-ghost) buttons on the page

Below, a **3-column card grid**:

| Card 1 | Card 2 | Card 3 |
|---|---|---|
| Image | Image | Image |
| **Our Design Service** | **Expert Craftmanship** | **Bespoke Details** |
| Short description | Short description | Short description |
| `EXPLORE` button | `EXPLORE` button | `EXPLORE` button |

---

### 8. Dual CTA Panel

Full-width section, warm gray/linen background (`#E8E3DA`).

Split into **3 columns**:
- **Left panel:** Eyebrow `"BE INSPIRED"` + heading `"Request A Brochure"` + description + dark filled button `"REQUEST A BROCHURE"`
- **Center:** Decorative line-art illustration of a kitchen/woodwork (SVG or image), centered vertically
- **Right panel:** Eyebrow `"DESIGN YOUR SPACE"` + heading `"Free Design Consultation"` + description + outlined button `"ARRANGE A CONSULTATION"`

---

### 9. Footer

Dark background (`#2C2C2C`), white text, generous padding.

**4-column layout:**
- **Col 1:** Logo (`iWOODZ CREATION` in serif), address, email, phone, social icons (Instagram, TikTok, Facebook)
- **Col 2:** Nav links — PROJECTS, SHOWROOM, WHY iWOODZ CREATION, DESIGN CONSULTATION, BROCHURE REQUEST
- **Col 3:** CONTACT US, TERMS & CONDITIONS, PRIVACY POLICY, WARRANTY
- **Col 4:** Optional tagline or left empty

Bottom strip: `"© 2026 iWoodz Creation. All rights reserved."` centered, in a slightly lighter gray.

---

## Component File Structure

```
/components
  /layout
    AnnouncementBar.tsx
    Navbar.tsx            ← includes Popover logic
    Footer.tsx
  /home
    HeroCarousel.tsx
    IntroSection.tsx
    ProjectsGrid.tsx
    ConsultationBanner.tsx
    WhyChooseSection.tsx
    DualCTAPanel.tsx
/app
  page.tsx                ← assembles all home sections
```

---

## shadcn Components to Use

- `Popover` — for navbar dropdowns (click-triggered)
- `Button` — `variant="outline"` for most CTAs, `variant="default"` for dark filled buttons
- `Separator` — for decorative dividers in the navbar popover and footer

---

## Code Architecture Principles

- **Use shadcn everywhere.** Every UI element — buttons, popovers, separators, icons, navigation items, cards — should be built using shadcn components. If a required element doesn't exist as a stock shadcn component, build a custom component that is composed from shadcn primitives (e.g. a custom `ProjectCard` built using shadcn `Card`, `Button`, and `Separator`).
- **Strictly modular structure.** Each section of the page lives in its own dedicated file. No section's code should bleed into another file. Files should be kept short and focused — if a file is getting long, extract sub-elements into their own smaller component files.
- **`page.tsx` is assembly-only.** The app's `page.tsx` (or `app.tsx`) should do nothing except import and render each section component in order. No layout logic, no styling, no data — just the list of section components.
- **Aim for files under ~100–120 lines.** If a component file exceeds this, split it further. For example, `Navbar.tsx` might extract `NavPopover.tsx` and `NavLinks.tsx` as separate files.

---

## Important Implementation Notes

1. **Popover close behavior:** Close when the user clicks outside OR clicks another nav item. Only one popover open at a time. Use a shared `activePopover` state in the Navbar component.
2. **Hero carousel:** Use `useState` + `useEffect` with `setInterval` for auto-rotation (4–5s interval). No external carousel library needed. The sliding track approach is described in Section 3 above.
3. **Fonts:** Add `Cormorant Garamond` (or `Playfair Display`) + `Inter` in `layout.tsx` via `next/font/google`. Apply the serif font as a CSS variable and use it on all heading elements.
4. **Images:** Use placeholder images from `https://picsum.photos` during build, sized appropriately. Leave clear comments indicating where real assets should be swapped in.
5. **Responsive:** Navbar collapses to a hamburger menu on mobile. Hero text scales down (`text-3xl` on mobile vs `text-5xl` on desktop). All grids go from 3-col → 1-col on mobile, 2-col on tablet.
6. **Navbar sticky behavior:** Use `sticky top-0 z-50`. The announcement bar scrolls away; the navbar remains fixed.
7. **Button consistency:** Nearly all buttons are ghost/outlined with uppercase spaced lettering. The two exceptions are the "WHY CHOOSE iWOODZ?" button (dark filled) and "REQUEST A BROCHURE" (dark filled). All others use `variant="outline"`.
