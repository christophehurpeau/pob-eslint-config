module.exports = {
  extends: [
    'eslint-config-airbnb-base',
    './settings/globals',
    './settings/prettier',
    './rules/code-quality',
    './rules/style',
    './rules/expert',
  ].map(require.resolve),
};
