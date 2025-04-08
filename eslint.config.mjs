import js from "@eslint/js";
import typescript from "@typescript-eslint/eslint-plugin";
import typescriptParser from "@typescript-eslint/parser";
import importPlugin from "eslint-plugin-import";
import prettierPlugin from "eslint-plugin-prettier";
import templateParser from "@angular-eslint/template-parser";
import angularPlugin from "@angular-eslint/eslint-plugin";

export default [
  js.configs.recommended,
  {
    ignores: ["projects/**/*"],
    files: ["**/*.ts"],
    languageOptions: {
      parser: typescriptParser,
      parserOptions: {
        project: "./tsconfig.json",
        ecmaVersion: 2022,
        sourceType: "module",
      },
      globals: {
        console: true,
        window: true,
        document: true
      }
    },
    plugins: {
      "@typescript-eslint": typescript,
      "@angular-eslint": angularPlugin,
      prettier: prettierPlugin,
      import: importPlugin,
    },
    rules: {
      "@angular-eslint/component-selector": "off",
      "@angular-eslint/directive-selector": [
        "error",
        {
          type: "attribute",
          prefix: "app",
          style: "camelCase",
        },
      ],
      "@angular-eslint/no-lifecycle-call": "error",
      "@angular-eslint/no-pipe-impure": "error",
      "@angular-eslint/prefer-on-push-component-change-detection": "error",
      "@angular-eslint/relative-url-prefix": "error",
      "@angular-eslint/use-component-selector": "error",
      "@angular-eslint/use-lifecycle-interface": "error",
      "@angular-eslint/use-pipe-transform-interface": "error",
      "prettier/prettier": [
        "warn",
        {
          bracketSpacing: true,
          arrowParens: "always",
          trailingComma: "es5",
          singleQuote: true,
          endOfLine: "auto",
          tabWidth: 2,
          semi: true,
        },
      ],
      "import/order": [
        "warn",
        {
          groups: ["type", "builtin", "object", "external", "internal", "parent", "sibling", "index"],
          pathGroups: [
            {
              pattern: "~/**",
              group: "external",
              position: "after",
            },
          ],
          "newlines-between": "always",
        },
      ],
      "padding-line-between-statements": [
        "warn",
        { blankLine: "always", prev: "*", next: ["return", "export"] },
        { blankLine: "always", prev: ["const", "let", "var"], next: "*" },
        { blankLine: "any", prev: ["const", "let", "var"], next: ["const", "let", "var"] },
      ],
      "no-console": "warn",
      "@typescript-eslint/explicit-function-return-type": "off",
      "@typescript-eslint/no-unused-vars": [
        "warn",
        {
          args: "after-used",
          ignoreRestSiblings: false,
          argsIgnorePattern: "^_.*?$",
        },
      ],
    },
    settings: {
      "import/resolver": {
        typescript: {
          project: "./tsconfig.json",
          alwaysTryTypes: true,
        },
      },
    },
  },
  {
    files: ["**/*.html"],
    languageOptions: {
      parser: templateParser,
      parserOptions: {
        ecmaVersion: 2022,
        sourceType: "module",
        project: "./tsconfig.json",
      },
    },
    plugins: {
      "@angular-eslint": angularPlugin,
    },
    rules: {
      "@angular-eslint/template/accessibility-alt-text": "error",
      "@angular-eslint/template/accessibility-elements-content": "error",
      "@angular-eslint/template/accessibility-label-for": "error",
      "@angular-eslint/template/accessibility-tabindex-no-positive": "error",
      "@angular-eslint/template/accessibility-valid-aria": "error",
      "@angular-eslint/template/click-events-have-key-events": "error",
      "@angular-eslint/template/mouse-events-have-key-events": "error",
      "@angular-eslint/template/no-any": "error",
      "@angular-eslint/template/no-positive-tabindex": "error",
      "@angular-eslint/template/use-track-by-function": "error",
    },
  },
];
