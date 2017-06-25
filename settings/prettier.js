module.exports = {
  plugins: ['prettier'],
  extends: ['prettier'],

  rules: {
    'prettier/prettier': ['error', { trailingComma: 'all', singleQuote: true, printWidth: 100 }],
    // disabled in prettier plugin, but compatible with prettier when 'multi-line'
    curly: ['error', 'multi-line'],
  },
};
