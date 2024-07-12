# Perplex Property Order [<img src="https://s3.amazonaws.com/media-p.slid.es/uploads/467124/images/2872758/stylelint-icon-black.svg" alt="StyleLint" width="90" height="90" align="right">][stylelint]

[![npm version][npm-img]][npm-url]
[![npm downloads][npm-dls]][npm-url]
[![github issues][issues-img]][issues-url]

A heavily opinionated [Stylelint][] config that also sorts CSS declarations and properties the way [Perplex][] does.

\*With some modifications & additions for modern properties.

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
* `stylelint-config-standard`
* `stylelint-config-recommended-vue`
* `order/order` with the various [custom properties and declarations][].
* `order/properties-order` with the various [property groups][]. If you need to configure other options for this rule,
the groups can be imported separately and the rule configured to your needs.
* `stylelint-use-logical-spec`
* `stylelint-high-performance-animation`

```js
import propertyGroups from '@perplex-digital/stylelint-config/groups';

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

## References

[@mdo on CSS Property Order][mdo-order]

[npm-url]: https://www.npmjs.com/package/@perplex-digital/stylelint-config
[npm-img]: https://img.shields.io/npm/v/@perplex-digital/stylelint-config.svg?style=flat-square
[npm-dls]: https://img.shields.io/npm/dt/@perplex-digital/stylelint-config.svg?style=flat-square
[issues-url]: https://github.com/PerplexDigital/stylelint-config/issues
[issues-img]: https://img.shields.io/github/issues/PerplexDigital/stylelint-config.svg?style=flat-square
[stylelint]: https://github.com/stylelint/stylelint
[perplex]: https://perplex.nl/en
[mdo-order]: http://markdotto.com/2011/11/29/css-property-order/
[custom properties and declarations]: https://github.com/PerplexDigital/stylelint-config/blob/main/declarations.js
[property groups]: https://github.com/PerplexDigital/stylelint-config/blob/main/groups.js