'use strict';

module.exports = {
  extends: ['./react'].map(require.resolve),

  settings: {
    'import/resolver': {
      node: {
        extensions: ['.mjs', '.js', '.json', '.ts', '.tsx'],
      },
    },
  },

  rules: {
    'import/extensions': ['error', { extensions: ['ts', 'tsx', 'js'] }],
    'react/jsx-filename-extension': ['error', { extensions: ['tsx'] }],

    // override js config for babel plugin react-require
    'react/react-in-jsx-scope': 'error',
  },
};
