# ORXU Website — Deployment & Post-Publish Checklist

**Status:** Pre-publication technical review  
**Last updated:** 2026-11-12

This file records configuration that **depends on the final public origin** and items that require human validation before or immediately after first publish. It is not a redesign brief.

---

## 1. Domain-dependent configuration (do not invent a domain)

No definitive domain has been confirmed. Until the Cloudflare Pages hostname or custom domain is known:

| Item | Current state | Action when origin is known |
|------|---------------|-----------------------------|
| `sitemap.xml` `<loc>` values | Path-only (`/en/`, `/pt/`, …) | Prefix every `<loc>` with the absolute origin |
| `robots.txt` `Sitemap:` | Relative `/sitemap.xml` | Change to absolute URL of the published sitemap |
| Canonical `<link rel="canonical">` | Not present on pages | Add per page with absolute self-referencing URL |
| `hreflang` alternate links | Not present | Add bidirectional EN/PT pairs with absolute URLs |
| Open Graph `og:url` | Not present | Optional; add absolute URL if prioritised |
| JSON-LD `url` / `logo` | Omitted (no absolute URL available) | Add absolute website URL and logo URL when origin is known |

**Do not** hardcode `orxu.com` or any other unconfirmed domain.

---

## 2. SEO — Final configuration after deployment

Complete this checklist only after the public origin is known. None of these items is complete until then.

### Pending (domain required)

- [ ] **Public hostname confirmed** (Cloudflare Pages `*.pages.dev` or custom domain)
- [ ] **Canonical URLs** — one absolute self-referencing canonical per content page
- [ ] **Hreflang bidirectional pairs** (see table below)
- [ ] **x-default** — candidate is the root `/` language redirect (or the preferred default language home); do not assign x-default to internal pages indiscriminately
- [ ] **Sitemap absolute URLs** — replace path-only `<loc>` values in `sitemap.xml`
- [ ] **robots.txt Sitemap** — absolute URL to the published sitemap
- [ ] **OG image** — create an original 1200 × 630 px social image using official ORXU identity only; then add `og:image` absolute URL on all pages
- [ ] **Metadata validation** — re-check titles, descriptions, OG, and structured data against live URLs
- [ ] **Google Search Console** — property verification for the final origin
- [ ] **Sitemap submission** — submit absolute sitemap URL in Search Console

### Hreflang pairs (to implement after domain is known)

| English | Portuguese |
|---------|------------|
| `/en/` | `/pt/` |
| `/en/products/` | `/pt/produtos/` |
| `/en/products/korvex/` | `/pt/produtos/korvex/` |
| `/en/products/maps-leads-finder/` | `/pt/produtos/maps-leads-finder/` |
| `/en/products/bowis/` | `/pt/produtos/bowis/` |
| `/en/about/` | `/pt/sobre/` |
| `/en/contact/` | `/pt/contacto/` |
| `/en/legal/privacy/` | `/pt/legal/privacidade/` |
| `/en/legal/terms/` | `/pt/legal/termos/` |

For each pair, both pages should include:
- `hreflang="en"` → absolute EN URL
- `hreflang="pt"` → absolute PT URL
- Self-referencing hreflang for the current language

Root `/` is the language entry/redirect page and is the preferred candidate for `hreflang="x-default"`.

### Already in place (Phase 1 — no domain required)

- Unique `<title>` and meta description on all 18 content pages
- Single H1 per page; logical heading hierarchy
- `lang` attribute correct (`en` / `pt`)
- Charset UTF-8 and viewport meta
- Favicon referenced on all content pages
- Open Graph: `og:title`, `og:description`, `og:type`, `og:site_name`, `og:locale` (`en_US` / `pt_PT`)
- JSON-LD `Organization` and `WebSite` on English and Portuguese home pages (name + email only; no invented fields)
- `sitemap.xml` inventories all 18 routes (path-only until domain is known)
- `robots.txt` allows crawling; does not block `/en/` or `/pt/`

### OG image recommendation

No dedicated social sharing image exists in the repository. Create one original asset at **1200 × 630 px** using only official ORXU identity (navy `#001A39` / related, official mark). Do not invent photography or third-party branding. After the file is added (e.g. `assets/images/og-default.png`), reference it with an absolute `og:image` URL on all pages.

---

## 3. Logo asset

**Path:** `assets/logo/orxu-mark.svg`  
**All 18 pages** reference this single path (header, footer, favicon).

**Action required for byte-identical official mark:**  
Replace `assets/logo/orxu-mark.svg` on GitHub with the exact official file authorised via the GitHub web UI if not already done. Do not re-export in an editor that rewrites paths.

**Presentation CSS:** `.logo-mark` uses `height: 2rem; width: auto` for the portrait viewBox.

---

## 4. Legal pages — points requiring human validation

Privacy Policy and Terms of Use are general informational drafts, not legal advice.

Confirm before treating as final:

- Hosting log retention under Cloudflare Pages settings
- Whether Google Fonts (Inter) remains acceptable or should be self-hosted
- Any additional contact channels, legal entity name, or jurisdiction statements
- Product external URLs and development-status wording as products evolve

Do not invent entity registration or data-controller identity until established.

---

## 5. Cloudflare Pages publish steps

1. Connect repository `EdilBorg/orxu-website`.
2. Build command: empty / none.
3. Output directory: repository root (`/`).
4. After first deploy, record the public hostname.
5. Complete section 2 (SEO final configuration).
6. Ensure logo file is the exact official SVG (section 3).

---

## 6. Route inventory (18 institutional pages)

**English:** `/en/`, `/en/products/`, `/en/products/korvex/`, `/en/products/maps-leads-finder/`, `/en/products/bowis/`, `/en/about/`, `/en/contact/`, `/en/legal/privacy/`, `/en/legal/terms/`  
**Portuguese:** `/pt/`, `/pt/produtos/`, `/pt/produtos/korvex/`, `/pt/produtos/maps-leads-finder/`, `/pt/produtos/bowis/`, `/pt/sobre/`, `/pt/contacto/`, `/pt/legal/privacidade/`, `/pt/legal/termos/`  
**Root:** `/` language-aware redirect to `/en/` or `/pt/`
