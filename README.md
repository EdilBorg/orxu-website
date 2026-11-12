# ORXU Website

Official institutional website and software product portfolio of ORXU.

ORXU is an independent software product portfolio brand. Current products:

- **Korvex**
- **Maps Leads Finder**
- **BOWIS**

## Technology

- HTML5 / CSS3 / Vanilla JavaScript
- Static site architecture
- Prepared for Cloudflare Pages (free static hosting)

No frameworks, no backend, no build tools required for the core site.

## Structure

```
orxu-website/
├── index.html
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
│   ├── images/
│   ├── icons/
│   ├── fonts/
│   └── logo/
├── css/
├── js/
├── README.md
└── .gitignore
```

## Local development

Simply open `index.html` in a browser or serve the root directory with any static file server.

## Deployment

Intended for Cloudflare Pages. Connect the repository and set the build command to none / output directory to the root.

## License

Proprietary. All rights reserved.
