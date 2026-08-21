# Baseline toolchain for front-end projects

> A curated front-end tooling baseline — every config choice explained.

## Getting started

1. Create a new repository from this template and clone it.
2. Run `npm install`.
3. Install the [recommended VS Code extensions](./.vscode/extensions.json) (optional but recommended).
4. Update these files for your project:
   - `.gitignore`
   - `index.html`
   - `package.json`
   - `README.md`
   - `styles.css`

## Features

### Git

Safe commit workflow: LF normalisation, a curated ignore list, and hooks that guard against bad commits and enforce code quality on staged files.

#### Git hooks

- **Pre-commit**: guards against commits to `main` or in a detached HEAD state; runs lint-staged on staged files.
- **Post-checkout & Post-merge**: detects `package-lock.json` changes and prompts `npm ci`.

### Code quality

Every config file commented to explain each choice.

| Language | Formatter | Linter |
| --- | --- | --- |
| **Markdown** | markdownlint | markdownlint |
| **CSS** | Prettier | Stylelint |
| **JavaScript** | Prettier | ESLint |
| **Other** | Prettier | — |

When they run:

- **On save** (VS Code) — all tools auto-fix.
- **Before every commit** (lint-staged, staged files only):
  - Markdown — markdownlint auto-fixes, then fails the commit if issues remain.
  - CSS — Prettier auto-fixes formatting; Stylelint checks and fails the commit if issues exist.
  - JavaScript — Prettier auto-fixes formatting; ESLint checks and fails the commit if warnings or errors remain.
  - Other — Prettier auto-fixes formatting.
- **Manually** — `npm run format` (Prettier); `npm run lint` / `npm run lint:fix` (all linters).

### Editor

EditorConfig and VS Code settings and extensions for consistent conventions with zero per-developer setup. Prettier also reads `.editorconfig` — the two work in concert.

### Dependencies

- Automated updates via Dependabot (see [`.github/dependabot.yml`](./.github/dependabot.yml)).
- Exact version pinning: dependencies saved to `package.json` with exact versions, not semver ranges (see [`.npmrc`](./.npmrc)).
- Node LTS version pinned via [`.nvmrc`](./.nvmrc).
