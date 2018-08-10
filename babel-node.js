'use strict';

module.exports = {
  extends: ['./babel', './node'].map(require.resolve),

  rules: {
    // disable no-unsupported-features when using babel
    'node/no-unsupported-features': 'off',
    'node/no-unsupported-features/es-syntax': 'off',
  },
};
