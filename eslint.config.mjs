import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";

export default [
  {
    files: ["**/*.{js,mjs,cjs,ts}"],
    languageOptions: {
      globals: {
        ...globals.browser,
        process: "readonly",  // Set process to readonly
      },
    },
    rules: {
      "no-console": "warn",  // Set no-console rule to warn
    },

    extends: ["eslint:recommended", "plugin:@typescript-eslint/recommended", "prettier"],
    
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
];
