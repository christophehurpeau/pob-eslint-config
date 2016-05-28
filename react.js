module.exports = {
    extends: [
        'eslint-config-airbnb',
        './settings/react',
        './rules/style',
        './rules/react',
    ].map(require.resolve),
    parser: 'babel-eslint'
};
