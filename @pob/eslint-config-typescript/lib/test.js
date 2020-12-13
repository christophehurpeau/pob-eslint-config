'use strict';

module.exports = {
  rules: {
    // enable (as any).something in test
    '@typescript-eslint/no-unsafe-member-access': 'off',

    // don't force return type in test
    '@typescript-eslint/explicit-function-return-type': 'off',
  },
};
