module.exports = {
  extends: [
    'eslint-config-airbnb',
    './settings/react',
    './settings/globals',
    './rules/style',
    './rules/babel',
    './rules/react',
  ].map(require.resolve),
  parser: 'babel-eslint',
};
