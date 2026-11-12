# ORXU Website — Deployment & Post-Publish Checklist

**Status:** Pre-publication technical review  
**Last updated:** 2026-11-12

This file records configuration that **depends on the final public origin** and items that require human validation before or immediately after first publish. It is not a redesign brief.

---

## 1. Domain-dependent configuration (do not invent a domain)

No definitive domain has been confirmed. Until the Cloudflare Pages hostname or custom domain is known:

| Item | Current state | Action when origin is known |
|------|---------------|-----------------------------|
| `sitemap.xml` `<loc>` values | Path-only (`/en/`, `/pt/`, …) | Prefix every `<loc>` with the absolute origin (e.g. `https://example.pages.dev/en/`) |
| `robots.txt` `Sitemap:` | Relative `/sitemap.xml` | Change to absolute URL of the published sitemap |
| Canonical `<link rel="canonical">` | Not present on pages | Add per page with absolute URL |
| `hreflang` alternate links | Not present | Add EN/PT/`x-default` pairs with absolute URLs |
| Open Graph `og:url` | Not present | Optional; add absolute URL if social cards are prioritised |

**Do not** hardcode `orxu.com` or any other unconfirmed domain.

---

## 2. Logo asset

**Path:** `assets/logo/orxu-mark.svg`  
**All 18 pages** reference this single path (header, footer, favicon).

**Action required for byte-identical official mark:**  
Replace `assets/logo/orxu-mark.svg` on GitHub with the exact official file you authorised (`WhatsApp-Image-2026-11-12-at-9.21.30-PM-vectorizely.svg`) via the GitHub web UI (Upload files → commit to `main`).  
Do not open or re-export the SVG in an editor that rewrites paths.

**Presentation CSS (already adjusted):**  
`.logo-mark` uses `height: 2rem; width: auto` to fit the official portrait viewBox (`536 × 1200`) in the header without changing the SVG geometry.

**Colour note:** Official fills use `#001A39` / `#001D41` (consistent with the measured navy from the original artwork).

---

## 3. Legal pages — points requiring human validation

The Privacy Policy and Terms of Use are **general informational drafts**. They must not be treated as final legal advice.

Items that need explicit confirmation or review by the operator:

- Whether hosting logs (IP, user-agent, paths) are retained and for how long under the chosen Cloudflare Pages plan / settings.
- Whether Google Fonts (Inter) remains acceptable or should be self-hosted.
- Any additional contact channels, legal entity name, or jurisdiction statements (none are claimed today).
- Accuracy of the product external URLs and development-status wording as products evolve.

Do not invent entity registration, registered office, or data-controller identity until those facts are established.

---

## 4. Cloudflare Pages publish steps (reminder)

1. Connect repository `EdilBorg/orxu-website`.
2. Build command: empty / none.
3. Output directory: repository root (`/`).
4. After first deploy, note the `*.pages.dev` URL (or custom domain).
5. Update `sitemap.xml`, `robots.txt`, and optionally add canonical/hreflang as in section 1.
6. Ensure logo file is the exact official SVG (section 2).

---

## 5. Route inventory (18 institutional pages)

**English:** `/en/`, `/en/products/`, `/en/products/korvex/`, `/en/products/maps-leads-finder/`, `/en/products/bowis/`, `/en/about/`, `/en/contact/`, `/en/legal/privacy/`, `/en/legal/terms/`  
**Portuguese:** `/pt/`, `/pt/produtos/`, `/pt/produtos/korvex/`, `/pt/produtos/maps-leads-finder/`, `/pt/produtos/bowis/`, `/pt/sobre/`, `/pt/contacto/`, `/pt/legal/privacidade/`, `/pt/legal/termos/`  
**Root:** `/` language-aware redirect to `/en/` or `/pt/`
