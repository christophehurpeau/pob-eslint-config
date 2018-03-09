'use strict';

module.exports = {
  extends: [
    './index',
    'eslint-config-airbnb-base/rules/strict',
    './settings/babel',
    './settings/jest',
    './rules/babel',
  ].map(require.resolve),
  parser: 'babel-eslint',
};
