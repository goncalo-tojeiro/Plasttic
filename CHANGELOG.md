# v3.0.0-alpha.1 (Jun --, 2024)

- :warning: Updated: Replaced Sass style nesting with CSS native nesting
- :warning: Updated: Replaced CSS individual imports with glob import
- :warning: Updated: replaced postcss-nested with postcss-nesting
- :warning: Updated: Optimized linting
- :warning: Updated: Tests folders, scripts and configs (CI)
- :warning: Updated: Removed testing from pre-commit
- :warning: Updated: CLI watch time delay increased to 5000ms
- :warning: Updated: Browser Sync does not open new window
- :warning: Updated: typescript@5.4.5
- :warning: Updated: Jest config in vscode.settings.json
- :warning: Updated: Replaced Dependabot with Renovate for dependency updates Develop branch (maintain Dependabot for GitHub Actions on Main branch)
- :warning: Removed: Dependabot Auto Merge
- :warning: Updated: Added lock files to gitignore
- :warning: Updated: Ignore Dependabot and Renovate branches in plasttic-ci.yml
- :warning: Updated: Dependabot updates github-actions in main branch and added prefix 'main(workflow-actions)'
- :warning: Updated: Eslint fixed version 8.57.0
- :warning: Updated: Github Actions to use Node 20
- :warning: Removed: private folder
- :warning: Updated: postcss-nested to postcss-nesting

---

