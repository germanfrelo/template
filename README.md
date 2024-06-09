# My Personal Vanilla Front-end Starter Template

This template repository serves as my foundation for building simple vanilla front-end websites using HTML, CSS, and JavaScript. It reflects my preferred development setup, which includes preconfigured tools and configuration files.

## Getting started

1. [Create](https://docs.github.com/en/repositories/creating-and-managing-repositories/creating-a-repository-from-a-template) a new repository from this template and [clone](https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository) it .
2. Install the dependencies with `npm install` (prerequisites: [Node.js + npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)).
3. If using [VS Code](https://code.visualstudio.com/): install [the recommended extensions for this repository](./.vscode/extensions.json). For more info, see "[Managing extensions in VS Code](https://code.visualstudio.com/docs/editor/extension-marketplace#_workspace-recommended-extensions)".

## Customization

### _Must_ be customized

-   `README.md`
-   `package.json`:
    -   `name`
    -   `description`
    -   `keywords`
    -   `homepage`
    -   `bugs.url`
    -   `repository.url`
-   `index.html`
-   `styles.css`

### _May need_ to be customized

-   `package.json`:
    -   `version`
    -   `private`
    -   `license`
    -   `author`
    -   `type`
    -   `main`
    -   `dependencies`
    -   `devDependencies`
    -   `scripts`
    -   `lint-staged`
-   `.gitignore` (use [gitignore.io](http://gitignore.io))
-   `.github/dependabot.yml`
-   `.vscode/extensions.json`
-   `.vscode/settings.json`
-   `LICENSE`
-   Files ignored by formatters and linters (often the project output directory)

### _Don't need_ to be customized (probably)

-   `.husky/`
-   `.editorconfig`
-   `.gitattributes`
-   `.npmrc`
