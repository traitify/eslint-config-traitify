module.exports = {
  env: {node: true},
  extends: [
    "eslint-config-traitify/react"
  ].map(require.resolve),
  settings: {
    "import/resolver": {
      webpack: {config: "webpack.config.js"}
    }
  }
};
