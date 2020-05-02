'use strict';

const usePlugin = require('@pob/use-eslint-plugin');

usePlugin(require('eslint-plugin-node/package.json'));

module.exports = {
  plugins: ['node'],

  rules: {
    // like commons
    'node/no-deprecated-api': 'error',
    'node/no-unpublished-bin': 'error',
    'node/no-unsupported-features/es-builtins': 'error',
    'node/no-unsupported-features/node-builtins': 'error',
    'node/process-exit-as-throw': 'error',
    'node/shebang': 'error',

    // disable no-unsupported-features when using babel
    'node/no-unsupported-features': 'off',
    'node/no-unsupported-features/es-syntax': 'off',
    'node/no-missing-import': 'off',
    'node/no-unpublished-import': 'off',

    // already checked by import plugin
    'node/no-extraneous-import': 'off',
    'node/no-unpublished-require': 'off',
  },
};
