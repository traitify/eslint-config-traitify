module.exports = {
  env: {node: true},
  extends: [
    "eslint-config-traitify/react",
    "eslint-config-traitify/jest"
  ].map(require.resolve),
  settings: {
    "import/resolver": {
      jest: {jestConfigFile: "./test/jest.config.js"}
    }
  }
};
