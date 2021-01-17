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
      files: ['lint-staged.config.js', 'husky.config.js', 'scripts/**'],
      rules: {
        'no-console': 'off',
        'import/no-extraneous-dependencies': [
          'error',
          {
            devDependencies: true,
          },
        ],
      },
    },
    {
      files: ['*.mjs'],
      parserOptions: {
        sourceType: 'module',
      },
    },
  ],
};
