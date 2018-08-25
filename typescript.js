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

    // typescript plugin
    'typescript/adjacent-overload-signatures': 'error',
    'typescript/member-ordering': 'error',
    'typescript/no-angle-bracket-type-assertion': 'error',
    'typescript/no-array-constructor': 'error',

    // interface can be used for empty props
    'typescript/no-empty-interface': 'off',
    'typescript/no-namespace': 'error',
    'typescript/no-unused-vars': 'error',
    'typescript/no-use-before-define': 'error',
    'typescript/no-var-requires': 'error',

    // issues
    'no-undef': 'off',
    // https://github.com/eslint/typescript-eslint-parser/issues/414
    'no-restricted-globals': 'off',
    // issue with generics
    'no-unused-vars': 'off',
  },
};
