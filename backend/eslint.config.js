import js from '@eslint/js';
import prettier from 'eslint-config-prettier';
import globals from 'globals';

export default [
  js.configs.recommended,
  {
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        ...globals.node, // to allow node.js globals (console, process etc.)
      },
    },
    rules: {
      'no-unused-vars': 'error',
      'no-console': 'off', // need logs for debugging
      'no-irregular-whitespace': 'error',
    },
  },
  prettier,
];
