module.exports = {
  rules: {
    // 4 spaces
    'indent': [2, 2, { SwitchCase: 1, VariableDeclarator: 1 }],

    // added rules
    'camelcase': [2, { properties: 'always' }],

    // changed rules
    'no-unused-vars': [2, { args: 'none' }],
    'object-shorthand': [2, 'methods'],

    // disabled rules
    'prefer-const': 0,                          // http://eslint.org/docs/rules/prefer-const
    'no-return-assign': 0,                      // http://eslint.org/docs/rules/no-return-assign
    'consistent-return': 0,                     // http://eslint.org/docs/rules/consistent-return
    'default-case': 0,                          // http://eslint.org/docs/rules/default-case
    'no-else-return': 0,                        // http://eslint.org/docs/rules/no-else-return
    'no-param-reassign': 0,                     // http://eslint.org/docs/rules/no-param-reassign
    'no-loop-func': 0,                          // http://eslint.org/docs/rules/no-loop-func
    'func-names': 0,                            // http://eslint.org/docs/rules/func-names
    'no-empty': 0,                              // http://eslint.org/docs/rules/no-empty
    'no-shadow': 0,                             // http://eslint.org/docs/rules/no-shadow
    'no-underscore-dangle': 0,                  // http://eslint.org/docs/rules/no-underscore-dangle
    'no-continue': 0,                           // http://eslint.org/docs/rules/no-continue
    'no-plusplus': 0,                           // http://eslint.org/docs/rules/no-plusplus
    'import/prefer-default-export': 0,          // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/prefer-default-export.md

    'class-methods-use-this': 0,
  },
};
