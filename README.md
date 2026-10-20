# Perplex CSS Order & Property Sorter [<img src="https://s3.amazonaws.com/media-p.slid.es/uploads/467124/images/2872758/stylelint-icon-black.svg" alt="StyleLint" width="90" height="90" align="right">][stylelint]

[![npm version][npm-img]][npm-url]
[![npm downloads][npm-dls]][npm-url]
[![github issues][issues-img]][issues-url]

🗂️ A heavily opinionated [Stylelint][] config that:

- Supports linting `.vue` files
- Orders CSS the way [Perplex][] does
    - Supports Tailwind 4 directives like `@apply` and `@variant`
- Sorts CSS properties the way [Concentric-CSS][] did but with:
    - 'Box sizing' and 'Overflow' modules above the 'Box model - Margin' module
    - `outline` grouped with the 'Borders' module
    - 'Backgrounds and box-shadow' module below the 'Box model - Padding' module
    - 'Positioning' and 'Anchor positioning' modules above the 'Transforms' module

## Usage

1.  Add [stylelint][] and this package to your project:
    ```sh
    pnpm add stylelint @perplex-digital/stylelint-config
    ```
2.  Configure your stylelint configuration file to extend this package:
    ```js
    export default {
        extends: ['@perplex-digital/stylelint-config'],
        rules: {
            // Add overrides and additional rules here
        },
    };
    ```

## Advanced

The default setup applies these rules:

- `stylelint-config-standard`
- `@dreamsicle.io/stylelint-config-tailwindcss`
- `stylelint-config-recommended-vue` (including `stylelint-config-recommended` and `stylelint-config-html`)
- `@stylistic/stylelint-plugin`,
- `stylelint-use-logical`
- `stylelint-high-performance-animation`
- [Some overrides][] of these rules
- `order/order` with the [Perplex][] order.
- `order/properties-order` with the various [property groups][]. If you need to configure other options for this rule,
  the groups can be imported separately and the rule configured to your needs.

```js
import propertyGroups from '@perplex-digital/stylelint-config/property-groups';

export default {
    extends: [], // Do not extend the config here.
    rules: {
        // Configure the rule manually.
        'order/properties-order': propertyGroups.map((group) => ({
            ...group,
            emptyLineBefore: 'always',
            noEmptyLineBetween: true,
        })),
    },
};
```

## Releasing

Releases are automated with [Changesets](https://github.com/changesets/changesets) and GitHub Actions.

1. Create a branch from `develop` and make your changes. Commit messages must follow [Conventional Commits](https://www.conventionalcommits.org/) (enforced by commitlint).
2. Add a changeset for every user-facing change:
    ```sh
    pnpm changeset
    ```
    Pick the bump type (`patch`, `minor`, `major`) and write a short summary; it ends up in the changelog and release notes. Commit the generated `.changeset/*.md` file. A pre-commit hook blocks commits that touch `src/` without a new changeset.
3. Open a pull request into `develop`. CI runs `pnpm lint` and `pnpm test`.
4. When ready to release, create a `release/vX.Y.Z` branch from `develop` and open a pull request into `main`. After merging, the release workflow opens (or updates) a **"Publish release"** PR that bumps the version and updates `CHANGELOG.md`.
5. Merge the "Publish release" PR. The workflow then publishes to npm, pushes the git tag and creates a [GitHub release](https://github.com/PerplexDigital/stylelint-config/releases) with the changelog as release notes.
6. The workflow automatically merges `main` back into `develop` so it has the version bump and changelog.

Publishing requires the `NPM_TOKEN` repository secret.

## References

[@mdo on CSS Property Order][mdo-order]

[npm-url]: https://www.npmjs.com/package/@perplex-digital/stylelint-config
[npm-img]: https://img.shields.io/npm/v/@perplex-digital/stylelint-config.svg?style=flat-square
[npm-dls]: https://img.shields.io/npm/dt/@perplex-digital/stylelint-config.svg?style=flat-square
[issues-url]: https://github.com/PerplexDigital/stylelint-config/issues
[issues-img]: https://img.shields.io/github/issues/PerplexDigital/stylelint-config.svg?style=flat-square
[stylelint]: https://github.com/stylelint/stylelint
[stylelint-order]: https://github.com/hudochenkov/stylelint-order
[concentric-css]: https://github.com/brandon-rhodes/Concentric-CSS/
[some overrides]: https://github.com/PerplexDigital/stylelint-config/blob/main/src/index.js
[perplex]: https://github.com/PerplexDigital/stylelint-config/blob/main/src/order.js
[property groups]: https://github.com/PerplexDigital/stylelint-config/blob/main/src/property-groups.js
[mdo-order]: https://markdotto.com/blog/css-property-order/
