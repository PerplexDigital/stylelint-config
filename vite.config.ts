import { defineConfig } from 'vite-plus';

export default defineConfig({
    staged: {
        '*': 'vp check --fix',
        'package.json': 'vp fmt',
    },
    lint: {
        ignorePatterns: ['*.min.js'],
        plugins: ['typescript'],
        rules: {
            'typescript/no-explicit-any': 'error',
        },
        options: {
            typeAware: true,
            typeCheck: true,
        },
    },
    fmt: {
        ignorePatterns: ['*.min.*'],
        printWidth: 120,
        singleQuote: true,
        singleAttributePerLine: true,
        sortImports: {
            newlinesBetween: false,
        },
        sortTailwindcss: {},
        tabWidth: 4,
        overrides: [
            {
                files: ['*.yml', '*.yaml'],
                options: {
                    tabWidth: 2,
                },
            },
        ],
    },
});
