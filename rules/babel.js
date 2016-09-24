module.exports = {
  plugins: ['babel'],
  rules: {
    // https://github.com/babel/babel-eslint/issues/316
    'generator-star-spacing': 0,
    'babel/generator-star-spacing': [2, { before: false, after: true }],
    // 'new-cap': 0,
    // 'babel/new-cap':  [2, { newIsCap: true }],
    // 'array-bracket-spacing': 0,
    // 'babel/array-bracket-spacing': [2, 'never'],
    // 'object-curly-spacing': 0,
    // 'babel/object-curly-spacing': [2, 'always'],
    'object-shorthand': 0,
    'babel/object-shorthand': [2, 'methods'],

    'babel/flow-object-type': [1, 'comma'],
    'babel/func-params-comma-dangle': [2, 'always-multiline'],

    // disable arrow-parens because it breaks with flow
    'arrow-parens': 'off',

    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-named-as-default.md
    // `export default from './foo'` should work
    'import/no-named-as-default': 'off',

    'no-duplicate-imports': 'off',
    'import/no-duplicates': 'error',
  },
};
