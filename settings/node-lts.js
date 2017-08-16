module.exports = {
  plugins: ['node'],
  extends: ['plugin:node/recommended'],
  parserOptions: {
    ecmaVersion: 2015,
    sourceType: 'script',
    ecmaFeatures: {
      experimentalObjectRestSpread: false,
    },
  },
  env: {
    es6: true,
  },
};
