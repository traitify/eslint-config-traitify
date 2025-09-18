module.exports = {
  extends: [
    './base',
    '../rules/react/index',
    '../rules/react/a11y',
  ].map(require.resolve),
  rules: {}
};
