'use strict';

const usePlugin = require('@pob/use-eslint-plugin');

usePlugin(require('eslint-plugin-node/package.json'));

const overrideRules = {
  // Disable rules already checked by import plugin
  'node/no-unpublished-require': 'off',
  'node/no-extraneous-require': 'off',
  'node/no-unpublished-import': 'off',
  'node/no-extraneous-import': 'off',

  // Allow process.exit
  'node/no-process-exit': 'off',
};

module.exports = {
  plugins: ['node'],
  extends: ['plugin:node/recommended-script'],
  rules: overrideRules,

  overrides: [
    {
      files: ['*.mjs'],
      extends: ['plugin:node/recommended-module'],
      rules: overrideRules,
    },
  ],
};
