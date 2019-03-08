<h3 align="center">
  @pob/eslint-config-babel
</h3>

<p align="center">
  eslint config files
</p>

<p align="center">
  <a href="https://npmjs.org/package/@pob/eslint-config-babel"><img src="https://img.shields.io/npm/v/@pob/eslint-config-babel.svg?style=flat-square"></a>
  <a href="https://david-dm.org/christophehurpeau/eslint-config-pob?path=packages/@pob/eslint-config-babel"><img src="https://david-dm.org/christophehurpeau/eslint-config-pob.svg?path=packages/@pob/eslint-config-babel?style=flat-square"></a>
</p>

### base

1. `npm install --save-dev eslint eslint-config-pob eslint-plugin-prettier eslint-plugin-import`
2. add `"extends": "pob"` to your .eslintrc

### babel

Lint with babel parser

1. `npm install --save-dev eslint babel-eslint eslint-config-pob eslint-plugin-prettier eslint-plugin-import`
2. add `"extends": "pob/babel"` to your .eslintrc

### flow

Force to use flowtype

1. `npm install --save-dev eslint babel-eslint eslint-config-pob eslint-plugin-prettier eslint-plugin-import eslint-plugin-flow`
2. add `"extends": ["pob/babel", "pob/flow"]` to your .eslintrc

### react

Lint with babel parser with react

1. `npm install --save-dev eslint babel-eslint eslint-config-pob eslint-config-airbnb eslint-plugin-prettier eslint-plugin-import eslint-plugin-react eslint-plugin-jsx-a11y`
2. add `"extends": ["pob/babel", "pob/react"]` to your .eslintrc

Lint with babel parser with react and flow

1. `npm install --save-dev eslint babel-eslint eslint-config-pob eslint-config-airbnb eslint-plugin-prettier eslint-plugin-import eslint-plugin-react eslint-plugin-jsx-a11y eslint-plugin-flow`
2. add `"extends": ["pob/babel", "pob/flow", "pob/react"]` to your .eslintrc

### node

1. `npm install --save-dev eslint eslint-config-pob eslint-plugin-prettier eslint-plugin-node`
2. add `"extends": ["pob/node"]` to your .eslintrc
