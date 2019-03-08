'use strict';

module.exports = {
  rules: {
    'class-methods-use-this': 'off', // http://eslint.org/docs/rules/class-methods-use-this
    'consistent-return': 'off', // http://eslint.org/docs/rules/consistent-return
    'default-case': 'off', // http://eslint.org/docs/rules/default-case
    'func-names': 'off', // http://eslint.org/docs/rules/func-names
    'no-await-in-loop': 'off', // http://eslint.org/docs/rules/no-continue
    'no-continue': 'off', // http://eslint.org/docs/rules/no-continue
    'no-empty': 'off', // http://eslint.org/docs/rules/no-empty
    'no-loop-func': 'off', // http://eslint.org/docs/rules/no-loop-func
    'no-param-reassign': 'off', // http://eslint.org/docs/rules/no-param-reassign
    'no-plusplus': 'off', // http://eslint.org/docs/rules/no-plusplus
    'no-shadow': 'off', // http://eslint.org/docs/rules/no-shadow
    'no-underscore-dangle': 'off', // http://eslint.org/docs/rules/no-underscore-dangle
    'prefer-destructuring': 'off', // http://eslint.org/docs/rules/prefer-destructuring

    // Allow for-of, now supported by node 6 and modern browsers
    'no-restricted-syntax': [
      'error',
      {
        selector: 'ForInStatement',
        message:
          'for..in loops iterate over the entire prototype chain, which is virtually never what you want. Use Object.{keys,values,entries}, and iterate over the resulting array.',
      },
      // => allow 'ForOfStatement',
      // {
      //   selector: 'ForOfStatement',
      //   message: 'iterators/generators require regenerator-runtime, which is too heavyweight for this guide to allow them. Separately, loops should be avoided in favor of array iterations.',
      // },
      {
        selector: 'LabeledStatement',
        message:
          'Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.',
      },
      {
        selector: 'WithStatement',
        message:
          '`with` is disallowed in strict mode because it makes code impossible to predict and optimize.',
      },
    ],

    'import/prefer-default-export': 'off', // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/prefer-default-export.md
  },
};
