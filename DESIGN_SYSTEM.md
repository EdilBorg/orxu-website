# ORXU Website — Design System

**Status:** Specification phase  
**Last updated:** 2026-11-12  
**Depends on:** `PROJECT_BRIEF.md`

This document defines the visual and interaction language of the ORXU institutional website. It must remain consistent with the Project Brief and must not force product brands into the institutional visual system.

---

## 1. Visual Philosophy

**Direction:** Premium Editorial Technology — Distinctive Institutional Portfolio

The website must feel like a carefully designed international software brand, not a generic SaaS template.

Core principles:

- Editorial product presentation
- Sophisticated corporate technology aesthetics
- Distinctive typography with strong hierarchy
- Intentional whitespace and controlled density
- Asymmetric but disciplined compositions
- Custom graphics derived from the official ORXU symbol (once provided)
- Restrained institutional blue as the primary accent

References for *principles only* (do not copy layouts, text, or branding):
- https://rivenhalldigital.com/
- https://silverside.co/portfolio
- https://marketingorchestra.eu/portfolio/walterions/

The result should feel considered, calm, and authoritative.

---

## 2. Logo Usage Rules

**Critical rule:** The user already possesses an original ORXU logo and symbol.  
The official logo assets will be provided later.

Until then:

- Do **not** invent, redesign, reinterpret, or approximate the logo.
- Do **not** finalize exact brand color hex values derived from the logo.
- Placeholder space for the logo must be prepared in the layout.
- Once the original files are received, they must be used as-is in the `assets/logo/` directory.

Usage guidelines (to be refined after logo delivery):

- Prefer the primary horizontal lockup where space allows.
- Symbol-only versions may be used in compact contexts (favicon, small navigation, social cards).
- Maintain clear space around the logo equal to at least the height of the symbol.
- Never stretch, rotate, add effects, or place the logo on low-contrast backgrounds.

---

## 3. Color System and Token Strategy

Colors are organized into four distinct categories. Product colors must never be forced into the institutional system.

### 3.1 Institutional Colors (ORXU brand)

These will be finalized after the official logo is inspected.

Placeholder strategy until then:

| Token | Role | Notes |
|-------|------|-------|
| `--orxu-blue` | Primary institutional accent | Restrained blue — exact value pending logo |
| `--orxu-blue-dark` | Hover / emphasis | Darker variant of primary |
| `--orxu-blue-light` | Subtle backgrounds / borders | Light tint |

### 3.2 Neutral Interface Colors

| Token | Suggested role |
|-------|----------------|
| `--neutral-0` | Pure white / page background |
| `--neutral-50` | Subtle section backgrounds |
| `--neutral-100` | Light borders, dividers |
| `--neutral-200` | Secondary borders |
| `--neutral-400` | Placeholder / disabled text |
| `--neutral-600` | Secondary body text |
| `--neutral-800` | Primary body text |
| `--neutral-900` | Headings / strong emphasis |
| `--neutral-950` | Near-black |

Exact hex values will be chosen for accessibility (minimum 4.5:1 contrast for body text).

### 3.3 Functional Colors

| Token | Role |
|-------|------|
| `--success` | Positive confirmation |
| `--warning` | Caution |
| `--error` | Errors / destructive |
| `--info` | Informational |

These must meet accessibility contrast requirements.

### 3.4 Product-Specific Colors

Each product may define its own palette on its own website and materials.  
On the institutional site, product sections may use restrained product accents only when they do not conflict with the institutional system and only after the product visual identity is confirmed. Until then, keep product presentation neutral and typographically driven.

---

## 4. Typography Strategy

Typography is a primary carrier of the editorial character.

### Goals
- Strong, clear hierarchy
- Excellent readability at all sizes
- Distinctive but not decorative
- Support for both English and Portuguese (including diacritics)

### Recommended approach

- Prefer system font stacks or carefully selected open-source fonts that load efficiently.
- Avoid multiple display fonts or decorative typefaces.
- Limit the number of typefaces to a maximum of two (one for headings, one for body) or a single well-chosen family with clear weight variation.

### Hierarchy (indicative scale)

| Level | Use | Relative size |
|-------|-----|---------------|
| Display | Rare hero statements | Largest |
| H1 | Page titles | Large |
| H2 | Section titles | Medium-large |
| H3 | Sub-sections / product names | Medium |
| Body | Main reading text | Base (16–18px) |
| Small | Captions, metadata, legal | Smaller |
| Micro | Labels, overlines | Smallest |

