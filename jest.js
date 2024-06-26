module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true
  },
  extends: [
    "airbnb",
    "plugin:jest/recommended"
  ].concat([
    "./rules/default",
    "./rules/jest"
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
    "import/resolver": "webpack",
    react: {version: "detect"}
  }
};
