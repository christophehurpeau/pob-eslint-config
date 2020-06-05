'use strict';

module.exports = {
  extends: ['@pob/eslint-config-node/lib/plugins/node'].map(require.resolve),

  rules: {
    // disable no-unsupported-features when using babel
    'node/no-unsupported-features': 'off',
    'node/no-unsupported-features/es-syntax': 'off',
    'node/no-missing-import': 'off',
    'node/no-unpublished-import': 'off',
  },
};
