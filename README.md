# Fahim — Developer Portfolio

A responsive, single-page portfolio for **MD. Minhazur Rahman Fahim**, built with semantic HTML5, CSS, and vanilla JavaScript. It presents selected development work, skills, learning milestones, and contact links.

## Live website

**[View the portfolio](https://grand-starlight-0c4115.netlify.app/)**

## Repository

**[GitHub source](https://github.com/fahim1252375-maker/progree-task-2-portfolio)**

## Features

- Responsive layouts using CSS Grid, Flexbox, and media queries
- Semantic HTML sections and accessible navigation labels
- Mobile navigation with synchronized `aria-expanded`, Escape-to-close, and focus handling
- Project category filters with accessible `aria-pressed` state
- Scroll progress indicator and back-to-top control
- Scroll-reveal effects using the Intersection Observer API
- Reduced-motion support, including non-animated back-to-top behavior
- Email-copy interaction with a fallback
- Canonical URL, Open Graph/Twitter metadata, Person structured data, and SVG favicon
- Netlify response headers, crawler instructions, and XML sitemap
- No framework, build command, or third-party JavaScript dependencies

## Technology

- HTML5
- CSS3 (Grid, Flexbox, custom properties, media queries)
- Vanilla JavaScript (ES6+)
- Git/GitHub
- Netlify static hosting

## Run locally

Python 3 is sufficient; no package installation is required.

```bash
git clone https://github.com/fahim1252375-maker/progree-task-2-portfolio.git
cd progree-task-2-portfolio
python3 -m http.server 8000
```

Open [http://localhost:8000](http://localhost:8000).

## Project structure

```text
.
├── index.html          # Page content, structured data, and SEO metadata
├── styles.css          # Responsive visual system and layouts
├── script.js           # Navigation, filters, and interface interactions
├── favicon.svg         # Portfolio favicon
├── CONTENT_AUDIT.md    # Content sources and verification notes
├── _headers            # Netlify security response headers
├── robots.txt          # Search crawler instructions
├── sitemap.xml         # Canonical page sitemap
├── TASK2_REPORT.md     # Internship task report and QA checklist
├── LICENSE
└── README.md
```

## Deployment

This is a static website. Recommended Netlify Git deployment settings:

| Setting | Value |
| --- | --- |
| Production branch | `main` |
| Build command | Leave blank |
| Publish directory | `.` |

**Deployment status note:** The latest production deploy inspected during this report was created through Netlify's manual Drop workflow (`manual_deploy: true`, no commit reference). GitHub changes therefore do not automatically update the live site yet. Connect this repository in **Netlify → Project configuration → Build & deploy → Continuous deployment**, select `fahim1252375-maker/progree-task-2-portfolio` and branch `main`, then retain the blank build command and publish directory `.`. Confirm the first Git-based deploy before relying on automatic updates.

The `.netlify/` directory is ignored by Git so local Netlify state is not committed.

## Content accuracy

- BlogSpace Full-Stack and the separate LocalStorage-based BlogSpace Frontend demo are described as distinct projects.
- The Microsoft ML-For-Beginners repository is described as a study fork, not original curriculum authorship.
- Early-stage concepts are labelled as explorations rather than completed products.
- The portfolio does not claim unverified clients, revenue, awards, or performance scores.
- Credential IDs and verification links are not invented. See `CONTENT_AUDIT.md` for source and verification notes.

## Manual QA checklist

The following browser checks must be completed on the deployed version before internship submission:

- [ ] Verify navigation and section links in desktop and mobile browsers.
- [ ] Open the mobile menu, press Escape, and confirm focus returns to the menu button.
- [ ] Open the mobile menu and activate a section link; confirm the menu closes and the destination receives focus.
- [ ] Verify every project filter and the empty state.
- [ ] Test email copy, email link, and all external project links.
- [ ] Check for horizontal overflow at narrow viewport widths.
- [ ] Complete a keyboard-only walkthrough and check visible focus.
- [ ] Check browser console errors, failed requests, and broken links.
- [ ] Check colour contrast and reduced-motion behavior.
- [ ] Capture genuine desktop, mobile, open-menu, and project-filter screenshots for the Task 2 report.

## License

Released under the MIT License. See [LICENSE](LICENSE).
