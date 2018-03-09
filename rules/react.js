module.exports = {
  rules: {
    /* added rules */

    // Enforce event handler naming conventions in JSX
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-handler-names.md
    'react/jsx-handler-names': ['error', {
      eventHandlerPrefix: 'handle',
      eventHandlerPropPrefix: 'on',
    }],

    // Prevent direct mutation of this.state
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-direct-mutation-state.md
    'react/no-direct-mutation-state': 'error',

    /* changed rules */

    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-duplicate-props.md
    // don't ignore case
    'react/jsx-no-duplicate-props': 'error',

    // https://github.com/yannickcr/eslint-plugin-react/blob/843d71a432baf0f01f598d7cf1eea75ad6896e4b/docs/rules/sort-comp.md
    'react/sort-comp': [
      'error',
      {
        order: [
          'type-annotations', // added this
          'static-methods',
          'instance-variables',
          'lifecycle',
          '/^on.+$/',
          'getters',
          'setters',
          '/^(get|set)(?!(InitialState$|DefaultProps$|ChildContext$)).+$/',
          'instance-methods',
          'everything-else',
          'rendering',
        ],
        groups: {
          lifecycle: [
            'displayName',
            'propTypes',
            'contextTypes',
            'childContextTypes',
            'mixins',
            'statics',
            'defaultProps',
            // 'constructor', moved constructor
            'getDefaultProps',
            'getInitialState',
            'state',
            'constructor', // constructor moved here
            'getChildContext',
            'componentWillMount',
            'componentDidMount',
            'componentWillReceiveProps',
            'shouldComponentUpdate',
            'componentWillUpdate',
            'componentDidUpdate',
            'componentWillUnmount',
          ],
          rendering: [
            '/^render.+$/',
            'render'
          ],
        },
      },
    ],

    /* disabled rules */

    // babel plugin react-require
    'react/react-in-jsx-scope': 'off',

    // https://github.com/yannickcr/eslint-plugin-react/issues/1009
    'react/require-default-props': 'off',
  },
};
