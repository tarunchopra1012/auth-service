export default [
  {
    files: ['src/**/*.ts'],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'module',
      parser: await import('@typescript-eslint/parser').then(m => m.default),
      globals: {
        process: 'readonly',
        console: 'readonly',
        Buffer: 'readonly',
      },
    },
    rules: {
      'no-unused-vars': 'warn',
      'no-console': 'off',
      'no-debugger': 'error',
      'eqeqeq': 'error',
      'prefer-const': 'warn',
      'semi': ['error', 'always'],
      'no-eval': 'error',
    },
  },
  {
    ignores: ['node_modules/**', 'dist/**'],
  },
];
