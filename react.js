'use strict';

module.exports = {
  extends: [
    'eslint-config-airbnb',
    require.resolve('eslint-config-prettier'),
    require.resolve('eslint-config-prettier/react'),
    './rules/react',
  ].map(require.resolve),

  settings: {
    'import/resolver': {
      node: {
        extensions: ['.mjs', '.js', '.json', '.ts', '.tsx'],
      },
    },
    'import/extensions': ['.js', '.mjs', '.jsx', '.ts', '.tsx'],
  },

  rules: {
    'import/extensions': ['error', { extensions: ['ts', 'tsx', 'js'] }],
    'react/jsx-filename-extension': ['error', { extensions: ['tsx'] }],
  },
};
