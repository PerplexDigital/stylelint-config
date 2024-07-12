/**
 * @typedef {Object} Group
 * @property {Array<string>} properties
 */

/** @type {Group[]} */
export default [
    {
        properties: ['all'],
    },
    {
        groupName: 'Visibility',
        properties: [
            'overflow',
            'overflow-y',
            'overflow-x',
            'overflow-block',
            'overflow-inline',
            'overflow-wrap',
            'overflow-scrolling',
            'overflow-anchor',
            'overflow-clip-margin',
            'appearance',
            'opacity',
            'visibility',
            'backface-visibility',
            'box-sizing',
            'display',
        ],
    },
    {
        groupName: 'Flexbox',
        properties: ['flex', 'flex-basis', 'flex-direction', 'flex-flow', 'flex-grow', 'flex-shrink', 'flex-wrap'],
    },
    {
        groupName: 'Grid',
        properties: [
            'grid',
            'grid-area',
            'grid-template',
            'grid-template-areas',
            'grid-template-rows',
            'grid-template-columns',
            'grid-row',
            'grid-row-start',
            'grid-row-end',
            'grid-column',
            'grid-column-start',
            'grid-column-end',
            'grid-auto-rows',
            'grid-auto-columns',
            'grid-auto-flow',
            'gap',
            'row-gap',
            'column-gap',
            'column-count',
            'column-fill',
            'column-rule',
            'column-rule-color',
            'column-rule-style',
            'column-rule-width',
            'column-span',
            'column-width',
        ],
    },
    {
        groupName: 'Layout alignment',
        properties: [
            'place-content',
            'place-items',
            'place-self',
            'align-content',
            'align-items',
            'align-self',
            'justify-content',
            'justify-items',
            'justify-self',
        ],
    },
    {
        groupName: 'Order',
        properties: ['order'],
    },
    {
        groupName: 'Box model',
        properties: [
            'float',
            'float-defer',
            'float-offset',
            'float-reference',
            'inline-size',
            'min-inline-size',
            'max-inline-size',
            'block-size',
            'min-block-size',
            'max-block-size',
            'min-intrinsic-sizing',
            'margin',
            'margin-block',
            'margin-block-start',
            'margin-block-end',
            'margin-inline',
            'margin-inline-start',
            'margin-inline-end',
            'margin-trim',
            'outline',
            'outline-width',
            'outline-style',
            'outline-color',
            'outline-offset',
            'border',
            'border-width',
            'border-style',
            'border-color',
            'border-block',
            'border-block-color',
            'border-block-start',
            'border-block-start-width',
            'border-block-start-style',
            'border-block-start-color',
            'border-block-end',
            'border-block-end-width',
            'border-block-end-style',
            'border-block-end-color',
            'border-block-style',
            'border-block-width',
            'border-inline',
            'border-inline-color',
            'border-inline-start',
            'border-inline-start-width',
            'border-inline-start-style',
            'border-inline-start-color',
            'border-inline-end',
            'border-inline-end-width',
            'border-inline-end-style',
            'border-inline-end-color',
            'border-inline-style',
            'border-inline-width',
            'border-radius',
            'border-top-left-radius',
            'border-top-right-radius',
            'border-bottom-left-radius',
            'border-bottom-right-radius',
            'border-start-end-radius',
            'border-start-start-radius',
            'border-end-end-radius',
            'border-end-start-radius',
            'border-image',
            'border-image-source',
            'border-image-slice',
            'border-image-width',
            'border-image-outset',
            'border-image-repeat',
            'padding',
            'padding-block',
            'padding-block-start',
            'padding-block-end',
            'padding-inline',
            'padding-inline-start',
            'padding-inline-end',
            'aspect-ratio',
            'overscroll-behavior',
            'overscroll-behavior-block',
            'overscroll-behavior-inline',
            'overscroll-behavior-inline',
            'overscroll-behavior-block',
            'clip',
            'clip-path',
            'clip-rule',
            'clear',
        ],
    },
    {
        groupName: 'Borders & Backgrounds',
        properties: [
            'box-shadow',
            'background',
            'background-color',
            'background-image',
            'background-repeat',
            'background-attachment',
            'background-position',
            'background-position-x',
            'background-position-y',
            'background-clip',
            'background-origin',
            'background-size',
            'background-blend-mode',
            'object-fit',
            'object-position',
            'filter',
            'mix-blend-mode',
            'isolation',
        ],
    },
    {
        groupName: 'Typography',
        properties: [
            'src',
            'content',
            'font',
            'font-family',
            'font-weight',
            'font-size',
            'font-style',
            'font-feature-settings',
            'font-kerning',
            'font-variant',
            'font-variant-ligatures',
            'font-variant-caps',
            'font-variant-alternates',
            'font-variant-numeric',
            'font-variant-east-asian',
            'font-variant-position',
            'font-size-adjust',
            'font-stretch',
            'font-effect',
            'font-emphasize',
            'font-emphasize-position',
            'font-emphasize-style',
            'font-smooth',
            'font-display',
            'font-language-override',
            'font-optical-sizing',
            'font-palette',
            'font-synthesis',
            'font-synthesis-small-caps',
            'font-synthesis-style',
            'font-synthesis-weight',
            'font-variant-emoji',
            'font-variation-settings',
            'initial-letter',
            'initial-letter-align',
            'initial-letter-wrap',
            'line-height',
            'line-height-step',
            'line-break',
            'line-clamp',
            'line-grid',
            'line-padding',
            'line-snap',
            'color',
            'text-align',
            'text-align-last',
            'text-emphasis',
            'text-emphasis-color',
            'text-emphasis-style',
            'text-emphasis-position',
            'text-decoration',
            'text-decoration-line',
            'text-decoration-thickness',
            'text-decoration-skip',
            'text-decoration-skip-ink',
            'text-decoration-style',
            'text-decoration-color',
            'text-underline-offset',
            'text-underline-position',
            'text-indent',
            'text-justify',
            'text-outline',
            'text-overflow',
            'text-overflow-ellipsis',
            'text-overflow-mode',
            'block-ellipsis',
            'text-shadow',
            'text-transform',
            'text-wrap',
            'text-size-adjust',
            'text-align-all',
            'text-combine-upright',
            'text-decoration-skip',
            'text-decoration-skip-box',
            'text-decoration-skip-ink',
            'text-decoration-skip-inset',
            'text-decoration-skip-self',
            'text-decoration-skip-spaces',
            'text-edge',
            'text-emphasis-skip',
            'text-group-align',
            'text-orientation',
            'text-space-collapse',
            'text-space-trim',
            'text-spacing',
            'letter-spacing',
            'word-break',
            'word-spacing',
            'word-wrap',
            'word-boundary-detection',
            'word-boundary-expansion',
            'hyphens',
            'hyphenate-character',
            'hyphenate-limit-chars',
            'hyphenate-limit-last',
            'hyphenate-limit-lines',
            'hyphenate-limit-zone',
            'tab-size',
            'white-space',
            'vertical-align',
            'list-style',
            'list-style-position',
            'list-style-type',
            'list-style-image',
            'counter-reset',
            'counter-increment',
            'counter-set',
        ],
    },
    {
        groupName: 'SVG Presentation Attributes',
        properties: [
            'alignment-baseline',
            'baseline-shift',
            'dominant-baseline',
            'text-anchor',
            'word-spacing',
            'writing-mode',
            'fill',
            'fill-opacity',
            'fill-rule',
            'fill-break',
            'fill-color',
            'fill-image',
            'fill-origin',
            'fill-position',
            'fill-repeat',
            'fill-size',
            'stroke',
            'stroke-dasharray',
            'stroke-dashoffset',
            'stroke-linecap',
            'stroke-linejoin',
            'stroke-miterlimit',
            'stroke-opacity',
            'stroke-width',
            'stroke-align',
            'stroke-alignment',
            'stroke-break',
            'stroke-color',
            'stroke-dash-corner',
            'stroke-dash-justify',
            'stroke-dashadjust',
            'stroke-dashcorner',
            'stroke-image',
            'stroke-origin',
            'stroke-position',
            'stroke-repeat',
            'stroke-size',
            'color-interpolation',
            'color-interpolation-filters',
            'color-profile',
            'color-rendering',
            'color-adjust',
            'color-scheme',
            'flood-color',
            'flood-opacity',
            'image-rendering',
            'image-orientation',
            'image-resolution',
            'lighting-color',
            'marker',
            'marker-start',
            'marker-mid',
            'marker-end',
            'marker-knockout-left',
            'marker-knockout-right',
            'marker-pattern',
            'marker-segment',
            'marker-side',
            'mask',
            'mask-border',
            'mask-border-mode',
            'mask-border-outset',
            'mask-border-repeat',
            'mask-border-slice',
            'mask-border-source',
            'mask-border-width',
            'mask-clip',
            'mask-composite',
            'mask-image',
            'mask-mode',
            'mask-origin',
            'mask-position',
            'mask-repeat',
            'mask-size',
            'mask-type',
            'shape-rendering',
            'shape-image-threshold',
            'shape-inside',
            'shape-margin',
            'shape-outside',
            'stop-color',
            'stop-opacity',
        ],
    },
    {
        groupName: 'Accessibility & Interactions',
        properties: [
            'pointer-events',
            'touch-action',
            'cursor',
            'zoom',
            'table-layout',
            'empty-cells',
            'caption-side',
            'border-spacing',
            'border-collapse',
            'quotes',
            'resize',
            'user-select',
            'nav-index',
            'nav-up',
            'nav-right',
            'nav-down',
            'nav-left',
            'scroll-behavior',
            'scroll-margin',
            'scroll-margin-block',
            'scroll-margin-block-end',
            'scroll-margin-block-start',
            'scroll-margin-bottom',
            'scroll-margin-inline',
            'scroll-margin-inline-end',
            'scroll-margin-inline-start',
            'scroll-margin-left',
            'scroll-margin-right',
            'scroll-margin-top',
            'scroll-padding',
            'scroll-padding-block',
            'scroll-padding-block-end',
            'scroll-padding-block-start',
            'scroll-padding-bottom',
            'scroll-padding-inline',
            'scroll-padding-inline-end',
            'scroll-padding-inline-start',
            'scroll-padding-left',
            'scroll-padding-right',
            'scroll-padding-top',
            'scroll-snap-align',
            'scroll-snap-stop',
            'scroll-snap-type',
            'scrollbar-color',
            'scrollbar-gutter',
            'scrollbar-width',
            'speak',
            'speak-as',
            'speak-header',
            'speak-numeral',
            'speak-punctuation',
            'speech-rate',
            'voice-balance',
            'voice-duration',
            'voice-family',
            'voice-pitch',
            'voice-range',
            'voice-rate',
            'voice-stress',
            'voice-volume',
            'pitch',
            'pitch-range',
            'volume',
            'play-during',
            'pause',
            'pause-after',
            'pause-before',
        ],
    },
    {
        groupName: 'Positioning',
        properties: [
            'position',
            'inset',
            'inset-block',
            'inset-block-start',
            'inset-block-end',
            'inset-inline',
            'inset-inline-start',
            'inset-inline-end',
            'anchor-name',
            'anchor-scope',
            'position-anchor',
            'position-area',
            'position-fallback',
            'position-fallbacks',
            'position-try',
            'position-try-fallbacks',
            'position-visibility',
            'z-index',
        ],
    },
    {
        groupName: 'Transforms',
        properties: [
            'rotate',
            'scale',
            'translate',
            'transform',
            'transform-origin',
            'transform-box',
            'transform-style',
            'offset',
            'offset-anchor',
            'offset-distance',
            'offset-path',
            'offset-position',
            'offset-rotate',
        ],
    },
    {
        groupName: 'Transitions & Animation',
        properties: [
            'transition',
            'transition-delay',
            'transition-timing-function',
            'transition-duration',
            'transition-property',
            'animation',
            'animation-name',
            'animation-duration',
            'animation-play-state',
            'animation-timing-function',
            'animation-delay',
            'animation-iteration-count',
            'animation-direction',
            'animation-fill-mode',
            'animation-composition',
            'animation-range',
            'animation-range-end',
            'animation-range-start',
            'animation-timeline',
            'will-change',
        ],
    },
    {
        groupName: 'Misc',
        properties: [
            'accent-color',
            'azimuth',
            'baseline-source',
            'block-step',
            'block-step-align',
            'block-step-insert',
            'block-step-round',
            'block-step-size',
            'bookmark-label',
            'bookmark-level',
            'bookmark-state',
            'border-boundary',
            'box-decoration-break',
            'box-snap',
            'break-after',
            'break-before',
            'break-inside',
            'caret',
            'caret-color',
            'caret-shape',
            'chains',
            'columns',
            'contain',
            'contain-intrinsic-block-size',
            'contain-intrinsic-height',
            'contain-intrinsic-inline-size',
            'contain-intrinsic-size',
            'contain-intrinsic-width',
            'content-visibility',
            'continue',
            'cue',
            'cue-after',
            'cue-before',
            'direction',
            'elevation',
            'flow',
            'flow-from',
            'flow-into',
            'footnote-display',
            'footnote-policy',
            'forced-color-adjust',
            'glyph-orientation-vertical',
            'hanging-punctuation',
            'leading-trim',
            'max-lines',
            'orphans',
            'page',
            'page-break-after',
            'page-break-before',
            'page-break-inside',
            'perspective',
            'perspective-origin',
            'print-color-adjust',
            'region-fragment',
            'rest',
            'rest-after',
            'rest-before',
            'richness',
            'ruby-align',
            'ruby-merge',
            'ruby-overhang',
            'ruby-position',
            'running',
            'spatial-navigation-action',
            'spatial-navigation-contain',
            'spatial-navigation-function',
            'stress',
            'string-set',
            'unicode-bidi',
            'widows',
            'wrap-after',
            'wrap-before',
            'wrap-flow',
            'wrap-inside',
            'wrap-through',
        ],
    },
];
