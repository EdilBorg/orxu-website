# ORXU Website — Site Architecture

**Status:** Specification phase  
**Last updated:** 2026-11-12  
**Depends on:** `PROJECT_BRIEF.md`, `DESIGN_SYSTEM.md`

This document defines the information architecture, URL structure, navigation model, SEO approach, and deployment considerations for the static institutional website.

---

## 1. Guiding Principles

- Static-site architecture only (HTML + CSS + Vanilla JS)
- Bilingual from the ground up (English primary, Portuguese secondary)
- Clean, predictable URLs
- No duplicated content across languages on the same page
- Prepared for Cloudflare Pages free static hosting
- No backend, no database, no authentication, no CMS

---

## 2. Complete Sitemap

### English routes (`/en/`)

| Path | Purpose |
|------|---------|
| `/en/` | Homepage |
| `/en/products/` | Portfolio overview |
| `/en/products/korvex/` | Korvex product page |
| `/en/products/maps-leads-finder/` | Maps Leads Finder product page |
| `/en/products/bowis/` | BOWIS product page |
| `/en/about/` | About ORXU |
| `/en/contact/` | Contact |
| `/en/legal/privacy/` | Privacy policy |
| `/en/legal/terms/` | Terms of use |

### Portuguese routes (`/pt/`)

| Path | Purpose |
|------|---------|
| `/pt/` | Página inicial |
| `/pt/produtos/` | Visão geral do portfólio |
| `/pt/produtos/korvex/` | Página do produto Korvex |
| `/pt/produtos/maps-leads-finder/` | Página do Maps Leads Finder |
| `/pt/produtos/bowis/` | Página do BOWIS |
| `/pt/sobre/` | Sobre a ORXU |
| `/pt/contacto/` | Contacto |
| `/pt/legal/privacidade/` | Política de privacidade |
| `/pt/legal/termos/` | Termos de utilização |

### Root behavior

- `/` → redirects or points visitors toward a language choice / English default (see section 8)
- No content pages live directly at the root except the language entry mechanism

---

## 3. Bilingual URL Structure

**Rules:**

- English and Portuguese versions are completely separate files and routes.
- Never mix languages on the same page.
- Equivalent pages must exist in both languages whenever possible.
- Language switcher must link to the corresponding page in the other language (or to the homepage of that language if no equivalent exists).

**hreflang strategy:**

Every content page must include appropriate `hreflang` annotations pointing to its English and Portuguese counterparts, plus an `x-default` pointing to the English version (or the root language selector).

Example pattern:

```html
<link rel="alternate" hreflang="en" href=".../en/..." />
<link rel="alternate" hreflang="pt" href=".../pt/..." />
<link rel="alternate" hreflang="x-default" href=".../en/..." />
```

Exact absolute URLs will depend on the final deployment domain (still unresolved).

---

## 4. Navigation Model

### Primary navigation (desktop)

- Logo → Home of current language
- Products / Produtos (with optional dropdown or direct links to individual products)
- About / Sobre
- Contact / Contacto
- Language switcher (EN | PT)

### Mobile navigation

- Collapsible menu containing the same items
- Fully keyboard accessible and screen-reader friendly

### Secondary / utility

- Language switcher always visible or easily reachable
- Footer contains secondary links (legal, contact, language)

---

## 5. Footer Structure

Typical footer content (both languages):

- ORXU wordmark / short institutional line
- Navigation links (Home, Products, About, Contact)
- Legal links (Privacy, Terms)
- Institutional email: `orxugroup@gmail.com`
- Language switcher
- Copyright notice (year + “ORXU” — no invented legal entity claims)

Avoid inventing social media links or additional contact channels that have not been confirmed.

---

## 6. Individual Product Page Structure

Each product page (English and Portuguese) should follow a consistent but not identical editorial structure:

1. **Product name + short positioning statement**
2. **Purpose and audience** — what the product is for and who it serves
3. **Key directions / capabilities** — current and planned, clearly distinguished
4. **Development status** — transparent statement (e.g. “In development”)
5. **External product link** (when available) — clear call-to-action to the product website
6. **Optional:** restrained visual or diagrammatic support (once assets exist)

The page must not become a full marketing landing page with invented feature lists or social proof.

---

## 7. Asset Organization

```
assets/
├── images/          # General images, product imagery placeholders
├── icons/           # UI icons (prefer SVG, inline or sprite)
├── fonts/           # Self-hosted fonts if used
└── logo/            # Official ORXU logo files (to be added by user)
```

- Prefer SVG for logos and icons when possible.
- Optimize raster images.
- Keep filenames descriptive and consistent.
- No external CDNs for critical assets unless justified by performance testing.

---

## 8. Root URL Behavior

Recommended approach (to be confirmed):

1. Root `/` serves a minimal language entry page **or**
2. Root `/` performs a simple redirect to `/en/` (with optional browser language detection as progressive enhancement only)

Important constraints:

- Do not hardcode any unconfirmed domain (including `orxu.com`).
- Relative paths and root-relative paths should be preferred where practical.
- Any language detection must degrade gracefully.

Final decision on exact root behavior can be made during implementation.

---

## 9. SEO Architecture

Mandatory elements per page:

- Unique `<title>`
- Unique meta description
- Correct `lang` attribute on `<html>`
- Canonical URL (once domain is known)
- `hreflang` annotations as described above
- Semantic heading structure
- Open Graph / basic social meta tags (title, description, image when available)

Additional recommendations:

- Clean, readable URLs (already defined)
- Logical internal linking between institutional pages and product pages
- No thin or duplicate content across languages
- Sitemap.xml and robots.txt to be generated statically once the site is implemented

Do not invent structured data claims (Organization schema with fake addresses, reviews, etc.).

---

## 10. Cloudflare Pages Deployment Considerations

- Target: Cloudflare Pages free static hosting
- Build command: none (or empty)
- Output / publish directory: repository root
- No environment variables or paid features required for the core site
- Custom domain can be added later when available
- Preview deployments for pull requests are useful and free

The repository is already structured for this model. No complex build pipeline should be introduced.

---

## 11. File System Alignment with Current Repository

The existing repository structure is compatible with the architecture above:

```
orxu-website/
├── index.html              # Root language entry / redirect
├── en/
│   └── index.html
├── pt/
│   └── index.html
├── products/
│   ├── korvex/
│   ├── maps-leads-finder/
│   └── bowis/
├── about/
├── contact/
├── legal/
├── assets/
├── css/
├── js/
└── documentation files
```

During implementation, the language-specific product, about, contact, and legal pages will be created under `/en/` and `/pt/` as needed. The top-level `products/`, `about/`, etc. directories can remain as shared asset or shared partial locations if useful, or be reorganized cleanly. Any reorganization must be justified and documented.

---

## 12. Unresolved Architectural Decisions

- Final production domain name
- Exact root URL behavior (simple redirect vs. language chooser page)
- Whether product overview lives at `/en/products/` or is handled primarily via the homepage + individual pages
- Precise handling of shared CSS/JS vs. page-specific assets

These will be finalized during the implementation phase with user input where required.