- Added: postcss-purgecss
- Added: Prettier rules in Stylelint
- Added: ESLint and Stylelint format on save
- Updated: VS Code Extensions
- Added: Installed Jest and Playwright
- Updated: Quick Start section README
- Added: Installed Partytown
- Added: Installed Lighthouse
- Added: Installed Unlighthouse
- Fixed: EsLint parsing error
- Updated: ESLint config and vscode.settings.jason
- Updated: Jest/Playwright workflow integration
- Added: Lighthouse script
- Updated: HTML linting
- Added: README Linting section
- Updated: Dependencies
- Added: Unlighthouse script
- Updated: Plasttic HTML Boilerplate to v1.3.3
- Updated: Plasttic CSS Reset to v3.0
- Updated: Plasttic HTML Boilerplate snippet
- Updated: Start script
- Updated: .##gitignore##
- Updated: ESLint config
- Updated: README About section
- Added: README Testing section
- Updated: robots.txt
- Fixed: dependencies security issues
- Fixed: Windows compatible CLI commands
- Added: Eslint support for Jest and Playwright
- Fixed: .dev.configs folder missing
- Updated: CSS updated to logical properties
- Updated: sitemap.xml
- Updated: print.css use logical properties
- Updated: VS Code settings (extensions)
- Added: visually-hidden utility class (.ptt-u-visually-hidden)
- Updated: TODO Tree settings
- Added: ESLint support for Node
- Added: Installed [ts-node](https://www.npmjs.com/package/ts-node)
- Updated: tsconfig (noUncheckedIndexedAccess)
- Updated: package/.gitignore
- Added: plasttic-ci github workflow (linting, testing)
- Added: system font stacks on tokens.css
- Updated: templates CSS
- Updated: Dependabot config and auto-merge workflow
- Updated: TODO Tree settings (vscode.settings.json)
- Updated: Boilerplate snippet
- Updated: CLI build script
- Updated: CLI dev script
- Updated: @font-face paths
- Added: NOTE tag to Todo tree extension
- Updated: Increased Stylelint max-nesting-depth to 4
- Updated: Stylelint at-rule line before
- Added: BrowserSync reload delay 350ms

##### IN PROGRESS:

- Testing section documentation :construction:

##### TODO:

- Review templates :construction:
- Atomic Design implementation :construction:

##### NEXT:

- Single Page template

---

# Releases:

## v2.2.1 (Jun 27, 2023)

- Updated: PostCSS config
- Added(Fix): Husky install script
- Updated: README Start
- Updated: NPM scripts

---

## v2.2.0 (Jun 26, 2023)

- Added: Zod as devDependency
- Fixed: Build CSS minification (duplicated rules)
- Added: [Stylelint Extension](https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint&ssr=false#review-details)
- Added: Stylelint config
- Updated: postcss config files
- Updated: dependencies
- Added: css lint script
- Updated: NPM scripts
- Added: Stylelint CSS [order](./docs/css.md)
- Added: css-order.json in docs
- Updated: CSS files styles order
- Updated: README
- Updated: docs files

---

## v2.1.9 (Jun 22, 2023)

- Fixed: HTML linting script
- Updated: HTML minification script

---

## v2.1.8 (Jun 22, 2023)

- Updated tsconfig
- :warning: [TS-Reset](https://github.com/total-typescript/ts-reset) by default
- Fixed ESLint parser error
- Updated Husky pre-commit hook
- :warning: Updated NPM scripts
- Added NPM lint:\* scripts
- Updated lintstaged config

---

## v2.1.7 (Jun 20, 2023)

- :warning: ESlint: Fixed error with typescript
- :warning: Updated eslint config
- :warning: Updated tsconfig
- :warning: Updated lintstaged script
- Updated package script

---

## v2.1.6 (Jun 19, 2023)

- Updated ESLint config: node support
- Updated Dependencies
- Updated Plasttic HTML boilerplate snippet
- Updated script names (lint/package)
- Fixed tsconfig error
- Fixed postcss config error
- Rewritten js/ts scripts
- Updated package script

---

## v2.1.5 (Jun 18, 2023)

- :warning: Updated package Husky hook: lint staged files only
- :warning: Updated package script: Husky hooks

---

## v2.1.4 (Jun 17, 2023)

- Updated ESLint: global config
- Updated vscode.settings.json
- :warning: Updated ESLint: config overrides for Typescript

## v2.1.3 (Jun 17, 2023)

- Updated README
- Dependencies update
- Template page: Updated `skip-to-content` link to also be the `#top` of page target
- CSS/Atoms: Updated Link/Button focus-visible/no transition
- Added postcss-merge-rules, postcss-progressive-custom-properties
- Added linting hook on staged commits with husky
- Added publish github action
- HTML: Plasttic HTML Boilerplate v1.2.3
- Updated lint-staged config
- Updated eslint config (based on [eslint-config-wesbos](https://github.com/wesbos/eslint-config-wesbos))
- Added VS Code settings file in .vscode folder
- Changed package github action to husky hook

---

## v2.1.2 (Jun 11, 2023)

- Updated README

---

## v2.1.1 (Jun 11, 2023)

- :warning: Updated npm package
- Updated README

---

## v2.1.0 (Jun 11, 2023)

- Updated npm package

---

## v2.0.8 (Jun 08, 2023)

- Updated images

## v2.0.7 (Jun 08, 2023)

- Updated README

---

## v2.0.6 (Jun 08, 2023)

- Added NPX script for quick start
- Updated README

---

## v2.0.5 (Jun 08, 2023)

- Gitignore all `test` folders

## v2.0.4 (Jun 08, 2023)

- Updated eslint config
- Updated index.html to version 1.0.2
- Added .##gitignore.## for NPM publish
- Updated description

---

## v2.0.3 (Jun 01, 2023)

---

- :warning: Removed Sass from project
- Updated PostCSS config
- NPM Scripts optimize
- Docs updates
- :warning: Changed NPM dev/build destination folders
- :warning: Renamed tokens and added prefix
- Fixed JS vendor folder NPM script
- Renamed utility and components classes
- Added postcss-discard-empty
- Dependabot setup and config
- Github Actions: auto-merge for Dependabot PRs
- Updated NPM scripts to allow https
- Added postcss-simple-vars
- :warning: Updated img folder structure
- Moved social banner to root
- :warning: Major update to CSS Reset
- Added postcss-custom-properties and @csstools/postcss-global-data
- Plasttic HTML5 boilerplate snippet
- Replaced cssnano with clean-css
- :warning: Renamed css filenames to .min.css
- Removed CSS minification on dev script
- Removed JS minification on dev script
- CSS and JS Minification only on build script
- :warning: Installed plasttic-reset CSS Reset
- Support for ES Modules
- Support for Typescript

## v1.4.5 (Dec 08, 2022)

---

- Ended support for IE11
- Improved Build HTML minify
- Added ESLint for VSCode from Wesbos/Airbnb + Vue
- Added default Focus Style in reset.css
- Added boilerplate.html
- :warning: Added postcss-nested
- Updated browserslist on package.json
- Added SVGO
- Updated reset.css
- Update in @font-face
- Deleted browserconfig.xml/mstile-150_150.png
- Updated TODO: comments
- Added .editorconfig
- Implemented Defer CSS Load
- Temporary page
- 404 page
- Added scripts for page load
- Added postcss-media-minmax and postcss-import
- WebFonts optimization
- Updated all devDependencies
- :warning: Removed Squoosh-cli

## v1.4.4 (Nov 03, 2022)

---

- Template HTML structure
- Accessibility Hidden link
- 404 page
- Private directory
- Added PostCSS and Plugins
- Implement Custom Media properties
- NPM Dev and Build scripts

## v1.4.3 (Sep 6, 2022)

---

- New name: Plasttic
- Google Analytics script update
- Social Media meta tags update
- New global prefix (ptt-)
- CSS reset and print files outside Sass folders for those who don't want to use Sass
- reset.css and print.css update
- Accessibility "jump to content" hidden link
- package.json updated
- robots.txt and sitemap.xml update
- Added theme-color meta tag
- .htaccess update
- index.html update

## v1.4.2 (Nov 20, 2021)

---

- Website info files and icons review

## v1.4.1 (Nov 19, 2021)

---

- Minor Bug Fixes

## v1.4.0 (Oct 25, 2021)

---

- Sass folder structure redesigned
- HTML/Sass/CSS boilerplate code
- Head tags reviewed and improved
- Documentation

## v1.3.1 (Oct 24, 2021)

---

- HTML/Sass/CSS boilerplate code optimization
- Project documentation update and new Sass documentation

## v1.3.0 (Sep 05, 2021)

---

- Replaced Sanitize.css with A Modern CSS Reset
- Implemented SASS Partials with a new SASS Boilerplate

## v1.2.0 (Sep 01, 2021)

---

## v1.1.0 (Aug 25, 2021)

---

## v1.0.0 (Aug 21, 2021)

---

- Start with basic HTML5 Boilerplate
