// @typescript-eslint/parser

module.exports = {
  parser: "@babel/eslint-parser",
  plugins: ["import", "svelte3", "@typescript-eslint", "prettier"],
  extends: ["eslint:recommended", "plugin:import/recommended"],
  overrides: [
    {
      files: ["*.svelte"],
      processor: "svelte3/svelte3",
    },
  ],
  rules: {
    "semi": "warn"
  },
  settings: {
    "svelte3/typescript": true,
  },
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  parserOptions: {
    sourceType: "module",
    ecmaVersion: 2019,
    tsconfigRootDir: __dirname,
    project: ["./tsconfig.json"],
    extraFileExtensions: [".svelte"],
    requireConfigFile: false,
  },
};
