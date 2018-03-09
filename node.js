'use strict';

module.exports = {
  extends: ['./index', './settings/prettier-es5', './settings/node', './rules/node'].map(
    require.resolve
  ),
};
