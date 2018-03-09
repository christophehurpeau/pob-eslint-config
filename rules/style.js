'use strict';

module.exports = {
  rules: {
    /* added rules */

    // http://eslint.org/docs/rules/camelcase
    camelcase: [2, { properties: 'always' }],

    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/order.md
    'import/order': [
      'error',
      {
        groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
        'newlines-between': 'never',
      },
    ],

    /* changed rules */

    // http://eslint.org/docs/rules/no-unused-vars
    'no-unused-vars': [
      2,
      {
        vars: 'all',
        args: 'none', // changed after-used to none
        ignoreRestSiblings: true,
      },
    ],

    // http://eslint.org/docs/rules/object-shorthand
    'object-shorthand': [2, 'always'],

    /* disabled rules */

    // http://eslint.org/docs/rules/no-else-return
    'no-else-return': 'off',
  },
};
