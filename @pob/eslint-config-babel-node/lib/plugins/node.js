'use strict';

module.exports = {
  plugins: ['node'],
  extends: ['plugin:node/recommended'],

  rules: {
    // like commons
    'node/no-deprecated-api': 'error',
    'node/no-extraneous-import': 'error',
    'node/no-missing-import': 'error',
    'node/no-unpublished-import': 'error',
    'node/no-unpublished-bin': 'error',
    'node/no-unpublished-require': 'error',
    'node/no-unsupported-features/es-builtins': 'error',
    'node/no-unsupported-features/node-builtins': 'error',
    'node/process-exit-as-throw': 'error',
    'node/shebang': 'error',

    // disable no-unsupported-features when using babel
    'node/no-unsupported-features': 'off',
    'node/no-unsupported-features/es-syntax': 'off',
  },
};
