'use strict';

const usePlugin = require('@pob/use-eslint-plugin');

usePlugin(require('eslint-plugin-node/package.json'));

module.exports = {
  plugins: ['node'],
  extends: ['plugin:node/recommended-script'],

  rules: {
    // Disable rules already checked by import plugin
    'node/no-unpublished-require': 'off',
    'node/no-extraneous-require': 'off',

    // Allow process.exit
    'node/no-process-exit': 'off',
  },
};
