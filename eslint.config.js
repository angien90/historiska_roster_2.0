import eslintPluginVue from "eslint-plugin-vue";
import js from "@eslint/js";
import prettier from "eslint-plugin-prettier";

export default [
  js.configs.recommended,
  {
    files: ["**/*.vue"],
    plugins: {
      vue: eslintPluginVue,
    },
    languageOptions: {
      parser: await import("vue-eslint-parser"),
      parserOptions: {
        parser: await import("@babel/eslint-parser"),
        ecmaVersion: 2021,
        sourceType: "module",
        requireConfigFile: false,
      },
    },
    rules: {
      ...eslintPluginVue.configs["vue3-recommended"].rules,
      "vue/multi-word-component-names": "off",
      "vue/no-v-html": "off",
    },
  },
  {
    plugins: {
      prettier,
    },
    rules: {
      "prettier/prettier": "warn",
      "no-unused-vars": "warn",
    },
  },
];
