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

## 2. Logo asset (critical)

The file `assets/logo/orxu-mark.svg` is a **provisional geometric approximation**. It does **not** faithfully reproduce the official ORXU mark geometry or stroke structure provided by the rights holder.

**Required before public brand presentation:**

1. Supply the official logo in SVG (preferred) or high-resolution PNG with transparent background.
2. Replace `assets/logo/orxu-mark.svg` (and any favicon derivative) with the official asset **without redrawing or reinterpreting** the mark.
3. Keep colour consistent with the official artwork (measured dominant navy ≈ `#001938` / RGB 0,25,56 from the provided original).

Until replacement, the current SVG must be treated as a layout placeholder only.

---

## 3. Legal pages — points requiring human validation

The Privacy Policy and Terms of Use are **general informational drafts**. They must not be treated as final legal advice.

Items that need explicit confirmation or review by the operator:

- Whether hosting logs (IP, user-agent, paths) are retained and for how long under the chosen Cloudflare Pages plan / settings.
- Whether any analytics, fonts-from-Google, or third-party scripts will be introduced after launch (currently Google Fonts Inter is loaded from Google; this should be acknowledged or self-hosted if preferred).
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
6. Replace logo asset as in section 2.

---

## 5. Route inventory (18 institutional pages)

**English:** `/en/`, `/en/products/`, `/en/products/korvex/`, `/en/products/maps-leads-finder/`, `/en/products/bowis/`, `/en/about/`, `/en/contact/`, `/en/legal/privacy/`, `/en/legal/terms/`  
**Portuguese:** `/pt/`, `/pt/produtos/`, `/pt/produtos/korvex/`, `/pt/produtos/maps-leads-finder/`, `/pt/produtos/bowis/`, `/pt/sobre/`, `/pt/contacto/`, `/pt/legal/privacidade/`, `/pt/legal/termos/`  
**Root:** `/` language-aware redirect to `/en/` or `/pt/`
