module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true
  },
  extends: [
    "plugin:jest/recommended"
  ].concat([
    "../airbnb/config/base",
    "../rules/base",
    "../rules/jest"
  ].map(require.resolve)),
  overrides: [
    {
      files: "*.config.js",
      rules: {
        "global-require": "off"
      }
    }
  ],
  parser: "@babel/eslint-parser",
  plugins: ["@babel"],
  rules: {},
  settings: {
    "import/resolver": "webpack"
  }
};
