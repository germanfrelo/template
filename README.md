# Baseline toolchain for front-end projects

> A curated front-end tooling baseline — designed for zero-drift environmental integrity and engineering excellence.

TODO: **Guardrails on every commit** — Prettier formatting is enforced on staged files via Husky + lint-staged; post-checkout and post-merge hooks warn when `package-lock.json` changes and prompt to run `npm ci`.

## Philosophy

Most projects suffer from "environmental drift"—where a developer's local state differs from the repository's truth. This baseline eliminates that risk through hardened quality gates, deterministic dependency management, and state-aware automation. Every configuration choice is documented to explain the *why* behind the *what*.

## Features

### Environmental Integrity

We treat the developer's local environment as a critical part of the CI/CD pipeline.

- Deterministic Dependencies: Enforced via .npmrc (version pinning) and .nvmrc (runtime consistency) to ensure "works on my machine" is a guarantee, not a hope.
- Integrity Gates: Automated checks in post-merge and post-checkout hooks detect package-lock.json shifts, providing immediate feedback to keep local node_modules in sync.
- Cross-Platform Safety: Tooling is designed to be robust across macOS, Linux, and Windows environments.

### Safe-Commit Workflow

A multi-layered defense system that guards the repository's main branch.

- Context-Aware Hooks: Prevents common accidents like committing in a detached HEAD state or accidentally pushing to protected branches.
- Atomic Quality Checks: Uses lint-staged to run ESLint, Stylelint, and Prettier only on changed files, ensuring high code quality without sacrificing development speed.
- Automatic Normalization: Comprehensive .gitattributes configuration ensures consistent line endings and excludes build-tool noise from GitHub language statistics.

### Design & Code Quality

 Zero-config consistency across editors and environments.

- Synchronized Formatting: EditorConfig, Prettier, and Linters work in concert to enforce a unified style guide automatically on save and before every commit.
- Documented Standards: Every tool configuration (ESLint, Stylelint, etc.) is commented to explain the trade-offs and decisions made.

| Language | Formatter | Linter |
| --- | --- | --- |
| **Markdown** | markdownlint | markdownlint |
| **CSS** | Prettier | Stylelint |
| **JavaScript** | Prettier | ESLint |
| **Other** | Prettier | — |

## Getting started

1. Create a new repository from this template and clone it.
2. Run `npm install`.
3. Install the [recommended VS Code extensions](./.vscode/extensions.json) (optional but recommended).
4. Update project-specific files (`README.md`, `package.json`, etc.).

## Professional Automation

- **Pre-commit**: Guards against commits to the default branch or in a detached `HEAD` state; runs `lint-staged` on staged files.
- **Post-checkout & Post-merge**: Uses industry-standard dependency tracking to alert you when your environment needs a sync (`npm ci`).
- **Dependabot:** Automated dependency updates via [`.github/dependabot.yml`](./.github/dependabot.yml).
