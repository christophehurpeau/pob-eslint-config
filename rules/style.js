module.exports = {
  rules: {
    /* added rules */

    // http://eslint.org/docs/rules/camelcase
    camelcase: [2, { properties: 'always' }],

    /* changed rules */

    // http://eslint.org/docs/rules/no-unused-vars
    'no-unused-vars': [2, {
      vars: 'all',
      args: 'none', // changed after-used to none
      ignoreRestSiblings: true,
    }],

    // http://eslint.org/docs/rules/object-shorthand
    'object-shorthand': [2, 'always'],

    /* disabled rules */

    // http://eslint.org/docs/rules/no-else-return
    'no-else-return': 'off',
  },
};
