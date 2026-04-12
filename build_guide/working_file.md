# BHRC Landing Page - Comprehensive Build Plan & Documentation

This document provides a detailed technical overview of the Beverly Hills Rejuvenation Center (BHRC) landing page project. It serves as a single source of truth for the project's architecture, design system, component implementations, and custom logic.

---

## 1. Project Architecture & Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Utility**: [clsx](https://github.com/lukeed/clsx) & [tailwind-merge](https://github.com/dcastil/tailwind-merge) for dynamic class management.

### Folder Structure
```text
frontend/
├── src/
│   ├── app/                # Next.js App Router (Layouts, Pages, Global CSS)
│   ├── components/
│   │   ├── layout/         # Global components (Navbar, Footer, TopStrip)
│   │   └── sections/       # Individual landing page sections (Hero, Services, etc.)
│   └── lib/                # Shared utilities (cn helper)
├── public/
│   ├── fonts/              # Local font files (Bilagike)
│   └── images/             # Organized assets for the landing page
├── build_guide/            # Project documentation and theme references
├── tailwind.config.ts      # Design system configuration
└── next.config.mjs         # Next.js configuration
```

---

## 2. Design System & Global Styles

### Typography (`src/app/globals.css` & `tailwind.config.ts`)
- **Primary Heading**: `Bilagike` (Custom Local Font). Fallback: `DM Serif Display`.
- **Primary Body/UI**: `Inter` (Google Font).
- **Secondary Body**: `Figtree` (Google Font).
- **Fluid Sizing**: Implemented via `clamp()` and custom Tailwind utilities (e.g., `h1`, `h2`, `body-lg`).

### Color Palette
- **Primary**: `#1A344D` (Deep Blue) - Used for headings and primary buttons.
- **Accent**: `#2B5C8A` (Medium Blue) - Used for hover states and secondary UI.
- **Secondary**: `#7899AD` (Light Blue/Gray) - Used for icons and borders.
- **Background Light**: `#EBF5FF` - Used for section backgrounds.
- **Text Primary**: `#212529` (Dark Gray).

### Global Layout Rules
- **Max Width**: Project targets `1920px` max width for sections.
- **Standard Padding**:
  - Desktop: `240px` horizontal padding (via `clamp`).
  - Tablet: `80px` horizontal padding.
  - Mobile: `24px` horizontal padding.

---

## 3. Component Documentation

### Layout Components
1. **TopStrip (`src/components/layout/TopStrip.tsx`)**:
   - Fixed height `31px`. Displays phone number and location.
2. **Navbar (`src/components/layout/Navbar.tsx`)**:
   - **Dynamic Background**: Fades from `0%` to `20%` opacity based on scroll position (reaches max at Section 2).
   - **Centered Layout**: Logo (Left), Menu Items (Center), CTAs (Right).
   - **Fluid Logo**: `w-[clamp(160px,20vw,308px)]` with maintained aspect ratio.
   - **Mobile Menu**: Slide-down overlay with `AnimatePresence`.
3. **Footer (`src/components/layout/Footer.tsx`)**:
   - 4-column grid: Brand/Contact, Services, Quick Links, Newsletter.
   - Semi-transparent background "BHRC" text logo.

### Page Sections (`src/components/sections/`)
1. **Hero**: Full-height (`1105px`) with linear gradient overlay and centered CTA.
2. **BlueBand**: Zig-zag vertical stack. Row 1: Left-aligned (Img + Text). Row 2: Right-aligned (Text + Img).
3. **Services**: Seamless infinite "circle" scroll. 
   - **Logic**: Doubled items list. `requestAnimationFrame` scrolls `scrollLeft`. If `scrollLeft >= firstSetWidth`, it jumps back to `0`.
   - **Manual Scroll**: Arrow buttons scroll exactly `1.5 cards` (including gap).
4. **FeatureHighlights**: 3-column grid showing core benefits with hover effects.
5. **LookFeelYounger**: Interactive face hotspot map. Hovering/Clicking dots reveals treatment details.
6. **TrustedByCelebs**: 
   - Clean, centered layout using flexbox (no absolute positioning).
   - Responsive images: Side-by-side on desktop with slight rotations (`-5deg`/`5deg`), stacked on mobile.
   - Fluid typography with `clamp()` for the heading.
   - Max-width constrained paragraph (`700px`) for optimal readability.
7. **RealResults**: Interactive before/after image slider with a draggable comparison handle.
8. **WhatToExpect**: 2-column layout with a numbered step-by-step list and interior photography.
9. **LedBySpecialists**: Editorial-style section highlighting the medical team.
10. **Awards**: Static grid of 4 logos centered in a `692px` container with `38px` gap.
11. **Testimonials**: Masonry-style grid of text and video/image reviews.

---

## 4. Key Logic & Special Features

### Seamless Infinite Scroll
- Implemented in `Services.tsx`.
- Uses a "doubled" array of items to allow for a continuous loop.
- The `animate` function monitors `scrollLeft` and performs an "invisible jump" back to the start when the first set of items is passed.

### Interactive Hotspots
- Implemented in `LookFeelYounger.tsx`.
- Uses relative positioning and percentage-based coordinates for hotspots to ensure they stay pinned to the face image across screen sizes.

### Image Comparison Slider
- Implemented in `RealResults.tsx`.
- Uses `clipPath: inset(0 X% 0 0)` on the "Before" image to reveal the "After" image beneath it as the slider moves.

---

## 5. Development Guidelines
- **Responsive First**: Always use mobile-first Tailwind classes (`sm:`, `md:`, `lg:`, `xl:`).
- **Typography Consistency**: Use the global CSS classes (`.h1`, `.body-md`, etc.) instead of manual font/size classes where possible.
- **Animation Performance**: Use Framer Motion's `whileInView` for entry animations to ensure they only fire when visible.
- **Asset Usage**: All landing page images should reside in `public/images/landing_page/` for consistency.
