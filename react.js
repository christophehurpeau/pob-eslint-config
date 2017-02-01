module.exports = {
  extends: [
    'eslint-config-airbnb',
    './settings/react',
    './settings/globals',
    './rules/code-quality',
    './rules/style',
    './rules/expert',
    './rules/babel',
    './rules/react',
  ].map(require.resolve),
  parser: 'babel-eslint',
};
