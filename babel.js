'use strict';

module.exports = {
  extends: [
    'eslint-config-airbnb-base',
    'eslint-config-airbnb-base/rules/strict',
    './plugins/filenames',
    './plugins/prettier',
    './plugins/prefer-class-properties',
    './plugins/unicorn',
    './rules/best-practices',
    './rules/code-quality',
    './rules/style',
    './rules/expert',
  ].map(require.resolve),

  plugins: ['babel'],
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module',
  },

  rules: {
    // 'new-cap': 0,
    // 'babel/new-cap':  [2, { newIsCap: true }],
    // 'object-curly-spacing': 0,
    // 'babel/object-curly-spacing': [2, 'always'],

    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-commonjs.md
    // disallow require when using babel
    'import/no-commonjs': 'error',

    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/import/no-extraneous-dependencies.md
    // override default airbnb exceptions
    'import/no-extraneous-dependencies': ['error', { devDependencies: false }],
  },
};
