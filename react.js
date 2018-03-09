'use strict';

module.exports = {
  extends: [
    'eslint-config-airbnb',
    './settings/globals',
    './settings/prettier',
    './settings/react',
    './settings/jest',
    './rules/code-quality',
    './rules/style',
    './rules/expert',
    './rules/babel',
    './rules/react',
  ].map(require.resolve),
  parser: 'babel-eslint',
};
