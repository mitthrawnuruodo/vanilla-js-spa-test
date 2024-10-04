// @ts-nocheck:
import globals from "globals";
import js from '@eslint/js';

export default [
  js.configs.recommended,
  {
    languageOptions: {
      ecmaVersion: 'latest', // Add or update this line
      sourceType: 'module',  // Ensure this is set
 
      globals: {
        ...globals.browser,
        ...globals.jest,
      },
    },
  },
];
