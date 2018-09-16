'use strict';

module.exports = {
  extends: [
    'eslint-config-airbnb/rules/react',
    'eslint-config-airbnb/rules/react-a11y',
    'eslint-config-prettier',
    'eslint-config-prettier/react',
    './rules/react',
  ].map(require.resolve),

  settings: {
    'import/resolver': {
      node: {
        extensions: ['.mjs', '.js', '.json', '.jsx'],
      },
    },
  },

  rules: {
    'import/extensions': ['error', { extensions: ['jsx', 'js'] }],
    'react/jsx-filename-extension': ['error', { extensions: ['jsx'] }],
  },
};
