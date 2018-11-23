'use strict';

module.exports = {
  parser: 'typescript-eslint-parser',
  plugins: ['typescript'],

  settings: {
    'import/resolver': {
      node: {
        extensions: ['.mjs', '.js', '.json', '.ts'],
      },
    },
    'import/extensions': ['.js', '.mjs', '.ts'],

    'import/core-modules': [
      'pob-babel', // import typings
    ],
  },

  rules: {
    'import/extensions': ['error', { extensions: ['ts', 'js'] }],

    /* issues */
    'no-undef': 'off',
    // https://github.com/eslint/typescript-eslint-parser/issues/414
    'no-restricted-globals': 'off',
    // issue with generics
    'no-unused-vars': 'off',
    // issue when reexporting types
    'no-use-before-define': 'off',

    /* typescript plugin */
    'typescript/adjacent-overload-signatures': 'error',
    'typescript/member-ordering': 'error',
    'typescript/no-angle-bracket-type-assertion': 'error',
    'typescript/no-array-constructor': 'error',
    'typescript/no-use-before-define': 'error',
    'typescript/no-var-requires': 'error',

    // interface can be used for empty props
    'typescript/no-empty-interface': 'off',

    /* doesn't work without base rule */
    'typescript/no-namespace': 'off',
    'typescript/no-unused-vars': 'off',
  },
};
