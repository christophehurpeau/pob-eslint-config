module.exports = {
  extends: [
    'eslint-config-airbnb-base',
    'eslint-config-airbnb-base/rules/strict',
    './settings/globals',
    './settings/prettier',
    './rules/code-quality',
    './rules/expert',
    './rules/style',
    './rules/babel',
  ].map(require.resolve),
  parser: 'babel-eslint',
};
