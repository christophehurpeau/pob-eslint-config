module.exports = {
  extends: [
    'eslint-config-airbnb-base',
    './settings/globals',
    './rules/style',
  ].map(require.resolve),
};
