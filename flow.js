module.exports = {
  extends: [
    'eslint-config-airbnb-base',
    'eslint-config-airbnb-base/rules/strict',
    './settings/globals',
    './settings/prettier',
    './settings/jest',
    './rules/code-quality',
    './rules/style',
    './rules/expert',
    './rules/babel',
    './rules/flow',
  ].map(require.resolve),
  parser: 'babel-eslint',
};
