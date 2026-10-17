---
status: accepted
date: 2026-10-17
decision-makers: Engineering
consulted: Development Team
informed: Contributors
---

# Multi-Layer Code Formatting and Linting Architecture

## Context and Problem Statement

Code formatting and linting are essential for maintaining code quality, reducing cognitive load during reviews, and preventing diff noise across version control history.
However, contributor environments vary significantly across a project: developers use diverse editors (such as Visual Studio Code, Neovim, or JetBrains IDEs), alternative Git clients (terminal CLI, desktop GUI applications, or web-based editors), and may intentionally or inadvertently bypass local checks.

Relying on a single mechanism—such as editor workspace settings or local Git hooks—fails to guarantee code consistency, leading to unformatted code reaching protected branches or intrusive workspace configurations that conflict with local developer preferences.
How should a project partition formatting and linting responsibilities across the development lifecycle to achieve unbreakable repository standards without degrading developer ergonomics?

## Decision Drivers

- **Unbreakable repository standards**: No improperly formatted or unlinted code may ever reach production or protected branches.
- **Non-intrusive developer experience**: The project must not enforce intrusive editor-specific configurations that break when unsupported file types are opened.
- **Zero-bypass reliability**: Code quality checks must withstand local hook bypasses (`git commit --no-verify`), GUI client path failures, or direct web commits.
- **Fast feedback loops**: Developers should receive immediate formatting assistance locally during editing rather than waiting for remote CI failures.
- **Toolchain portability**: Tooling must run deterministically across all operating systems and developer environments.

## Considered Options

- **Option 1: Editor-only configuration** (IDE workspace settings and format-on-save)
- **Option 2: Git hook-only enforcement** (Local pre-commit hooks via Husky and lint-staged)
- **Option 3: CI pipeline-only enforcement** (Remote verification on Pull Requests via CI runners)
- **Option 4: Three-layer defense-in-depth architecture** (Voluntary Editor DX + Local Git Hook Guardrail + Authoritative CI Gate)

## Decision Outcome

Chosen option: "Option 4: Three-layer defense-in-depth architecture", because it cleanly separates ergonomics from enforcement:

1. **Layer 1 (Editor)** provides optional, immediate local feedback without intrusive blanket overrides.
2. **Layer 2 (Git Hook)** acts as a local guardrail that automatically formats staged changes to save developer time.
3. **Layer 3 (CI Pipeline)** serves as the sole authoritative, unbypassable gatekeeper that guarantees repository standards before code is merged.

### Consequences

- Good, because repository code formatting is guaranteed by CI regardless of what editor, Git client, or flags a contributor uses.
- Good, because workspace IDE configuration remains lean and non-intrusive, avoiding universal formatter overrides that break unsupported file types.
- Good, because local pre-commit hooks automatically format staged code before commits are finalized, preventing unnecessary CI turnaround delays.
- Good, because contributors using non-standard editors are fully supported as long as their committed code passes CI.
- Bad, because maintaining three separate layers introduces a slight increase in initial repository setup complexity across IDE configs, Git hook managers, and CI workflows.
- Neutral, because developers must install project dependencies (`npm install`) for local Git hooks to execute automatically.

### Confirmation

- A GitHub Actions workflow runs the project's formatting verification command (`npm run format:check` / `prettier --check .`) on every push and pull request.
- Branch protection rules on the primary branch strictly require the CI format-check job to pass before merging is permitted.
- Local Git hooks execute `lint-staged` on staged files during `git commit`, re-formatting files automatically before finalizing the commit object.

## Pros and Cons of the Options

### Option 1: Editor-only configuration

Configures workspace-level settings (such as `.vscode/settings.json`) with `editor.formatOnSave` and default formatters.

- Good, because it provides instantaneous feedback and auto-formatting directly inside the editor on save.
- Bad, because it is purely voluntary; it does not execute for contributors using alternative editors (Neovim, JetBrains, Zed).
- Bad, because defining universal formatters at the root of workspace settings can break saving on unsupported language files.
- Bad, because it provides zero repository-level enforcement; unformatted code can be committed trivially via CLI or other tools.

### Option 2: Git hook-only enforcement

Installs local Git pre-commit hooks (via tools like Husky and lint-staged) that re-format staged files before committing.

- Good, because it intercepts commits locally and automatically formats code without requiring specific editor extensions.
- Good, because it only processes staged files, keeping execution times fast.
- Bad, because it is easily bypassed via `git commit --no-verify` or `-n`.
- Bad, because hooks are not initialized if a contributor clones without installing dependencies.
- Bad, because GUI Git clients and web-based commits often fail to execute or bypass local hook scripts.

### Option 3: CI pipeline-only enforcement

Runs formatting and linting verification exclusively inside a remote CI pipeline (such as GitHub Actions).

- Good, because it is completely unbypassable; branch protection ensures unformatted code cannot be merged into protected branches.
- Good, because it does not depend on local contributor environments or installed extensions.
- Bad, because feedback is slow; developers only learn of formatting discrepancies after pushing commits and waiting for remote runners.
- Bad, because fixing formatting failures in CI requires creating extra fix-up commits and re-pushing.

### Option 4: Three-layer defense-in-depth architecture

Combines voluntary editor configuration for immediate developer feedback, local pre-commit hooks for automatic pre-commit normalization, and an authoritative CI pipeline for unbypassable merge validation.

- Good, because each layer serves its ideal purpose: Layer 1 optimizes speed, Layer 2 automates local hygiene, and Layer 3 guarantees integrity.
- Good, because formatting conflicts are silently resolved at Layer 2 before reaching Layer 3.
- Good, because even if Layer 1 and Layer 2 are skipped or bypassed, Layer 3 prevents improper code from merging.
- Bad, because it requires configuring and maintaining three distinct tool definitions.

## More Information

### Architectural Layer Summary

| Layer | Environment | Mechanism | Primary Responsibility | Enforceability |
| :--- | :--- | :--- | :--- | :--- |
| **1. Editor** | Local IDE / Workspace | Workspace settings (`.vscode/settings.json`) | Fast developer feedback and format-on-save | Voluntary (easily bypassed or ignored) |
| **2. Git Hook** | Local Git lifecycle | Pre-commit hook (`husky` + `lint-staged`) | Local guardrail; automatically formats staged changes | Semi-enforced (bypassed via `--no-verify` or GUI) |
| **3. CI Pipeline** | Remote CI Runner | Automated workflow (`.github/workflows/`) | Authoritative gatekeeper; verifies formatting compliance | Absolute (unbypassable; blocks merge) |

### Implementation Best Practices

1. **Avoid Universal Root Formatters in Workspace Settings**:
   Never declare a universal formatter (such as Prettier) at the root level of workspace configuration files, as this forces the formatter onto unsupported languages and causes save errors. Instead, configure formatters specifically per language or rely on the local pre-commit hook.
2. **Keep Pre-Commit Automated**:
   Configure `lint-staged` to run formatters with auto-write flags (e.g., `prettier --write --ignore-unknown`) so that local formatting variations between contributors are normalized seamlessly without blocking commits.
3. **Keep CI Strictly Verifying**:
   Configure CI workflows to run verification commands only (e.g., `prettier --check .` or `npm run format:check`). CI should never attempt to write or auto-commit formatting fixes; it must remain a strict gatekeeper that validates compliance.
