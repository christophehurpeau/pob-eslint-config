'use strict';

module.exports = {
  plugins: ['@typescript-eslint'],
  extends: [
    'plugin:@typescript-eslint/recommended',
    require.resolve('eslint-config-prettier/@typescript-eslint'),
  ],

  rules: {
    // disabled by prettier : indent, member-delimiter-style, type-annotation-spacing

    /* same as recommended */
    '@typescript-eslint/adjacent-overload-signatures': 'error',
    '@typescript-eslint/array-type': 'error',
    '@typescript-eslint/ban-types': 'error',
    '@typescript-eslint/camelcase': 'error',
    '@typescript-eslint/class-name-casing': 'error',
    '@typescript-eslint/explicit-function-return-type': 'warn',
    '@typescript-eslint/interface-name-prefix': 'error',
    '@typescript-eslint/no-angle-bracket-type-assertion': 'error',
    '@typescript-eslint/no-array-constructor': 'error',
    '@typescript-eslint/no-explicit-any': 'warn',
    '@typescript-eslint/no-inferrable-types': 'error',
    '@typescript-eslint/no-misused-new': 'error',
    '@typescript-eslint/no-namespace': 'error',
    '@typescript-eslint/no-non-null-assertion': 'error',
    '@typescript-eslint/no-parameter-properties': 'error',
    '@typescript-eslint/no-triple-slash-reference': 'error',
    '@typescript-eslint/no-use-before-define': 'error',
    '@typescript-eslint/no-var-requires': 'error',
    '@typescript-eslint/prefer-interface': 'error',
    '@typescript-eslint/prefer-namespace-keyword': 'error',

    '@typescript-eslint/generic-type-naming': 'off',
    '@typescript-eslint/member-naming': 'off',
    '@typescript-eslint/member-ordering': 'off',
    '@typescript-eslint/no-extraneous-class': 'off',
    '@typescript-eslint/no-this-alias': 'off',
    '@typescript-eslint/no-type-alias': 'off',
    '@typescript-eslint/no-unnecessary-type-assertion': 'off',
    '@typescript-eslint/restrict-plus-operands': 'off',

    /* enabled */
    '@typescript-eslint/no-useless-constructor': 'error',
    '@typescript-eslint/prefer-includes': 'error',
    '@typescript-eslint/prefer-string-starts-ends-with': 'error',

    /* changed */
    // https://github.com/typescript-eslint/typescript-eslint/issues/201
    // private is coming in js world and no-public will be the most common way to read a js file (and probably ts)
    '@typescript-eslint/explicit-member-accessibility': [
      'error',
      { accessibility: 'no-public' },
    ],

    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        vars: 'all',
        args: 'none',
        ignoreRestSiblings: true,
      },
    ],

    /* disabled */

    // interface can be used for empty props
    '@typescript-eslint/no-empty-interface': 'off',

    '@typescript-eslint/no-object-literal-type-assertion': 'off',
  },
};
