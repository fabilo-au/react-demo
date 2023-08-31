/* eslint-disable immutable/no-mutation */
module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "plugin:@typescript-eslint/recommended",
    "plugin:eslint-comments/recommended",
    "plugin:jest/recommended",
    "plugin:react/recommended",
    "prettier",
  ],
  overrides: [
    {
      env: {
        node: true,
      },
      files: [".eslintrc.{js,cjs}"],
      parserOptions: {
        sourceType: "script",
      },
    },
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: [
    "react",
    "@typescript-eslint",
    "eslint-comments",
    "jest",
    "immutable",
  ],
  rules: {
    "no-console": "error",
    "spaced-comment": "off",
    "no-var": "error",
    "no-undef": "error",
    "no-param-reassign": "error",
    "immutable/no-this": "error",
    "immutable/no-mutation": "error",
    "import/prefer-default-export": "off",
    "import/no-default-export": "off",
    "no-use-before-define": [
      "error",
      { functions: false, classes: true, variables: true },
    ],
    "@typescript-eslint/no-triple-slash-reference": "off",
    "@typescript-eslint/no-use-before-define": [
      "error",
      { functions: false, classes: true, variables: true, typedefs: true },
    ],
  },
};
