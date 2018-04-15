'use strict';

module.exports = {
  extends: [
    './index',
    'eslint-config-airbnb-base/rules/strict',
    './settings/consistency',
    './rules/consistency',
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
  },
};
