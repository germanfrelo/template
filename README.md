# My Personal Front-End Starter Template

This template repository provides a foundation for building simple websites using ***my preferred*** front-end web development tools.

It's preconfigured with up-to-date tools and includes comments explaining my choices throughout the codebase.

## Features

### Git

- List of **files and directories** to be **ignored by Git** (see [`.gitignore`](./.gitignore)).[^1]
- **Line endings** of text-based files committed to the repository are automatically **normalized** (see [`.gitattributes`](./.gitattributes)).

#### Git Hooks

- **Pre-commit**: Prevents commits on the `main` branch or in a detached HEAD state.
- **Post-checkout** & **Post-merge**: Checks for `package-lock.json` changes when running `git checkout/merge/pull/switch`, and if found, prompts to run `npm ci`.

See files in [.husky](./.husky/) folder.

### Dependencies

- **Automated** dependency **updates**  with [GitHub's Dependabot version updates](https://docs.github.com/en/code-security/dependabot/dependabot-version-updates) (see [`.github/dependabot.yml`](./.github/dependabot.yml)).
- **Pinned versions**: dependencies saved to `package.json` will be configured with an exact version by default, rather than using npm's default semver range operator (see [`.npmrc`](./.npmrc)).[^2]
- [**`.nvmrc`**](./.nvmrc) with `lts/*` by default (customize it as needed)

### Formatting and Linting

#### Formatting

- [EditorConfig](https://editorconfig.org/) (see [`.editorconfig`](./.editorconfig))
- [Prettier](https://prettier.io/) (see [`.prettierignore`](./.prettierignore) and [`prettier.config.js`](./prettier.config.js))

#### Linting

- **Markdown**: [markdownlint-cli2](https://github.com/DavidAnson/markdownlint-cli2) (see [`.markdownlint-cli2.jsonc`](./.markdownlint-cli2.jsonc))
- **CSS**: [Stylelint](https://stylelint.io/) (see [`.stylelintignore`](./.stylelintignore) and [`stylelint.config.js`](./stylelint.config.js))
- **JavaScript**: [ESLint](https://eslint.org/) (see [`eslint.config.js`](./eslint.config.js))

The formatter(s) and linters used are **configured using sensible and *personal preferences***, and are **automatically run before committing** using a pre-commit Git hook with [husky](./.husky/pre-commit) and [lint-staged](https://github.com/search?q=repo%3Agermanfrelo%2Ftemplate+path%3Apackage.json+%22lint-staged%22&type=code).

### Code editor integrations

To get the most out of the tools and have a better developer experience, it is highly recommended to use the integrations with the code editors.

#### Visual Studio Code

- Recommended [extensions](./.vscode/extensions.json)
- Useful [settings](./.vscode/settings.json)

## Getting started

### Prerequisites

- [Git](https://docs.github.com/en/get-started/getting-started-with-git)
- [Node.js + npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)

### Steps

1. **Create a new repository**[^3] from this template **and clone it**[^4] to your computer.
2. **Install the dependencies** by running `npm install` in the root directory of the repository.
3. **Install the tools' integrations with your code editor** (optional, but highly recommended):
   - [Extensions for VS Code](./.vscode/extensions.json).

## Customization

Some parts should be customized for each project, while others are optional.

### Must be customized

- [`package.json`](./package.json):
  - `name`
  - `description`
  - `keywords`
  - `homepage`
  - `bugs.url`
  - `repository.url`
  - `author`
- [`README.md`](./README.md)

### May require customization

- [`package.json`](./package.json):
  - `version`
  - `private`
  - `license`
  - `type`
  - `main`
  - `dependencies`
  - `devDependencies`
  - `scripts`
  - `lint-staged`
- [`.github/dependabot.yml`](./.github/dependabot.yml)
- [`.vscode/extensions.json`](./.vscode/extensions.json)
- [`.vscode/settings.json`](./.vscode/settings.json)
- [`.gitignore`](./.gitignore)
- [`.nvmrc`](./.nvmrc)
- [`index.html`](./index.html)
- [`LICENSE`](./LICENSE)
- [`styles.css`](./styles.css)

### Doesn't require customization (probably)

- [`.husky/`](./.husky/)
- [`.editorconfig`](./.editorconfig)
- [`.gitattributes`](./.gitattributes)
- [`.npmrc`](./.npmrc)

## Contribution

Feel free to fork this template and modify it to fit your needs! I'm open to suggestions on how to improve it.

## License

[LICENSE](./LICENSE).

## References

- [Client-side web development tools (MDN)](https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Understanding_client-side_tools)

[^1]: Use [gitignore.io](http://gitignore.io).
[^2]: [Should you Pin your JavaScript Dependencies?](https://docs.renovatebot.com/dependency-pinning/) (Renovate Docs)
[^3]: [Creating a repository from a template](https://docs.github.com/en/repositories/creating-and-managing-repositories/creating-a-repository-from-a-template) (GitHub Docs)
[^4]: [Cloning a repository](https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository) (GitHub Docs)
