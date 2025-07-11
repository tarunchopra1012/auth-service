import js from '@eslint/js';
import tseslint from '@typescript-eslint/eslint-plugin';
import tsparser from '@typescript-eslint/parser';

export default [
  // Base JavaScript recommended rules
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
        setTimeout: 'readonly',
        setInterval: 'readonly',
        clearTimeout: 'readonly',
        clearInterval: 'readonly',
      },
    },
    plugins: {
      '@typescript-eslint': tseslint,
    },
    rules: {
      // ================================
      // ESSENTIAL RULES ONLY
      // ================================
      '@typescript-eslint/no-unused-vars': [
        'warn',
        { 
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          caughtErrorsIgnorePattern: '^_'
        }
      ],
      '@typescript-eslint/no-explicit-any': 'warn',
      
      // ================================
      // CRITICAL ERRORS ONLY
      // ================================
      'no-unused-vars': 'off',
      'no-console': 'off',
      'no-debugger': 'error',
      'no-alert': 'error',
      'no-eval': 'error',
      'no-implied-eval': 'error',
      'no-new-func': 'error',
      'no-script-url': 'error',
      
      // ================================
      // PERFORMANCE-CRITICAL RULES
      // ================================
      'no-global-assign': 'error',
      'no-redeclare': 'error',
      'eqeqeq': ['error', 'always'],
      'prefer-const': 'warn',
      
      // ================================
      // MINIMAL STYLE RULES
      // ================================
      'semi': ['error', 'always'],
      
      // ================================
      // SECURITY RULES
      // ================================
      'no-new-require': 'error',
      'no-path-concat': 'error',
    },
  },
  
  // Global ignores
  {
    ignores: [
      'node_modules/**',
      'dist/**',
      'build/**',
      'coverage/**',
      'tests/**',
      '*.config.js',
      'jest.config.js',
      '**/*.d.ts',
      '**/*.test.ts',
      '**/*.spec.ts',
      'logs/**',
      'tmp/**',
      'temp/**',
    ],
  },
];
