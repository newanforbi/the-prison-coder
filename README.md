# The Prison Coder

A static single-page website that provides prison coders with open-source code they can study, print, and use to learn how real enterprise applications are structured.

Live site: [newanforbi.github.io/the-prison-coder](https://newanforbi.github.io/the-prison-coder)

---

## Background

This site recreates a project first built at San Quentin State Prison in 2019, with the help of free staff who believed coding should be accessible everywhere.

The goal is simple: make real, working code available to people who can't run a local dev environment, use Stack Overflow, or watch a tutorial. Everything on this site is meant to be readable on paper.

---

## Project structure

```
/
  index.html      — single-page site: header, description, two PDF buttons
  styles.css      — mobile-first dark theme, no frameworks
  app.js          — sets footer year; logs PDF clicks to console
  pdfs/
    code-1.pdf    — (upload separately)
    code-2.pdf    — (upload separately)
```

---

## Deploying to GitHub Pages

1. Push this repo to GitHub.
2. Go to **Settings → Pages**.
3. Under **Source**, select **Deploy from a branch**.
4. Choose branch `main`, folder `/ (root)`, and save.
5. GitHub will publish the site at `https://<your-username>.github.io/<repo-name>`.

### Adding the PDFs

Drop your PDF files into the `pdfs/` folder and push:

```bash
cp your-file.pdf pdfs/code-1.pdf
cp your-other-file.pdf pdfs/code-2.pdf
git add pdfs/
git commit -m "Add PDF documents"
git push
```

The buttons on the site link directly to `/pdfs/code-1.pdf` and `/pdfs/code-2.pdf`, so the filenames must match exactly.

---

## Local development

No build step needed. Just open `index.html` in a browser:

```bash
open index.html
# or
python3 -m http.server 8080   # then visit http://localhost:8080
```

> Note: PDF links require a server (not `file://`) to resolve correctly. Use the `python3` option above to test them locally.

---

## Tech

- Plain HTML, CSS, and JavaScript — no frameworks, no dependencies
- Mobile-first layout, readable on any screen size
- Fully static — works on any host, including GitHub Pages
