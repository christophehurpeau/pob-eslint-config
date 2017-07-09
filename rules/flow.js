module.exports = {
  plugins: ['flowtype'],
  rules: {
    'flowtype/boolean-style': ['error', 'boolean'],
    'flowtype/no-dupe-keys': 'error',
    'flowtype/delimiter-dangle': ['error', 'always-multiline'],
    'flowtype/no-weak-types': 'warn',
    'flowtype/object-type-delimiter': 'error',
    'flowtype/require-parameter-type': ['warn', { excludeArrowFunctions: 'expressionsOnly' }],
    'flowtype/require-return-type': [
      'warn',
      'always',
      {
        excludeArrowFunctions: true,
        annotateUndefined: 'never',
      },
    ],
    'flowtype/semi': 'error',
    'flowtype/space-after-type-colon': 'error',
    'flowtype/space-before-generic-bracket': 'error',
    'flowtype/space-before-type-colon': 'error',
    'flowtype/type-id-match': 'error',
    'flowtype/union-intersection-spacing': 'error',
    'flowtype/use-flow-type': ['error', { 'no-unused-vars': 1 }],
  },
};
