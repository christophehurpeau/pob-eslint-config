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
        extensions: ['.mjs', '.js', '.json', '.ts', '.tsx'],
      },
    },
  },

  rules: {
    'import/extensions': ['error', { extensions: ['ts', 'tsx', 'js'] }],
    'react/jsx-filename-extension': ['error', { extensions: ['tsx'] }],
  },
};
