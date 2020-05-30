<h3 align="center">
  @pob/use-eslint-plugin
</h3>

<p align="center">
  check plugin version between dependency and root
</p>

<p align="center">
  <a href="https://npmjs.org/package/@pob/use-eslint-plugin"><img src="https://img.shields.io/npm/v/@pob/use-eslint-plugin.svg?style=flat-square"></a>
  <a href="https://david-dm.org/christophehurpeau/eslint-config-pob?path=@pob/use-eslint-plugin"><img src="https://david-dm.org/christophehurpeau/eslint-config-pob.svg?path=@pob/use-eslint-plugin?style=flat-square"></a>
</p>

## Install

```bash
npm install --save @pob/use-eslint-plugin
```

## Usage

```js
'use strict';

const usePlugin = require('@pob/use-eslint-plugin');

usePlugin(require('eslint-plugin-prettier/package.json'));

module.exports = {
  plugins: ['prettier'],

  rules: {
    'prettier/prettier': 'error',
  },
};
```

@pob/use-eslint-plugin will ensure both version from this package config and the root package has the same value
