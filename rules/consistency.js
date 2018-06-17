'use strict';

module.exports = {
  rules: {
    /* import plugin */
    /* in airbnb, not released yet */

    // https://github.com/airbnb/javascript/commit/6f2395a3f146863f4cba86cbf2433618828fa9f3
    'import/named': 'error',

    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-self-import.md
    'import/no-self-import': 'error',

    // https://github.com/benmosher/eslint-plugin-import/blob/d81f48a2506182738409805f5272eff4d77c9348/docs/rules/no-cycle.md
    'import/no-cycle': ['error', { maxDepth: Infinity }],

    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-useless-path-segments.md
    'import/no-useless-path-segments': 'error',

    /* prefer-class-properties */

    // https://www.npmjs.com/package/eslint-plugin-prefer-class-properties
    'prefer-class-properties/prefer-class-properties': 'error',
  },
};
