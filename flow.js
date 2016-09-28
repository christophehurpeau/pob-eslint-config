module.exports = {
  extends: [
    'eslint-config-airbnb-base',
    'eslint-config-airbnb-base/rules/strict',
    './settings/globals',
    './rules/style',
    './rules/babel',
    './rules/flow',
  ].map(require.resolve),
  parser: 'babel-eslint',
};