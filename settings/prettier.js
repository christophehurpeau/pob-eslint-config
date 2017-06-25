module.exports = {
  plugins: ['prettier'],
  extends: ['prettier'],

  rules: {
    'prettier/prettier': ['error', { trailingComma: 'all', singleQuote: true }],
    // disabled in prettier plugin, but compatible with prettier when 'multi-line'
    curly: ['error', 'multi-line'],
  },
};
