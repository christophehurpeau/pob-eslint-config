module.exports = {
  extends: [
    'eslint-config-airbnb-base',
    './settings/globals',
    './rules/code-quality',
    './rules/style',
  ].map(require.resolve),
};
