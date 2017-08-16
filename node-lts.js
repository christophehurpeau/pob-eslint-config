module.exports = {
  extends: [
    'eslint-config-airbnb-base/legacy',
    './settings/globals',
    './settings/prettier-es5',
    './settings/node-lts',
    './rules/code-quality',
    './rules/style',
    './rules/expert',
    './rules/node-lts',
  ].map(require.resolve),
};
