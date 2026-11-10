# Progree Remote Internship — Task 2 Report

## Task

**Fully Responsive Portfolio Web Application**

## Candidate

- **Name:** MD. Minhazur Rahman Fahim
- **Institution:** Blue Bird High School & College
- **Repository:** https://github.com/fahim1252375-maker/progree-task-2-portfolio
- **Live deployment:** https://grand-starlight-0c4115.netlify.app/

## Objective

Build and publish a responsive personal portfolio using semantic HTML5, modern CSS layout techniques, and JavaScript interactions.

## Implemented work

- Structured the page with semantic HTML sections, one main landmark, a primary heading, descriptive metadata, and Person structured data.
- Used CSS Grid, Flexbox, custom properties, and responsive media queries.
- Added mobile navigation with synchronized `aria-expanded`, Escape-to-close behavior, and keyboard focus management.
- Added accessible selected-state announcements (`aria-pressed`) to project filter buttons.
- Implemented project category filtering, scroll progress, back-to-top behavior, reveal-on-scroll effects, and email-copy fallback.
- Preserved reduced-motion support and made the back-to-top interaction avoid smooth scrolling when reduced motion is requested.
- Added canonical URL, Open Graph/Twitter metadata, and an SVG favicon.
- Added/retained Netlify response headers, `robots.txt`, and `sitemap.xml`.
- Updated repository documentation and the QA checklist.

## Technology

HTML5 · CSS3 · Vanilla JavaScript · Git/GitHub · Netlify

## Scope notes

The repository inspected for this report contains `index.html`, `styles.css`, and `script.js` as its active page implementation. It does not contain the `enhancements.js`, `enhancements.css`, command palette, project dialog, or stat-counter components mentioned in a separate Netlify Agent review. Those unrelated components were not introduced into this project.

## Verification performed

- Inspected the current GitHub `main` branch source files and Netlify deployment metadata.
- Confirmed the page contains a single `main` landmark and one primary `h1`.
- Confirmed eight project articles are present in the source markup.
- Confirmed responsive media-query breakpoints and a visible `:focus-visible` style are present in the stylesheet.
- Confirmed the previous published Netlify deploy was successful (`ready`) and was created using a manual Drop upload, not a Git-backed continuous deployment.
- Confirmed the previous published deploy did not process the repository's `_headers` file. The headers will take effect only after a deploy that includes that file.

**These are source/configuration checks only. They are not a substitute for interactive browser testing.**

## Browser QA and evidence still required

Do not mark the following as passed until they have actually been tested in a browser:

- [ ] Desktop layout and navigation.
- [ ] Tablet layout and navigation.
- [ ] Mobile layout at approximately 375–390 px wide.
- [ ] Mobile menu opens, closes, closes with Escape, and restores focus.
- [ ] Project filters and empty state.
- [ ] Email copy and contact links.
- [ ] Keyboard-only walkthrough.
- [ ] Colour contrast check.
- [ ] Reduced-motion behavior in a browser.
- [ ] Browser console and failed network request check.
- [ ] Broken-link check.
- [ ] Actual production deployment includes `_headers`, favicon, canonical metadata, robots.txt, and sitemap.xml.
- [ ] Capture authentic desktop, mobile, open-menu, and project-filter screenshots.

## Learning outcomes

This task provides practice in semantic page structure, responsive CSS, keyboard accessibility, JavaScript-driven interface behavior, metadata, response headers, version control, documentation, and static-site deployment.

## Submission status

**Source implementation and GitHub documentation:** Updated in the repository.

**Production publication:** Pending. The inspected Netlify production site is using a manual Drop deployment, so GitHub commits do not publish automatically.

**Live browser QA and screenshot evidence:** Pending. Complete these checks and attach genuine screenshots before submitting the final internship report.
