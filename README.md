# Anika Sharma — personal academic website

A lightweight, Notion-inspired website for GitHub Pages. Cream paper, sage and lavender accents, small SVG icons, research figures, and a personal whale-research section. No framework, external font, tracking script, API key, or build step.

## Preview

Unzip this folder and double-click `index.html`. The research filters, figure viewer, CV, and updates page work locally. Keep the assets folder beside the HTML files.

For an optional local server, run this from the website folder:

```bash
python3 -m http.server 8000
```

Then visit http://localhost:8000.

## Publish to GitHub Pages

The GitHub username in the supplied CV is `Anika1703`.

1. Create a public GitHub repository named **anika1703.github.io**, or use that repository if it already exists. If it already contains a website, preserve a backup before replacing it.
2. Upload the contents of this folder into the repository root. `index.html`, `updates.html`, `styles.css`, `script.js`, and `assets/` must sit at the root, not inside an extra `anika-website` folder. Include `.nojekyll` if uploading with Git; this plain HTML site also works with the default Pages build.
3. In the repository, open **Settings → Pages**. Under **Build and deployment**, choose **Deploy from a branch**, then **main** and **/ (root)**. Save.
4. GitHub will show the published address when deployment completes: https://anika1703.github.io/.

This package has not been pushed to GitHub or deployed.

Official instructions: https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site

## Edit the content

- `index.html`: bio, home-page news, research projects, teaching/community, and personal section.
- `updates.html`: full milestone page. Each update is an `article.timeline-entry`.
- `styles.css`: colors, typography, desktop/mobile layouts. The palette is at the top in `:root`.
- `script.js`: project filtering and accessible native-dialog figure viewer.
- `assets/Anika-Sharma-CV.pdf`: replace with a newer PDF while retaining the name to preserve links.
- `assets/anika.jpg`: supplied headshot. Its portrait crop is controlled with CSS; the source aspect ratio is preserved in the file.
- `assets/*.webp`: supplied teaser figures, optimized for the web. Figures open in a scrollable enlarged viewer; without JavaScript, they open as images.
- `assets/favicon.svg`: tiny whale icon.

The homepage news and full updates page contain independent HTML, so update both when adding a headline you want to feature on the homepage.

## Content choices and sources

- Main source: the uploaded CV and LaTeX, plus the requested bio direction and milestone list in chat.
- The stigma paper uses the current arXiv title **Behavioral Coherence: A Method for Sensitive-Domain LLM Evaluation**. The supplied CV uses an earlier title. The supplied CV PDF is included unchanged.
- Sound symbolism uses the title and author order in the supplied CV / linked arXiv. Its EMNLP 2026 Main / Oral status is from the supplied CV and instructions.
- CARE is grouped as one project with a shared teaser, separate extended-abstract and long-paper links, and expandable publication details. Titles, author orders, and the long-paper link are from the supplied CV. The current arXiv abstract page for CARE could not be independently retrieved; the accessible v1 HTML describes the extended abstract. Confirm the latest version/link corresponds to the intended long paper before publishing if the arXiv record has not yet been updated.
- Gender-bias work is described as a first-author ARR submission in the CV; no public paper URL was supplied, so no placeholder paper button is shown. Its entry uses the provided descriptive project title and omits the old sample-size figure so it does not imply the ongoing expanded runs are already published results.
- The education platform is explicitly marked as a manuscript in preparation. Its goal is described as a design aim, not a validated outcome. No teaser is invented.
- Exact months were not supplied for every milestone. The page uses 2026 or Fall 2026 where supported; the first ten-mile run is an undated personal milestone.
- Whale “hello” is explicitly presented as speculation, not an established translation.
- Legacy development/hackathon projects are excluded. Teaching and SAILea appear only as community/mentorship work.

Research links:
- https://arxiv.org/abs/2512.13142
- https://arxiv.org/abs/2512.12245
- https://dl.acm.org/doi/10.1145/3772363.3799046
- https://arxiv.org/abs/2603.20511
- https://cdr.lib.unc.edu/concern/honors_theses/h989rk50q

Personal project links are the original links supplied in chat. The composition app and SoundCloud samples open externally; no audio autoplays.

## Accessibility and portability

Semantic headings, descriptive figure alt text, a skip link, visible keyboard focus, keyboard-accessible filters, native dialog focus handling, Escape-to-close, reduced-motion support, mobile layouts, and print styles are included. Main content is plain HTML and remains readable without JavaScript.

All decorative icons are small code-native SVGs. No generated raster artwork or outside image service is used. The portrait and scientific figures are the supplied assets.

## Verification

Checked both pages in headless Chromium at desktop (1440px) and mobile (390px) widths, including visual inspection of the screenshots. Both pages had no horizontal overflow or missing images. Project filters, figure open/close with Escape, CARE publication expansion, and revealing filtered projects through direct section links passed. JavaScript reported no runtime errors. Local asset paths, links, and fragment targets were checked. External sites remain subject to their own availability.


## Quick editing guide

Open the folder in VS Code, then use Cmd+F to find the exact sentence or project title you want to change.

| What to change | File |
| --- | --- |
| Name, affiliation, bio, research descriptions, authors, paper links, personal section | `index.html` |
| The two featured homepage news items | `index.html` — search `HOMEPAGE UPDATES` |
| Full updates page | `updates.html` — each `article.timeline-entry` is one item |
| Colors, fonts, sizes, spacing, picture crop | `styles.css` — colors start in `:root` |
| CV download | Replace `assets/Anika-Sharma-CV.pdf`, keeping the filename |
| Headshot | Replace `assets/anika.jpg`, keeping the filename |
| Teaser figures | Replace images in `assets/`, or change the image paths in `index.html` |
| Filter or image-viewer behavior | `script.js` |

Edit words between HTML tags, leaving the tags in place. For links, change the URL inside `href="..."`. Use `<strong>text</strong>` for bold and `<mark>text</mark>` for highlighting. Save, then refresh the open `index.html` in your browser to see the change. There is no rebuild command.

The shared sidebar/footer appears in both HTML pages. Edit both if you change its wording or navigation. The CV PDF is a separate file: changing the website bio does not change the CV.
