'use strict';

module.exports = {
  rules: {
    /* changed rules */

    // changed properties: 'never' to properties: 'always'
    // http://eslint.org/docs/rules/camelcase
    camelcase: ['error', { properties: 'always' }],

    // stricter rule
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/order.md
    'import/order': [
      'error',
      {
        groups: [
          'builtin',
          'external',
          'internal',
          'parent',
          'sibling',
          'index',
        ],
        'newlines-between': 'never',
      },
    ],

    // http://eslint.org/docs/rules/no-unused-vars
    'no-unused-vars': [
      'error',
      {
        vars: 'all',
        args: 'none', // changed after-used to none
        ignoreRestSiblings: true,
      },
    ],

    // http://eslint.org/docs/rules/object-shorthand
    'object-shorthand': ['error', 'always'],

    /* disabled rules */

    // http://eslint.org/docs/rules/no-else-return
    'no-else-return': 'off',
  },
};
