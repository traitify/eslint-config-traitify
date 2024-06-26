module.exports = {
  env: {
    browser: true,
    es6: true,
    node: false
  },
  extends: [
    "airbnb"
  ].concat([
    "./rules/default"
  ].map(require.resolve)),
  parser: "@babel/eslint-parser",
  plugins: ["@babel"],
  rules: {},
  settings: {
    "import/resolver": "webpack",
    react: {version: "detect"}
  }
};
