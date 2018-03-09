module.exports = {
  extends: [
    'eslint-config-airbnb-base',
    './settings/no-babel',
    './settings/globals',
    './settings/prettier',
    './rules/code-quality',
    './rules/style',
    './rules/expert',
  ].map(require.resolve),
};
