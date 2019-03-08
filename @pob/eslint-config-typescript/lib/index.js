'use strict';

module.exports = {
  parser: '@typescript-eslint/parser',

  extends: ['./plugins/typescript-eslint'].map(require.resolve),

  settings: {
    'import/resolver': {
      node: {
        extensions: ['.mjs', '.js', '.json', '.ts'],
      },
    },
    'import/extensions': ['.js', '.mjs', '.ts'],

    'import/core-modules': [
      'pob-babel', // import typings
    ],
  },

  rules: {
    'import/extensions': ['error', { extensions: ['ts', 'js'] }],

    /* issues */

    /* some exported type doesnt work. tsc check that anyway */
    'import/named': 'off',
  },
};
