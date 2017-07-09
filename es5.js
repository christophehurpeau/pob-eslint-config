module.exports = {
  extends: [
    'eslint-config-airbnb-base',
    './settings/globals',
    './settings/prettier-es5',
    './rules/code-quality',
    './rules/style',
    './rules/expert',
  ].map(require.resolve),
};
