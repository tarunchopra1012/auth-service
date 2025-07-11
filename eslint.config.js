import js from '@eslint/js';
import tseslint from '@typescript-eslint/eslint-plugin';
import tsparser from '@typescript-eslint/parser';

export default [
  // Apply to all JavaScript/TypeScript files
  {
    files: ['**/*.{js,mjs,cjs,ts}'],
    ...js.configs.recommended,
  },
  // TypeScript-specific configuration
  {
    files: ['src/**/*.ts'],
    languageOptions: {
      parser: tsparser,
      ecmaVersion: 2022,
      sourceType: 'module',
      globals: {
        // Node.js globals
        process: 'readonly',
        console: 'readonly',
        Buffer: 'readonly',
        __dirname: 'readonly',
        __filename: 'readonly',
        global: 'readonly',
        module: 'readonly',
        require: 'readonly',
        exports: 'readonly',
      },
    },
    plugins: {
      '@typescript-eslint': tseslint,
    },
    rules: {
      '@typescript-eslint/no-unused-vars': 'warn',
      '@typescript-eslint/no-explicit-any': 'warn',
      'no-unused-vars': 'off', // Turn off base rule
      'no-undef': 'error',
      'no-console': 'off', // Allow console in development
    },
  },
  // Global ignores (this replaces .eslintignore)
  {
    ignores: [
      'node_modules/**',
      'dist/**',
      'build/**',
      'coverage/**',
      '*.config.js',
      'jest.config.js',
      '.eslintrc.js',
      '**/*.d.ts',
      'logs/**',
      'tmp/**',
      'temp/**',
    ],
  },
];
