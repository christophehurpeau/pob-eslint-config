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
    'no-return-assign': 'off', // http://eslint.org/docs/rules/no-return-assign
    'no-shadow': 'off', // http://eslint.org/docs/rules/no-shadow
    'no-underscore-dangle': 'off', // http://eslint.org/docs/rules/no-underscore-dangle
    'prefer-const': 'off', // http://eslint.org/docs/rules/prefer-const
    'prefer-destructuring': 'off', // http://eslint.org/docs/rules/prefer-const
    'import/prefer-default-export': 'off', // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/prefer-default-export.md

    // Allow for-of, now supported by node 6 and modern browsers
    'no-restricted-syntax': [
      'error',
      'ForInStatement',
      // => allow 'ForOfStatement',
      'LabeledStatement',
      'WithStatement',
    ],
  },
};
