'use strict';

module.exports = {
  extends: ['.'].map(require.resolve),

  env: {
    browser: true,
  },

  globals: {
    __DEV__: true,
  },

  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.ios.js', '.android.js'],
      },
    },
  },

  rules: {
    'react/no-unescaped-entities': 'off',
  },
};
