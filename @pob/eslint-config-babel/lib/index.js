'use strict';

module.exports = {
  extends: ['@pob/eslint-config-babel-common'].map(require.resolve),

  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module',
  },
};
