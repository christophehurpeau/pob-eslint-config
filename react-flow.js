module.exports = {
  extends: [
    'eslint-config-airbnb',
    './settings/globals',
    './settings/prettier',
    './settings/react',
    './rules/code-quality',
    './rules/style',
    './rules/expert',
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
