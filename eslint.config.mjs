import js from "@eslint/js";
import typescript from "@typescript-eslint/eslint-plugin";
import typescriptParser from "@typescript-eslint/parser";
import angular from "eslint-plugin-angular";
import importPlugin from "eslint-plugin-import";
import prettierPlugin from "eslint-plugin-prettier";
import prettierConfig from "eslint-config-prettier";
import templateParser from "@angular-eslint/template-parser";

export default [
  js.configs.recommended,
  {
    files: ["**/*.ts"],
    languageOptions: {
      parser: typescriptParser,
      parserOptions: {
        project: "./tsconfig.json",
        ecmaVersion: 2022,
        sourceType: "module",
      },
    },
    plugins: {
      "@typescript-eslint": typescript,
      angular: angular,
      import: importPlugin,
      prettier: prettierPlugin,
    },
    rules: {
      // Prettier configuration
      "prettier/prettier": ["warn", { 
        bracketSpacing: true, 
        arrowParens: "always", 
        trailingComma: "es5", 
        singleQuote: true, 
        endOfLine: "auto", 
        tabWidth: 2, 
        semi: true 
      }],

      // Import rules
      "import/order": [
        "warn",
        {
          groups: ["type", "builtin", "object", "external", "internal", "parent", "sibling", "index"],
          pathGroups: [{ pattern: "~/**", group: "external", position: "after" }],
          "newlines-between": "always",
          alphabetize: { order: "asc" },
        },
      ],
      "import/no-duplicates": "error",
      "import/no-unresolved": "error",

      // Code style
      "padding-line-between-statements": [
        "warn",
        { blankLine: "always", prev: "*", next: ["return", "export"] },
        { blankLine: "always", prev: ["const", "let", "var"], next: "*" },
        { blankLine: "any", prev: ["const", "let", "var"], next: ["const", "let", "var"] },
      ],

      // TypeScript rules
      "@typescript-eslint/naming-convention": "off",
      "@typescript-eslint/no-unused-expressions": "off",
      "@typescript-eslint/no-unnecessary-type-parameters": "off",
      "@typescript-eslint/no-misused-promises": "off",
      "@typescript-eslint/dot-notation": "off",
      "@typescript-eslint/no-floating-promises": "off",
      "@typescript-eslint/explicit-function-return-type": "off",
      "@typescript-eslint/non-nullable-type-assertion-style": "off",
      "@typescript-eslint/no-unused-vars": ["warn", { 
        args: "after-used", 
        ignoreRestSiblings: false, 
        argsIgnorePattern: "^_.*?$" 
      }],
      "@typescript-eslint/no-explicit-any": "warn",

      // Angular specific rules
      "angular/controller-name": "error",
      "angular/controller-as": "error",
      "angular/deferred": "error",
      "angular/directive-restrict": "error",
      "angular/empty-controller": "error",
      "angular/no-controller": "error",
      "angular/no-inline-template": "error",
      "angular/no-services": "error",
      "angular/on-watch": "error",

      // General rules
      "no-console": ["warn", { allow: ["warn", "error"] }],
      "no-debugger": "error",
      "no-duplicate-imports": "error",
      "no-unused-vars": "off", // Using TypeScript's no-unused-vars instead

      // Prettier compatibility
      ...prettierConfig.rules,
    },
    settings: {
      "import/resolver": {
        typescript: {
          project: "./tsconfig.json",
          alwaysTryTypes: true
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
        project: "./tsconfig.json"
      },
    },
    plugins: {
      angular: angular,
      prettier: prettierPlugin,
    },
    rules: {
      // Prettier configuration for templates
      "prettier/prettier": ["warn", { 
        bracketSpacing: true, 
        arrowParens: "always", 
        trailingComma: "es5", 
        singleQuote: true, 
        endOfLine: "auto", 
        tabWidth: 2, 
        semi: true 
      }],
      ...prettierConfig.rules,
    },
  },
];