Line height should favor readability (typically 1.5–1.7 for body).  
Letter-spacing should remain restrained.

Exact font choices and sizes will be finalized during implementation after performance and rendering tests.

---

## 5. Spacing Scale

Use a consistent spacing scale based on a 4px or 8px base unit.

Recommended scale (in rem or px):

`4 · 8 · 12 · 16 · 24 · 32 · 48 · 64 · 96 · 128`

Whitespace is intentional. Prefer generous vertical rhythm between major sections over dense packing.

---

## 6. Layout Grid

- Maximum content width: approximately 1100–1280px for main reading columns.
- Use CSS Grid and Flexbox natively.
- Prefer asymmetric but controlled layouts for editorial sections (especially product presentations).
- Avoid rigid three-column card grids that make all products look identical.

---

## 7. Responsive Breakpoints

Indicative breakpoints (to be refined):

| Name | Min-width | Notes |
|------|-----------|-------|
| Mobile | 0 | Single column, stacked navigation |
| Tablet | ~768px | Two-column possibilities, expanded nav |
| Desktop | ~1024px | Full editorial layouts |
| Wide | ~1280px+ | Constrained max-width with comfortable margins |

Design mobile-first. Test real devices, not only browser resizing.

---

## 8. Navigation

- Persistent top navigation with clear language switcher (EN / PT).
- Language switcher must point to the equivalent page in the other language when it exists.
- Mobile navigation should be simple (hamburger or equivalent) and fully accessible.
- Avoid mega-menus or deep nested structures.

Primary navigation items (indicative):
- Home
- Products (or individual product links + overview)
- About
- Contact

---

## 9. Buttons and Links

### Buttons
- Primary: solid institutional accent, high contrast
- Secondary: outline or subtle fill
- Tertiary / text buttons: minimal

States required: default, hover, focus, active, disabled.  
Focus states must be clearly visible for keyboard users.

### Links
- Body text links should be distinguishable by color and/or underline.
- Avoid color-only differentiation.

---

## 10. Product Presentation Patterns

The homepage and product pages must not reduce the three products to three identical generic cards.

Preferred approach:

- Editorial sections with different visual treatments
- Varied layout (text-left / text-right, different emphasis levels)
- Clear hierarchy of product name → short description → status → call-to-action
- Product-specific accent usage only when justified and restrained

Each product page should feel like a focused product introduction rather than a sales landing page.

---

## 11. Surfaces and Borders

- Prefer subtle borders or soft tonal shifts over heavy shadows.
- Avoid excessive card elevation or glassmorphism.
- Borders should be thin and low-contrast unless used for strong separation.
- Rounded corners, if used, should be consistent and restrained.

---

## 12. Motion Principles

- Motion is secondary to clarity and performance.
- Prefer CSS transitions and transforms over JavaScript animation libraries.
- Use motion only when it aids understanding or provides gentle feedback (hover, focus, page transitions if extremely light).
- Respect `prefers-reduced-motion`.
- Avoid continuous or decorative animations that consume resources or distract.

---

## 13. Accessibility

Mandatory requirements:

- Semantic HTML
- Sufficient color contrast (WCAG AA minimum for text)
- Visible focus indicators
- Keyboard navigability of all interactive elements
- Proper heading structure
- Alt text for meaningful images (decorative images marked appropriately)
- Language attributes (`lang="en"` / `lang="pt"`) on every page
- Support for screen readers

---

## 14. Performance Constraints

- Target: fast first contentful paint and low total page weight
- Prefer system fonts or a very small number of self-hosted or efficiently loaded web fonts
- Optimize images (modern formats, appropriate sizes, lazy loading where suitable)
- No unnecessary JavaScript
- No heavy third-party scripts or tracking by default
- Static site architecture only

---

## 15. Explicit Visual Anti-Patterns

Do **not**:

- Use generic SaaS gradient heroes or illustration packs
- Force identical card grids for the three products
- Apply heavy drop shadows, neon accents, or glassmorphism as default style
- Use more than two typefaces without strong justification
- Introduce animation libraries for effects achievable with CSS
- Copy layouts or visual elements from the reference sites
- Redesign or invent the ORXU logo
- Apply product brand colors to the institutional chrome (header, footer, navigation)

---

## 16. Unresolved Visual Decisions

- Exact institutional blue and full color tokens (pending original logo inspection)
- Final typeface selection and sizing scale
- Specific treatment of custom graphics derived from the ORXU symbol
- Whether product accent colors appear on the institutional site at all (and how)

These must be resolved only after the logo assets are provided and reviewed.
