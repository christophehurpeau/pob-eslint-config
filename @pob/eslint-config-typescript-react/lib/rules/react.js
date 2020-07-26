'use strict';

module.exports = {
  rules: {
    /* added rules */

    // Enforce event handler naming conventions in JSX
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-handler-names.md
    // 'react/jsx-handler-names': [
    //   'error',
    //   {
    //     eventHandlerPrefix: 'handle',
    //     eventHandlerPropPrefix: 'on',
    //   },
    // ],

    // Prevent direct mutation of this.state
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-direct-mutation-state.md
    'react/no-direct-mutation-state': 'error',

    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-sort-props.md
    'react/jsx-sort-props': [
      'error',
      {
        noSortAlphabetically: true,
        reservedFirst: true,
        shorthandFirst: true,
        callbacksLast: true,
      },
    ],

    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-sort-props.md
    'react/sort-prop-types': [
      'error',
      {
        noSortAlphabetically: true,
        requiredFirst: false,
        callbacksLast: true,
      },
    ],

    'react/function-component-definition': [
      'error',
      {
        namedComponents: 'function-declaration',
        unnamedComponents: 'arrow-function',
      },
    ],

    /* changed rules */

    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-duplicate-props.md
    // don't ignore case
    'react/jsx-no-duplicate-props': 'error',

    // https://github.com/yannickcr/eslint-plugin-react/blob/843d71a432baf0f01f598d7cf1eea75ad6896e4b/docs/rules/sort-comp.md
    'react/sort-comp': [
      'error',
      {
        order: [
          'static-variables',
          'static-methods',
          'instance-variables',
          'lifecycle',
          'getters',
          'setters',
          'instance-methods',
          '/^(on|handle).+$/',
          'everything-else',
          'rendering',
        ],
        groups: {
          lifecycle: [
            'state',
            'constructor',
            'getDerivedStateFromProps',
            'componentWillMount',
            'UNSAFE_componentWillMount',
            'componentDidMount',
            'componentWillReceiveProps',
            'UNSAFE_componentWillReceiveProps',
            'shouldComponentUpdate',
            'componentWillUpdate',
            'UNSAFE_componentWillUpdate',
            'getSnapshotBeforeUpdate',
            'componentDidUpdate',
            'componentDidCatch',
            'componentWillUnmount',
          ],
          rendering: ['/^render.+$/', 'render'],
        },
      },
    ],

    // use class fields
    'react/state-in-constructor': ['error', 'never'],

    // use static public field
    'react/static-property-placement': ['error', 'static public field'],

    /* disabled rules */

    // https://github.com/yannickcr/eslint-plugin-react/issues/1009
    'react/require-default-props': 'off',

    // disable force destructuring for state and props
    'react/destructuring-assignment': 'off',

    // project should use babel-plugin-transform-react-remove-prop-types
    'react/forbid-foreign-prop-types': 'off',

    // allow props spreading
    'react/jsx-props-no-spreading': 'off',
  },
};
