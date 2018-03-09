'use strict';

module.exports = {
  plugins: ['flowtype'],
  rules: {
    // https://github.com/gajus/eslint-plugin-flowtype#boolean-style
    'flowtype/boolean-style': ['error', 'boolean'],

    // https://github.com/gajus/eslint-plugin-flowtype#define-flow-type
    'flowtype/define-flow-type': 'off',

    // https://github.com/gajus/eslint-plugin-flowtype#delimiter-dangle
    'flowtype/delimiter-dangle': ['error', 'always-multiline'],

    // https://github.com/gajus/eslint-plugin-flowtype#generic-spacing
    // handled by prettier
    'flowtype/generic-spacing': 'off',

    // https://github.com/gajus/eslint-plugin-flowtype#no-dupe-keys
    'flowtype/no-dupe-keys': 'error',

    // https://github.com/gajus/eslint-plugin-flowtype#no-flow-fix-me-comments
    'flowtype/no-flow-fix-me-comments': 'warn',

    // https://github.com/gajus/eslint-plugin-flowtype#no-mutable-array
    // not supported by flow-runtime: https://github.com/codemix/flow-runtime/issues/199
    'flowtype/no-mutable-array': 'off',

    // https://github.com/gajus/eslint-plugin-flowtype#no-primitive-constructor-types
    'flowtype/no-primitive-constructor-types': 'error',

    // https://github.com/gajus/eslint-plugin-flowtype#no-types-missing-file-annotation
    'flowtype/no-types-missing-file-annotation': 'off',

    // https://github.com/gajus/eslint-plugin-flowtype#no-unused-expressions
    'flowtype/no-unused-expressions': 'warn',

    // https://github.com/gajus/eslint-plugin-flowtype#no-weak-types
    'flowtype/no-weak-types': 'warn',

    // https://github.com/gajus/eslint-plugin-flowtype#object-type-delimiter
    'flowtype/object-type-delimiter': 'error',

    // https://github.com/gajus/eslint-plugin-flowtype#require-exact-type
    'flowtype/require-exact-type': 'off',

    // https://github.com/gajus/eslint-plugin-flowtype#require-parameter-type
    'flowtype/require-parameter-type': ['warn', { excludeArrowFunctions: 'expressionsOnly' }],

    // https://github.com/gajus/eslint-plugin-flowtype#require-return-type
    'flowtype/require-return-type': [
      'warn',
      'always',
      {
        excludeArrowFunctions: true,
        annotateUndefined: 'never',
      },
    ],

    // https://github.com/gajus/eslint-plugin-flowtype#require-valid-file-annotation
    'flowtype/require-valid-file-annotation': 'off',

    // https://github.com/gajus/eslint-plugin-flowtype#require-variable-type
    'flowtype/require-variable-type': 'off',

    // https://github.com/gajus/eslint-plugin-flowtype#semi
    // handled by prettier
    'flowtype/semi': 'off',

    // https://github.com/gajus/eslint-plugin-flowtype#sort-keys
    'flowtype/sort-keys': 'warn',

    // https://github.com/gajus/eslint-plugin-flowtype#space-after-type-colon
    // handled by prettier
    'flowtype/space-after-type-colon': 'off',

    // https://github.com/gajus/eslint-plugin-flowtype#space-before-generic-bracket
    // handled by prettier
    'flowtype/space-before-generic-bracket': 'off',

    // https://github.com/gajus/eslint-plugin-flowtype#space-before-type-colon
    // handled by prettier
    'flowtype/space-before-type-colon': 'off',

    // https://github.com/gajus/eslint-plugin-flowtype#type-id-match
    'flowtype/type-id-match': 'off',

    // https://github.com/gajus/eslint-plugin-flowtype#union-intersection-spacing
    // handled by prettier
    'flowtype/union-intersection-spacing': 'off',

    // https://github.com/gajus/eslint-plugin-flowtype#use-flow-type
    'flowtype/use-flow-type': 'error',
  },
};
