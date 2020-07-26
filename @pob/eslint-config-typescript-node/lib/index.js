'use strict';

module.exports = {
  extends: ['./plugins/node'].map(require.resolve),

  env: {
    browser: false,
    node: true,
  },

  rules: {
    // ensure deprecated eslint rules are disabled
    'callback-return': 'off',
    'global-require': 'off',
    'handle-callback-err': 'off',
    'no-mixed-requires': 'off',
    'no-new-require': 'off',
    'no-path-concat': 'off',
    'no-process-env': 'off',
    'no-process-exit': 'off',
    'no-restricted-modules': 'off',
    'no-sync': 'off',
  },
};
