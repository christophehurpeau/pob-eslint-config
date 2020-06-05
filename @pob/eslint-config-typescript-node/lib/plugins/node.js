'use strict';

const usePlugin = require('@pob/use-eslint-plugin');

usePlugin(require('eslint-plugin-node/package.json'));

module.exports = {
  plugins: ['node'],
  extends: ['plugin:node/recommended-module'],

  rules: {
    // already checked by import plugin
    'node/no-unpublished-require': 'off',
    'node/no-extraneous-require': 'off',

    // disable no-unsupported-features when using babel
    'node/no-unsupported-features': 'off',
    'node/no-unsupported-features/es-syntax': 'off',
    'node/no-missing-import': 'off',
    'node/no-unpublished-import': 'off',
  },
};
