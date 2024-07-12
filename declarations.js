export default [
    [
        'custom-properties',
        {
            type: 'at-rule',
            name: 'extend',
        },
        {
            type: 'at-rule',
            name: 'mixin',
            hasBlock: false,
        },
        'declarations',
        {
            type: 'rule',
            selector: '^&::(?!before|after)',
            // Matches pseudo-elements like '&::placeholder' but not '&::before' and '&::after'
        },
        {
            type: 'rule',
            selector: '^&::before',
            // Matches pseudo-element '&::before'
        },
        {
            type: 'rule',
            selector: '^&::after',
            // Matches pseudo-element '&::after'
        },
        {
            type: 'rule',
            selector: '^\\*',
            // Matches universal selector '*'
        },
        {
            type: 'rule',
            selector: '^[^&\\+~]*[^:&]$',
            // Matches child-elements like '.example'
        },
        {
            type: 'rule',
            selector: '^\\+',
            // Matches elements that are placed immediately after, like '+ .example'
        },
        {
            type: 'rule',
            selector: '^~',
            // Matches elements that are placed somewhere after, like '~ .example'
        },
        {
            type: 'rule',
            selector: '^&:(fullscreen|modal|picture-in-picture)',
            // Matches element display state pseudo-classes
        },
        {
            type: 'rule',
            selector:
                '^&:(autofill|enabled|disabled|read|placeholder-shown|default|checked|indeterminate|blank|valid|range|required|optional)',
            // Matches input pseudo-classes
        },
        {
            type: 'rule',
            selector: '^&:(dir|lang)',
            // Matches linguistic pseudo-classes
        },
        {
            type: 'rule',
            selector: '^&:(link|visited|target|scope)',
            // Matches location pseudo-classes
        },
        {
            type: 'rule',
            selector: '^&:(playing|paused)',
            // Matches resource state pseudo-classes
        },
        {
            type: 'rule',
            selector: '^&:(current|past|future)',
            // Matches time-dimensional pseudo-classes
        },
        {
            type: 'rule',
            selector: '^&:(hover|active|focus)',
            // Matches user-action pseudo-classes
        },
        {
            type: 'at-rule',
            name: 'media',
            parameter: '--(mouse|touch)',
            // Matches media-queries '@media (--mouse) and '@media (--touch)'
            hasBlock: true,
        },
        {
            type: 'rule',
            selector: '^&((\\.|\\[)|(.*(empty|child|type|is|not|where|has)).*)',
            // Matches modifiers like '&.example', tree-structural pseudo-classes and functional pseudo-classes
        },
        {
            type: 'rule',
            selector: '&$',
            // Matches parent-modifiers like '.example &'
        },
        {
            type: 'at-rule',
            name: 'keyframes',
        },
        {
            type: 'at-rule',
            name: 'media',
            parameter: '--(?!mouse|touch)',
            // Matches all other media-queries like '@media (--xl-up)'
            hasBlock: true,
        },
    ],
    {
        unspecified: 'ignore',
    },
];
