'use strict';

module.exports = {
  extends: [
    'eslint-config-airbnb-base',
    '@pob/eslint-config/lib/plugins/prettier',
    '@pob/eslint-config/lib/plugins/unicorn',
    '@pob/eslint-config/lib/rules/best-practices',
    '@pob/eslint-config/lib/rules/code-quality',
    '@pob/eslint-config/lib/rules/style',
    '@pob/eslint-config/lib/rules/expert',
  ].map(require.resolve),

  parserOptions: {
    sourceType: 'module',
  },

  rules: {
    // 'new-cap': 0,
    // 'babel/new-cap':  [2, { newIsCap: true }],
    // 'object-curly-spacing': 0,
    // 'babel/object-curly-spacing': [2, 'always'],

    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-commonjs.md
    // disallow require when using babel
    'import/no-commonjs': 'error',

    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/import/no-extraneous-dependencies.md
    // override default airbnb exceptions
    'import/no-extraneous-dependencies': ['error', { devDependencies: false }],

    'import/no-anonymous-default-export': [
      'error',
      {
        allowArray: true,
        allowArrowFunction: false,
        allowAnonymousClass: false,
        allowAnonymousFunction: false,
        allowCallExpression: true,
        allowLiteral: true,
        allowObject: true,
      },
    ],
  },
};
