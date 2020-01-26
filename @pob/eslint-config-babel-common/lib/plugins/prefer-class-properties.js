'use strict';

const usePlugin = require('@pob/use-eslint-plugin');

usePlugin(require('eslint-plugin-prefer-class-properties/package.json'));

module.exports = {
  plugins: ['prefer-class-properties'],

  rules: {
    // https://www.npmjs.com/package/eslint-plugin-prefer-class-properties
    'prefer-class-properties/prefer-class-properties': 'error',
  },
};
