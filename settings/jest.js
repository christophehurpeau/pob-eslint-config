module.exports = {
  overrides: [
    {
      files: ['src/**/__tests__/*.js', 'src/**/*test.js'],
      env: { jest: true },
      rules: {
        'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
      },
    },
  ],
};