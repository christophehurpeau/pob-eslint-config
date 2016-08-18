module.exports = {
  plugins: ['flowtype'],
  rules: {
    'flowtype/require-parameter-type': ['warn', { excludeArrowFunctions: 'expressionsOnly' }],
    'flowtype/require-return-type': ['warn', 'always', {
      excludeArrowFunctions: true,
      annotateUndefined: 'never',
    }],

    'flowtype/space-before-type-colon': ['error'],
    'flowtype/space-after-type-colon': ['error'],
    'flowtype/type-id-match': ['error'],
    'flowtype/valid-syntax': ['error'],
  },
};
