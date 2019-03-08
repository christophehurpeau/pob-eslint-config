'use strict';

module.exports = {
  extends: ['./plugins/node'].map(require.resolve),

  env: {
    browser: false,
    node: true,
    es6: true,
  },

  rules: {
    // allow process.exit
    'no-process-exit': 'off',
  },
};
