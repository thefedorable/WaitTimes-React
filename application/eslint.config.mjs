import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";
import globals from "globals";
import pluginJs from "@eslint/js";
import pluginReact from "eslint-plugin-react";
import pluginReactHooks from "eslint-plugin-react-hooks";
import pluginJsdoc from "eslint-plugin-jsdoc";
import pluginTypeScript from "@typescript-eslint/eslint-plugin";
import parserTypeScript from "@typescript-eslint/parser";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const config = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  // Base JS configuration
  pluginJs.configs.recommended,
  // React configuration
  pluginReact.configs.flat.recommended,
  {
    settings: {
      react: {
        version: "detect",
      },
    },
  },
  // TypeScript configuration without "extends"
  {
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      parser: parserTypeScript,
      parserOptions: {
        project: "./tsconfig.eslint.json",
        ecmaVersion: "latest",
        sourceType: "module",
      },
    },
    ignores: ["dist/*"],
    plugins: {
      "@typescript-eslint": pluginTypeScript,
    },
    rules: {
      ...pluginTypeScript.configs.recommended.rules, // Include recommended rules directly
      "@typescript-eslint/no-non-null-assertion": "off", // Override specific rules
    },
  },
  // Jsdoc configuration
  {
    files: ["**/*.{js,jsx,ts,tsx}"],
    plugins: {
      jsdoc: pluginJsdoc,
    },
    ignores: ["dist/"],
    rules: {
      "jsdoc/require-jsdoc": [
        "error",
        {
          require: {
            FunctionDeclaration: true,
            MethodDefinition: true,
            ClassDeclaration: true,
            ArrowFunctionExpression: true,
            FunctionExpression: true,
          },
        },
      ],
      "jsdoc/check-indentation": "warn",
      "jsdoc/check-line-alignment": "warn",
      "jsdoc/check-template-names": "warn",
      "jsdoc/check-syntax": "warn",
      "jsdoc/informative-docs": "off",
      "jsdoc/match-description": "warn",
      "jsdoc/no-bad-blocks": "warn",
      "jsdoc/no-undefined-types": "off",
      "jsdoc/no-blank-block-descriptions": "warn",
      "jsdoc/no-defaults": "warn",
      "jsdoc/no-types": "off", // TODO: Evaluate need for types
      "jsdoc/require-asterisk-prefix": "warn",
      "jsdoc/require-description": "warn",
      "jsdoc/require-description-complete-sentence": "warn",
      "jsdoc/require-throws": "warn",
      "jsdoc/sort-tags": "warn",
    },
  },
  // React Hooks configuration
  {
    files: ["**/*.{jsx,tsx}"],
    plugins: {
      reactHooks: pluginReactHooks,
    },
    rules: {
      "reactHooks/rules-of-hooks": "error",
      "reactHooks/exhaustive-deps": "warn",
    },
  },
  {
    plugins: {
      react: pluginReact,
    },
    rules: {
      "react/react-in-jsx-scope": "off",
      "react/jsx-uses-react": "off",
    },
  },
  // Global settings
  {
    files: ["**/*.{js,mjs,cjs,jsx,ts,tsx}"],
    languageOptions: {
      globals: globals.browser,
      ecmaVersion: "latest",
      sourceType: "module",
    },
    ignores: ["dist", "eslint.config.js"],
  },
];

export default config;
