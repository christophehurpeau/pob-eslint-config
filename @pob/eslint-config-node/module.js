'use strict';

const overrideRules = {
  // Disable rules already checked by import plugin
  'node/no-unpublished-require': 'off',
  'node/no-extraneous-require': 'off',
  'node/no-unpublished-import': 'off',
  'node/no-extraneous-import': 'off',

  // Allow process.exit
  'node/no-process-exit': 'off',
};

module.exports = {
  extends: ['plugin:node/recommended-module'],
  rules: overrideRules,
};
