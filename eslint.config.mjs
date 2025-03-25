import { createConfigForNuxt } from '@nuxt/eslint-config/flat';

export default createConfigForNuxt({
    rules: {
        '@typescript-eslint/no-explicit-any': 'off',
    },
});
