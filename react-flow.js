module.exports = {
  extends: [
    'eslint-config-airbnb',
    './settings/react',
    './settings/globals',
    './rules/code-quality',
    './rules/style',
    './rules/babel',
    './rules/flow',
    './rules/react',
  ].map(require.resolve),
  parser: 'babel-eslint',
  rules: {
    'react/prop-types': 'off',
    'react/forbid-prop-types': 'off',
  },
};
