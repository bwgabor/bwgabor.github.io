# bwgabor.github.io

Personal portfolio site built with Bootstrap 5 and hosted on GitHub Pages.

[![GitHub Pages](https://img.shields.io/badge/Live-bwgabor.github.io-01696f?style=flat-square&logo=github)](https://bwgabor.github.io)

---

## 🖼️ Preview

![Portfolio screenshot](assets/img/screenshot.png)

---

## 🛠️ Technologies

- [Eleventy (11ty)](https://www.11ty.dev/) – Static site generator
- [Nunjucks](https://mozilla.github.io/nunjucks/) – Templating engine
- [GitHub Actions](https://github.com/features/actions) – CI/CD, automated build & deploy
- [GitHub Pages](https://pages.github.com/) – Static hosting
- [Bootstrap 5.3](https://getbootstrap.com/) – CSS framework
- [Sass/SCSS](https://sass-lang.com/) – CSS preprocessor, compiled to `src/css/main.css`
- HTML5, CSS3, Vanilla JS

---

## 🚀 Local setup

```bash
git clone https://github.com/bwgabor/bwgabor.github.io.git
cd bwgabor.github.io
npm install
npm run dev     # local dev server with live reload
npm run build   # production build into _site/
```

---

## 📁 Project structure

```txt
bwgabor.github.io/
├── _site/            # Build output (git-ignored)
├── .github/
│ └── workflows/
│   └── deploy.yml    # CI/CD: build + deploy to GitHub Pages
├── assets/           # Images, fonts, css, js
├── src/
│ ├── _data/          # Global data files – navigation, footer (JSON)
│ ├── _includes/      # Nunjucks layouts and partials
│ ├── assets/         # Images, fonts
│ ├── css/            # Compiled CSS output
│ ├── js/             # JavaScript files
│ ├── scss/           # SCSS source files (partials: _variables, _base, _layout, _components, _nav)
│ ├── projects/       # Markdown project detail pages + collection config
│ └── index.njk       # Main page template
├── .eleventy.js      # Eleventy configuration
├── package.json
├── CHANGELOG.md
└── README.md
```


## 🧪 Test

| Category      | Goal  | Result     | Status  |
| -------------- | ---- | ---------- | ------- |
| Performance    | ≥ 90 | 92         | ✅     |
| Accessibility  | ≥ 90 | 98         | ✅     |
| Best Practices | ≥ 90 | 100        | ✅     |
| SEO            | ≥ 90 | 100        | ✅     |
---

## 📋 Changelog

See [CHANGELOG.md](CHANGELOG.md).