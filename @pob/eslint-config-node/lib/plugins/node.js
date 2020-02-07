'use strict';

const usePlugin = require('@pob/use-eslint-plugin');

usePlugin(require('eslint-plugin-node/package.json'));

module.exports = {
  plugins: ['node'],
  extends: ['plugin:node/recommended'],

  rules: {
    // already checked by import plugin
    'node/no-unpublished-require': 'off',
    'node/no-extraneous-require': 'off',
  },
  // env: {
  //   browser: false,
  //   node: true,
  //   es6: true,
  // },
};
