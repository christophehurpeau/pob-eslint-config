module.exports = {
    extends: [
        'eslint-config-airbnb',
        './rules/style',
        './rules/react',
    ].map(require.resolve),
    parser: 'babel-eslint'
};
