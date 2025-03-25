export default [
    [
        'custom-properties',
        {
            type: 'at-rule',
            name: 'apply',
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
            selector: '^&:(open|popover-open|modal|fullscreen|picture-in-picture)',
            // Matches element display state pseudo-classes
        },
        {
            type: 'rule',
            selector:
                '^&:(enabled|disabled|read-only|read-write|placeholder-shown|autofill|default|checked|indeterminate|blank|valid|invalid|range|required|optional|user-valid|user-invalid)',
            // Matches input pseudo-classes
        },
        {
            type: 'rule',
            selector: '^&:(dir|lang)',
            // Matches linguistic pseudo-classes
        },
        {
            type: 'rule',
            selector: '^&:(any-link|link|visited|local-link|target|target-within|scope)',
            // Matches location pseudo-classes
        },
        {
            type: 'rule',
            selector: '^&:(playing|paused|seeking|stalled|muted|volume-locked)',
            // Matches resource state pseudo-classes
        },
        {
            type: 'rule',
            selector: '^&:(current|past|future)',
            // Matches time-dimensional pseudo-classes
        },
        {
            type: 'rule',
            selector: '^&:(hover|active|focus|focus-visible|focus-within)',
            // Matches user-action pseudo-classes
        },
        {
            type: 'at-rule',
            name: 'variant',
            parameter: '(hover|focus|hoverfocus|mouse|touch)',
            // Matches media-queries '@variant hoverfocus', '@variant mouse' and '@variant touch'
            hasBlock: true,
        },
        {
            type: 'rule',
            selector: '^&((\\.|\\[)|(.*(empty|child|type|is|not|where|has|state)).*)',
            // Matches modifiers like '&.example' and tree-structural, functional, custom state pseudo-classes
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
            name: 'variant',
            parameter: '(?!hover|focus|hoverfocus|mouse|touch)',
            // Matches all other media-queries like '@variant xl' and '@variant motionOK'
            hasBlock: true,
        },
        {
            type: 'at-rule',
            name: 'media',
            // Matches all other media-queries like '@media (width > 1472px)'
            hasBlock: true,
        },
    ],
    {
        unspecified: 'ignore',
    },
];
