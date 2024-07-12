import { createConfigForNuxt } from '@nuxt/eslint-config/flat';
import eslintConfigPrettier from 'eslint-config-prettier';
import prettierPlugin from 'eslint-plugin-prettier';

export default createConfigForNuxt(
    eslintConfigPrettier,
    {
        plugins: {
            prettier: prettierPlugin,
        },
        rules: {
            ...prettierPlugin.configs.recommended.rules,
        },
    },
    {
        rules: {
            '@typescript-eslint/no-explicit-any': 'off',
            'prettier/prettier': ['error'],
        },
    },
);
