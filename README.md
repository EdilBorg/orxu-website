# ORXU Website

Institutional website and software product portfolio for ORXU.

ORXU is an independent software product portfolio brand. The website presents its products, institutional information, and contact details in English and Portuguese.

## Product portfolio

- **Korvex** — WhatsApp automation software. In development.
- **Maps Leads Finder** — business prospecting and lead research software. In development.
- **BOWIS** — point-of-sale and commercial management software. Early development.

Product descriptions and development statuses must remain factual. Do not present planned capabilities as released features or imply that ORXU is a legally registered entity.

## Technology

- HTML5
- CSS3
- Vanilla JavaScript
- Static files only; no application backend or database
- No framework, package manager, or build step required

## Repository structure

```
orxu-website/
├── index.html
├── en/
│   ├── index.html
│   ├── products/
│   │   ├── index.html
│   │   ├── korvex/index.html
│   │   ├── maps-leads-finder/index.html
│   │   └── bowis/index.html
│   ├── about/index.html
│   ├── contact/index.html
│   └── legal/
│       ├── privacy/index.html
│       └── terms/index.html
├── pt/
│   ├── index.html
│   ├── produtos/
│   │   ├── index.html
│   │   ├── korvex/index.html
│   │   ├── maps-leads-finder/index.html
│   │   └── bowis/index.html
│   ├── sobre/index.html
│   ├── contacto/index.html
│   └── legal/
│       ├── privacidade/index.html
│       └── termos/index.html
├── assets/
│   └── logo/
│       └── orxu-mark.svg
├── css/
│   └── main.css
├── js/
│   └── main.js
├── robots.txt
├── sitemap.xml
├── PROJECT_BRIEF.md
├── DESIGN_SYSTEM.md
├── SITE_ARCHITECTURE.md
├── CONTENT_SPECIFICATION.md
├── DEPLOYMENT_NOTES.md
└── README.md
```

The site contains 18 language-specific content pages: nine English routes under `/en/` and nine Portuguese routes under `/pt/`. The root `index.html` is the language-aware entry point.

## Local preview

Because this is a static site, no dependency installation or compilation is needed. From the repository root, start any static HTTP server and open its local address.

For example, with Python installed:

```bash
python3 -m http.server 8000
```

Then visit `http://localhost:8000/`.

Serving over HTTP is preferable to opening individual files with `file://`, because it more closely matches the deployed environment and supports normal relative-path behavior.

## Deployment

The intended hosting platform is Cloudflare Pages.

1. Connect the `EdilBorg/orxu-website` GitHub repository.
2. Use `main` as the production branch.
3. Leave the build command empty (no build step is required).
4. Set the build output directory to the repository root.
5. After the first deployment, record the assigned `*.pages.dev` hostname.

The final public hostname is not documented here because it has not yet been confirmed. Once it is known, complete the domain-dependent SEO configuration described in `DEPLOYMENT_NOTES.md`, including absolute sitemap URLs, the sitemap reference in `robots.txt`, canonical URLs, and bilingual `hreflang` links.

## Documentation

| File | Purpose |
|------|---------|
| `PROJECT_BRIEF.md` | Brand positioning, factual constraints, product status, and communication rules |
| `DESIGN_SYSTEM.md` | Visual identity, typography, layout, and interface rules |
| `SITE_ARCHITECTURE.md` | Routes, navigation, bilingual structure, SEO architecture, and deployment model |
| `CONTENT_SPECIFICATION.md` | Page content requirements and messaging |
| `DEPLOYMENT_NOTES.md` | Pre-publication checks and configuration that depends on the final hostname |

## Contact

Institutional contact: orxugroup@gmail.com

## Rights

Proprietary project. All rights reserved.
