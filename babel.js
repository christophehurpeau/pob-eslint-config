module.exports = {
    extends: [
        'eslint-config-airbnb-base',
        'eslint-config-airbnb-base/rules/strict',
        './rules/style',
    ].map(require.resolve),
    parser: 'babel-eslint',
    rules: {
        // https://github.com/babel/babel-eslint/issues/316
        'generator-star-spacing': 'off',
    }
};
