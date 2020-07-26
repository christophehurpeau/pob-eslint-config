'use strict';

const usePlugin = require('@pob/use-eslint-plugin');

usePlugin(require('@typescript-eslint/eslint-plugin/package.json'));

module.exports = {
  plugins: ['@typescript-eslint/eslint-plugin'],
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    require.resolve('eslint-config-prettier/@typescript-eslint'),
  ],

  rules: {
    // disabled by prettier : indent, member-delimiter-style, type-annotation-spacing

    /* same as recommended */
    '@typescript-eslint/adjacent-overload-signatures': 'error',
    '@typescript-eslint/ban-ts-comment': 'error',
    '@typescript-eslint/ban-types': 'error',
    '@typescript-eslint/explicit-module-boundary-types': 'warn',
    '@typescript-eslint/no-array-constructor': 'error',
    '@typescript-eslint/no-explicit-any': 'warn',
    '@typescript-eslint/no-extra-non-null-assertion': 'error',
    '@typescript-eslint/no-extra-semi': 'error',
    '@typescript-eslint/no-inferrable-types': 'error',
    '@typescript-eslint/no-misused-new': 'error',
    '@typescript-eslint/no-namespace': 'error',
    '@typescript-eslint/no-non-null-asserted-optional-chain': 'error',
    '@typescript-eslint/no-non-null-assertion': 'warn',
    '@typescript-eslint/no-this-alias': 'error',
    '@typescript-eslint/no-var-requires': 'error',
    '@typescript-eslint/prefer-namespace-keyword': 'error',
    '@typescript-eslint/triple-slash-reference': 'error',

    /* same as recommended-requiring-type-checking */
    '@typescript-eslint/await-thenable': 'error',
    '@typescript-eslint/no-floating-promises': 'error',
    '@typescript-eslint/no-for-in-array': 'error',
    '@typescript-eslint/no-implied-eval': 'error',
    '@typescript-eslint/no-misused-promises': 'error',
    '@typescript-eslint/no-unsafe-assignment': 'error',
    '@typescript-eslint/no-unsafe-call': 'error',
    '@typescript-eslint/no-unsafe-member-access': 'error',
    '@typescript-eslint/no-unsafe-return': 'error',
    '@typescript-eslint/prefer-regexp-exec': 'error',
    '@typescript-eslint/require-await': 'error',
    '@typescript-eslint/restrict-plus-operands': 'error',
    '@typescript-eslint/restrict-template-expressions': 'error',

    /* Not enabled */

    '@typescript-eslint/generic-type-naming': 'off',
    '@typescript-eslint/member-naming': 'off',
    '@typescript-eslint/member-ordering': 'off',
    '@typescript-eslint/no-extraneous-class': 'off',
    '@typescript-eslint/no-magic-numbers': 'off',
    '@typescript-eslint/no-require-imports': 'off',
    '@typescript-eslint/no-unnecessary-qualifier': 'off',
    '@typescript-eslint/no-unnecessary-type-arguments': 'off',
    '@typescript-eslint/no-type-alias': 'off',
    '@typescript-eslint/prefer-for-of': 'off',
    '@typescript-eslint/promise-function-async': 'off',
    '@typescript-eslint/require-array-sort-compare': 'off',
    '@typescript-eslint/strict-boolean-expressions': 'off',
    '@typescript-eslint/typedef': 'off',
    '@typescript-eslint/unified-signatures': 'off',
    '@typescript-eslint/prefer-nullish-coalescing': 'off',
    '@typescript-eslint/no-unnecessary-condition': 'off',
    '@typescript-eslint/keyword-spacing': 'off',
    '@typescript-eslint/lines-between-class-members': 'off',

    /* enabled */
    '@typescript-eslint/array-type': 'error',
    '@typescript-eslint/ban-tslint-comment': 'error',
    '@typescript-eslint/no-parameter-properties': 'error',
    '@typescript-eslint/consistent-type-definitions': ['error', 'interface'],
    '@typescript-eslint/no-useless-constructor': 'error',
    '@typescript-eslint/prefer-includes': 'error',
    '@typescript-eslint/prefer-string-starts-ends-with': 'error',
    '@typescript-eslint/prefer-function-type': 'error',
    '@typescript-eslint/prefer-readonly': 'error',
    '@typescript-eslint/prefer-optional-chain': 'error',
    '@typescript-eslint/method-signature-style': 'error',
    '@typescript-eslint/prefer-reduce-type-parameter': 'error',
    '@typescript-eslint/prefer-ts-expect-error': 'error',
    '@typescript-eslint/no-invalid-void-type': 'error',
    '@typescript-eslint/no-confusing-non-null-assertion': 'error',
    '@typescript-eslint/prefer-literal-enum-member': 'error',

    // enable dot-notation, like https://github.com/airbnb/javascript/blob/5b462a04cdfebba712a3df18926edfcb4103d2a9/packages/eslint-config-airbnb-base/rules/best-practices.js#L40-L41
    'dot-notation': 'off',
    '@typescript-eslint/dot-notation': ['error', { allowKeywords: true }],

    // enable no-loss-of-precision

    'no-loss-of-precision': 'off',
    '@typescript-eslint/no-loss-of-precision': ['error'],

    // Testing rules as warn
    '@typescript-eslint/prefer-as-const': 'warn',
    '@typescript-eslint/naming-convention': [
      'error',
      // Enforce that interface names do not begin with an I
      {
        selector: 'interface',
        format: ['PascalCase'],
        custom: {
          regex: '^I[A-Z]',
          match: false,
        },
      },
      // Enforce that boolean variables are prefixed with an allowed verb
      {
        selector: 'variable',
        types: ['boolean'],
        format: ['PascalCase'],
        prefix: ['is', 'should', 'has', 'can', 'did', 'will'],
      },
      // Enforce that boolean memberLike are prefixed with an allowed verb
      {
        selector: 'memberLike',
        types: ['boolean'],
        format: ['PascalCase'],
        prefix: ['is', 'should', 'has', 'can', 'did', 'will'],
      },
      // Enforce that type is in PascalCase
      {
        selector: 'typeLike',
        format: ['PascalCase'],
      },
    ],

    /* changed */
    '@typescript-eslint/explicit-function-return-type': [
      'error',
      {
        allowExpressions: true,
        allowTypedFunctionExpressions: true,
        allowHigherOrderFunctions: true,
      },
    ],

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

    // some callback/implmentations could do nothing
    '@typescript-eslint/no-empty-function': 'off',

    // interface can be used for empty props
    '@typescript-eslint/no-empty-interface': 'off',
    // too much errors on existing code
    '@typescript-eslint/unbound-method': 'off',

    // issue when as is used to remove undefined (in liwi for example)
    '@typescript-eslint/no-unnecessary-type-assertion': 'off',
  },
};
