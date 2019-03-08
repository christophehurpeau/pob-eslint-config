'use strict';

module.exports = {
  extends: ['@pob/eslint-config-node'].map(require.resolve),

  rules: {
    // disable no-unsupported-features when using babel
    'node/no-unsupported-features': 'off',
    'node/no-unsupported-features/es-syntax': 'off',
  },
};
