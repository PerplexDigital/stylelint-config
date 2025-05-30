import declarations from './declarations.js';
import propertyGroups from './groups.js';

const config = {
    extends: ['stylelint-config-standard', 'stylelint-config-recommended-vue'],
    plugins: [
        '@stylistic/stylelint-plugin',
        'stylelint-order',
        'stylelint-use-logical-spec',
        'stylelint-high-performance-animation',
    ],
    ignoreFiles: ['*.min.css', 'wwwroot/css/*.css'],
    rules: {
        'at-rule-empty-line-before': [
            'always',
            {
                except: ['blockless-after-same-name-blockless', 'first-nested'],
                ignore: ['after-comment'],
                ignoreAtRules: ['else'],
            },
        ],
        'at-rule-no-unknown': null,
        'color-no-hex': true,
        'comment-empty-line-before': null,
        'custom-media-pattern': null,
        'custom-property-pattern': null,
        'declaration-block-no-redundant-longhand-properties': [
            true,
            {
                ignoreShorthands: ['grid-template', 'flex', 'flex-flow'],
            },
        ],
        'declaration-empty-line-before': 'never',
        'font-weight-notation': [
            'numeric',
            {
                ignore: ['relative'],
            },
        ],
        'function-no-unknown': null,
        'import-notation': 'string',
        'no-descending-specificity': null,
        'no-duplicate-selectors': true,
        'no-empty-source': [
            true,
            {
                severity: 'warning',
            },
        ],
        'number-max-precision': null,
        'selector-class-pattern': null,
        'selector-pseudo-class-no-unknown': [
            true,
            {
                ignorePseudoClasses: ['global', 'deep'],
            },
        ],
        // Plugin rules
        'liberty/use-logical-spec': ['always', { except: [/width/i, /height/i] }],
        '@stylistic/block-closing-brace-newline-before': 'always',
        '@stylistic/block-opening-brace-newline-after': 'always',
        '@stylistic/declaration-block-semicolon-newline-after': 'always',
        'order/order': declarations,
        'order/properties-order': propertyGroups,
        'plugin/no-low-performance-animation-properties': [
            true,
            {
                ignore: 'paint-properties',
                severity: 'warning',
            },
        ],
    },
};

export default config;
