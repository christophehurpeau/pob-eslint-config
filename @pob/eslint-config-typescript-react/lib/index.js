'use strict';

module.exports = {
  extends: [
    'eslint-config-airbnb/rules/react',
    'eslint-config-airbnb/rules/react-a11y',
    'eslint-config-airbnb/rules/react-hooks',
    'eslint-config-prettier',
    'eslint-config-prettier/react',
    '@pob/eslint-config/lib/rules/expert', // reapply expert: eslint-config-airbnb/rules/react modifies no-underscore-dangle
    './rules/react',
  ].map(require.resolve),

  settings: {
    'import/resolver': {
      node: {
        extensions: ['.mjs', '.js', '.json', '.ts', '.tsx', '.d.ts', '.d.tsx'],
      },
    },
  },

  rules: {
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        mjs: 'never',
        js: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
    'react/jsx-filename-extension': ['error', { extensions: ['tsx'] }],

    // override js config for babel plugin react-require
    'react/react-in-jsx-scope': 'error',
  },
};
