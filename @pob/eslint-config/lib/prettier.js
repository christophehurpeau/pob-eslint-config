'use strict';

module.exports = {
  extends: ['eslint-config-prettier'].map(require.resolve),

  rules: {
    // https://github.com/prettier/eslint-config-prettier#arrow-body-style-and-prefer-arrow-callback
    // issue: https://github.com/prettier/eslint-plugin-prettier/issues/65
    'prefer-arrow-callback': [
      'error',
      {
        allowNamedFunctions: false,
        allowUnboundThis: true,
      },
    ],

    // https://github.com/prettier/eslint-config-prettier#curly
    // prettier doesn't enforce {} with multiline
    curly: ['error', 'multi-line'],

    // https://github.com/prettier/eslint-config-prettier#quotes
    // prettier doesn't change backtick to single
    quotes: [
      'error',
      'single',
      { avoidEscape: true, allowTemplateLiterals: false },
    ],
  },
};
