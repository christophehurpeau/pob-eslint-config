module.exports = {
  rules: {
    // 4 spaces
    'indent': [2, 2, { SwitchCase: 1, VariableDeclarator: 1 }],

    // added rules
    'camelcase': [2, { properties: 'always' }],

    // changed rules
    'no-unused-vars': [2, { args: 'none' }],
    'object-shorthand': [2, 'always'],
    'comma-dangle': ['error', 'always-multiline'],

    // disabled rules
    'no-else-return': 'off', // http://eslint.org/docs/rules/no-else-return
  },
};
