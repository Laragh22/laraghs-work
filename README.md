# Laragh Gallagher — Website

A custom site built from your design system ("Dark, bold, and a little bit cheeky").
Plain HTML/CSS/JS — no build step, works on any host.

## Files
- `index.html` — Home
- `work.html` — Work index (hover list + grid)
- `project.html` — Case-study template (loads `?id=` from the projects list)
- `about.html` — About + experience timeline
- `contact.html` — Contact + social links
- `styles.css` — All styling (the design system)
- `main.js` — Shared logic + the **projects list** (edit this to add work)
- `/images` — put your project images here
- `/fonts` — put licensed PP Neue Montreal `.woff2` files here

## How to preview
Double-click `index.html`, or run a tiny local server for clean links:
```
cd site
python3 -m http.server 8000
```
Then open http://localhost:8000

## Add / edit projects (and real images)
Open `main.js` and edit the `PROJECTS` array. For each project:
- `name`, `tag`, `year`, `role`, `blurb` — text shown on the site
- `img` — set to e.g. `"images/wendys.jpg"` to use a real image.
  Leave `""` to keep the color-gradient placeholder.
- `id` — the URL slug (used by `project.html?id=...`)

Drop the matching image files into the `/images` folder. That's it —
the home list, work grid, and project pages all update automatically.

## Use the real font (PP Neue Montreal)
The site currently uses **Hanken Grotesk** (free, loaded from Google Fonts) as a
close stand-in. PP Neue Montreal is a **paid** font from Pangram Pangram.
Once licensed, drop these files into `/fonts` and it switches automatically:
- `PPNeueMontreal-Medium.woff2`
- `PPNeueMontreal-SemiBold.woff2`
- `PPNeueMontreal-Bold.woff2`
- `PPNeueMontreal-Italic.woff2`

(If you'd rather just ship Hanken Grotesk, no action needed — it already works.)

## Change the accent color
In `styles.css`, edit `--volt:#E8FF59;` to any hue to re-skin the whole site.

## Hosting (when ready)
This is a static site, so it works free on Netlify, Vercel, GitHub Pages,
or Cloudflare Pages — just drag the `site` folder in. It can also point your
existing `laraghgallagher.com` domain at it.
