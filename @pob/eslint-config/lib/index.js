'use strict';

module.exports = {
  extends: [
    'eslint-config-airbnb-base',
    './plugins/prettier',
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
      files: ['lint-staged.config.js', 'husky.config.js'],
      rules: {
        'import/no-extraneous-dependencies': [
          'error',
          {
            devDependencies: true,
          },
        ],
      },
    },
  ],
};
