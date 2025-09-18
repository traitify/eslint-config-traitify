module.exports = {
  env: {node: true},
  extends: [
    "eslint-config-traitify"
  ].map(require.resolve),
  settings: {
    "import/resolver": {
      webpack: {config: "webpack.config.js"}
    }
  }
};
