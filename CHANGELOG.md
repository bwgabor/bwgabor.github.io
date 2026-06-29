# Changelog

All notable changes to this project will be documented here.

## [Unreleased]

## [1.1.0] - 2026-06-29

### Added
- Bootstrap 5.3.x self-hosted: `bootstrap.min.css` and `bootstrap.bundle.min.js` moved to `assets/css` and `assets/js`
- Google Fonts self-hosted: WOFF2 font files downloaded to `assets/fonts/`, `@font-face` rules in `style.css`
- External `assets/css/style.css` created for all custom styles
- Bootstrap navbar with collapse behaviour replacing custom navigation
- `scroll-margin-top` offset on `section[id]` elements to compensate for sticky navbar height
- JavaScript snippet to auto-close navbar collapse on nav link click (single-page anchor navigation)

### Changed
- All CDN `<link>` and `<script>` references replaced with local paths
- Inline `<style>` block removed from `index.html`
- Navigation HTML rewritten to Bootstrap-conformant structure (`navbar`, `navbar-expand-lg`, `nav-link`, `active` + `aria-current`)

### Removed
- External CDN dependencies (Bootstrap, Google Fonts)
- Inline `<style>` block from `index.html`

## [1.0.0] - 2026-06-28

### Added
- Bootstrap 5 boilerplate with CDN integration
- Responsive navbar, hero section, about, skills, projects, contact
- GitHub Pages deployment via main branch
- Initial README and project documentation