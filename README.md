# Fahim — Developer Portfolio

A responsive, single-page portfolio for **MD. Minhazur Rahman Fahim**, built with semantic HTML5, CSS, and vanilla JavaScript. The project presents selected development work, skills, learning milestones, and contact links.

## Live website

**[View the portfolio](https://grand-starlight-0c4115.netlify.app/)**

## Repository

**[GitHub source](https://github.com/fahim1252375-maker/progree-task-2-portfolio)**

## Features

- Responsive layouts for desktop, tablet, and mobile
- Semantic HTML sections and accessible navigation labels
- Mobile navigation with synchronized `aria-expanded` state
- Project category filters
- Scroll progress indicator and back-to-top control
- Scroll-reveal effects using the Intersection Observer API
- Reduced-motion preference support
- Email copy interaction with a fallback
- Open Graph metadata and Person structured data
- No framework or build step required

## Tech stack

- HTML5
- CSS3 (Grid, Flexbox, custom properties, media queries)
- Vanilla JavaScript (ES6+)
- Netlify for static hosting

## Run locally

Python 3 is sufficient; no package installation is required.

```bash
git clone https://github.com/fahim1252375-maker/progree-task-2-portfolio.git
cd progree-task-2-portfolio
python3 -m http.server 8000
```

Open [http://localhost:8000](http://localhost:8000).

You can also open `index.html` directly, although using a local server is recommended for a more realistic browser test.

## Project structure

```text
.
├── index.html          # Page content and metadata
├── styles.css          # Responsive visual system and layouts
├── script.js           # Navigation and interface interactions
├── CONTENT_AUDIT.md    # Content sources and verification notes
├── _headers            # Netlify security response headers
├── robots.txt          # Search crawler instructions
├── sitemap.xml         # Canonical page sitemap
├── TASK2_REPORT.md     # Internship task report and QA checklist
├── LICENSE
└── README.md
```

## Deployment

This is a static website. Netlify can deploy it directly from the `main` branch.

| Setting | Value |
| --- | --- |
| Build command | Leave blank |
| Publish directory | `.` |
| Production branch | `main` |

**Current observed deployment:** Netlify reports the published site was uploaded with the manual deploy (Drop) workflow; this Netlify site is not yet confirmed as connected to this GitHub repository. To enable automatic deploys, open the Netlify project, choose **Project configuration → Build & deploy → Continuous deployment**, connect GitHub, select `fahim1252375-maker/progree-task-2-portfolio` and branch `main`, then set the build command to blank and publish directory to `.`. Confirm the first Git-based production deploy before relying on automatic updates.

## Quality and content notes

- Project descriptions distinguish the full-stack BlogSpace repository from its separate LocalStorage-based frontend demo.
- The Microsoft ML-For-Beginners repository is described as a study fork, not original curriculum authorship.
- Concept-stage ideas are labelled as explorations rather than completed products.
- No unverified client metrics, revenue, awards, or performance scores are claimed.
- The content audit records items that still need primary-source confirmation.

## Manual QA checklist

Before submitting the internship task, verify the deployed site in current desktop and mobile browsers:

- [ ] All navigation links reach the correct sections.
- [ ] Mobile menu opens, closes, and closes after a navigation link is selected.
- [ ] Project filters show the correct cards.
- [ ] Theme or other controls (if present in the current deployed build) work as expected.
- [ ] Email and external project links open correctly.
- [ ] No horizontal overflow at narrow viewport widths.
- [ ] Keyboard focus is visible and interactive controls are keyboard accessible.
- [ ] No broken images, missing assets, or browser-console errors.
- [ ] Capture desktop and mobile screenshots for the Task 2 report.

## License

Released under the MIT License. See [LICENSE](LICENSE).
