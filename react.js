'use strict';

module.exports = {
  extends: [
    'eslint-config-airbnb',
    require.resolve('eslint-config-prettier'),
    require.resolve('eslint-config-prettier/react'),
    './settings/react',
    './rules/react',
  ].map(require.resolve),
};
