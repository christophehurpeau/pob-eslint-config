'use strict';

module.exports = {
  extends: [
    'eslint-config-airbnb-base',
    './prettier',
    './plugins/unicorn',
    './rules/best-practices',
    './rules/code-quality',
    './rules/style',
    './rules/expert',
  ].map(require.resolve),

  parserOptions: {
    sourceType: 'script',
  },

  rules: {
    strict: ['error', 'safe'],
  },

  overrides: [
    {
      files: ['*.mjs'],
      parserOptions: {
        sourceType: 'module',
      },
    },
  ],
};
