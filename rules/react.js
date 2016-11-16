module.exports = {
  rules: {
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-duplicate-props.md
    // don't ignore case
    'react/jsx-no-duplicate-props': 'error',

    // Prevent direct mutation of this.state
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-direct-mutation-state.md
    'react/no-direct-mutation-state': 'error',

    // babel plugin react-require
    'react/react-in-jsx-scope': 'off',

    // deprecated rule (now import/extensions)
    'react/require-extension': 'off',
  },
};
