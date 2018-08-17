<a name="22.0.0"></a>
# [22.0.0](https://github.com/christophehurpeau/eslint-config-pob/compare/v21.2.1...v22.0.0) (2018-08-17)


### Features

* add eslint-plugin-filenames ([8f48d6d](https://github.com/christophehurpeau/eslint-config-pob/commit/8f48d6d))
* enable react/jsx-sort-props and react/sort-prop-types ([e6e7458](https://github.com/christophehurpeau/eslint-config-pob/commit/e6e7458))
* reenable rules curly and quotes disabled by prettier config ([0eb3b20](https://github.com/christophehurpeau/eslint-config-pob/commit/0eb3b20))


### BREAKING CHANGES

* new rules enabled: react/jsx-sort-props react/sort-prop-types
* rules `curly` and `quotes` reenabled
* eslint-plugin-filenames


<a name="21.2.1"></a>
## [21.2.1](https://github.com/christophehurpeau/eslint-config-pob/compare/v21.2.0...v21.2.1) (2018-08-10)


### Bug Fixes

* babel-node turn off no-unsupported-features/es-syntax ([995bca4](https://github.com/christophehurpeau/eslint-config-pob/commit/995bca4))


<a name="21.2.0"></a>
# [21.2.0](https://github.com/christophehurpeau/eslint-config-pob/compare/v21.1.2...v21.2.0) (2018-08-09)


### Features

* add babel-node config ([f6a108e](https://github.com/christophehurpeau/eslint-config-pob/commit/f6a108e))


<a name="21.1.2"></a>
## [21.1.2](https://github.com/christophehurpeau/eslint-config-pob/compare/v21.1.1...v21.1.2) (2018-08-07)


### Bug Fixes

* **typescript:** disable no-restricted-globals ([2707ab3](https://github.com/christophehurpeau/eslint-config-pob/commit/2707ab3))


<a name="21.1.1"></a>
## [21.1.1](https://github.com/christophehurpeau/eslint-config-pob/compare/v21.1.0...v21.1.1) (2018-07-24)


### Bug Fixes

* disable unicorn/no-fn-reference-in-iterator ([0826095](https://github.com/christophehurpeau/eslint-config-pob/commit/0826095))


<a name="21.1.0"></a>
# [21.1.0](https://github.com/christophehurpeau/eslint-config-pob/compare/v20.0.0...v21.1.0) (2018-07-06)


### Features

* eslint 5, airbnb-base 13, airbnb 17 ([62c1119](https://github.com/christophehurpeau/eslint-config-pob/commit/62c1119))
* eslint-plugin-prettier@2.6.2 ([0de9ae3](https://github.com/christophehurpeau/eslint-config-pob/commit/0de9ae3))


### BREAKING CHANGES

* airbnb-base v13, airbnb v17


<a name="21.0.0"></a>
# [21.0.0](https://github.com/christophehurpeau/eslint-config-pob/compare/v20.0.0...v21.0.0) (2018-07-06)


<a name="20.0.0"></a>
# [20.0.0](https://github.com/christophehurpeau/eslint-config-pob/compare/v19.1.0...v20.0.0) (2018-06-17)


### Features

* update dependencies and add some rules ([4ac2e0a](https://github.com/christophehurpeau/eslint-config-pob/commit/4ac2e0a))


### BREAKING CHANGES

* enabled rules: react/jsx-props-no-multi-spaces, import/named, import/no-cycle, import/no-useless-path-segments


<a name="19.1.0"></a>
# [19.1.0](https://github.com/christophehurpeau/eslint-config-pob/compare/v19.0.2...v19.1.0) (2018-04-21)


### Features

* typescript add pob-babel in core-modules (global typings) ([9fc15bc](https://github.com/christophehurpeau/eslint-config-pob/commit/9fc15bc))


<a name="19.0.2"></a>
## [19.0.2](https://github.com/christophehurpeau/eslint-config-pob/compare/v19.0.1...v19.0.2) (2018-04-20)


### Bug Fixes

* remove globals (errors in compiled code) ([bd54e1b](https://github.com/christophehurpeau/eslint-config-pob/commit/bd54e1b))


<a name="19.0.1"></a>
## [19.0.1](https://github.com/christophehurpeau/eslint-config-pob/compare/v19.0.0...v19.0.1) (2018-04-15)


### Bug Fixes

* react config with typescript ([9bdf4a8](https://github.com/christophehurpeau/eslint-config-pob/commit/9bdf4a8))


<a name="19.0.0"></a>
# [19.0.0](https://github.com/christophehurpeau/eslint-config-pob/compare/v18.0.0...v19.0.0) (2018-04-15)


<a name="18.0.0"></a>
# [18.0.0](https://github.com/christophehurpeau/eslint-config-pob/compare/v17.1.0...v18.0.0) (2018-03-09)


### Features

* add eslint-config-airbnb-base as a dependency and update README ([54b0dab](https://github.com/christophehurpeau/eslint-config-pob/commit/54b0dab))
* add eslint-config-airbnb-base as a dependency, node config, and update README ([79103ca](https://github.com/christophehurpeau/eslint-config-pob/commit/79103ca))
* add import/order and import/no-self-import ([ed9171f](https://github.com/christophehurpeau/eslint-config-pob/commit/ed9171f))
* add prefer-class-properties ([745c605](https://github.com/christophehurpeau/eslint-config-pob/commit/745c605))
* enable import/no-commonjs when using babel ([298023a](https://github.com/christophehurpeau/eslint-config-pob/commit/298023a))
* enable no-return-assign ([a3ff02b](https://github.com/christophehurpeau/eslint-config-pob/commit/a3ff02b))
* enable prefer-const ([9c4d59c](https://github.com/christophehurpeau/eslint-config-pob/commit/9c4d59c))
* move eslint-config-prettier to a dependency ([b510e6f](https://github.com/christophehurpeau/eslint-config-pob/commit/b510e6f))
* react enable react/jsx-handler-names ([a169acc](https://github.com/christophehurpeau/eslint-config-pob/commit/a169acc))


### BREAKING CHANGES

* enabled prefer-class-properties
* no need for eslint-config-prettier as a peer dependency
* import/order and import/no-self-import enabled
* enabled react/jsx-handler-names
* import/no-commonjs enabled
* http://eslint.org/docs/rules/prefer-const
* https://eslint.org/docs/rules/no-return-assign


<a name="17.1.0"></a>
# [17.1.0](https://github.com/christophehurpeau/eslint-config-pob/compare/v17.0.0...v17.1.0) (2017-11-28)


### Features

* expert rule prefer-destructuring ([5303692](https://github.com/christophehurpeau/eslint-config-pob/commit/5303692))


<a name="17.0.0"></a>
# [17.0.0](https://github.com/christophehurpeau/eslint-config-pob/compare/v16.0.4...v17.0.0) (2017-10-07)


### Features

* update dependencies ([6279e81](https://github.com/christophehurpeau/eslint-config-pob/commit/6279e81))


### BREAKING CHANGES

* peer dependencies updated


<a name="16.0.4"></a>
## [16.0.4](https://github.com/christophehurpeau/eslint-config-pob/compare/v16.0.3...v16.0.4) (2017-08-16)


### Bug Fixes

* previous config ([bae612d](https://github.com/christophehurpeau/eslint-config-pob/commit/bae612d))


<a name="16.0.3"></a>
## [16.0.3](https://github.com/christophehurpeau/eslint-config-pob/compare/v16.0.2...v16.0.3) (2017-08-16)


### Bug Fixes

* disable node rule no-process-exit ([0faabe5](https://github.com/christophehurpeau/eslint-config-pob/commit/0faabe5))


<a name="16.0.2"></a>
## [16.0.2](https://github.com/christophehurpeau/eslint-config-pob/compare/v16.0.1...v16.0.2) (2017-08-16)


### Bug Fixes

* remove optional peerDependency plugin node ([86b8137](https://github.com/christophehurpeau/eslint-config-pob/commit/86b8137))


<a name="16.0.1"></a>
## [16.0.1](https://github.com/christophehurpeau/eslint-config-pob/compare/v16.0.0...v16.0.1) (2017-08-16)


### Bug Fixes

* add eslint-plugin-node for node-lts ([701a91c](https://github.com/christophehurpeau/eslint-config-pob/commit/701a91c))


<a name="16.0.0"></a>
# [16.0.0](https://github.com/christophehurpeau/eslint-config-pob/compare/v15.0.0...v16.0.0) (2017-08-16)


### Features

* replace config es5 by node-lts ([9e2c113](https://github.com/christophehurpeau/eslint-config-pob/commit/9e2c113))


### BREAKING CHANGES

* removed config es5


<a name="15.0.0"></a>
# [15.0.0](https://github.com/christophehurpeau/eslint-config-pob/compare/v14.1.2...v15.0.0) (2017-08-15)


### Features

* jest config with eslint 4 ([fcfafc6](https://github.com/christophehurpeau/eslint-config-pob/commit/fcfafc6))


<a name="14.1.2"></a>
## [14.1.2](https://github.com/christophehurpeau/eslint-config-pob/compare/v14.1.1...v14.1.2) (2017-07-25)


### Bug Fixes

* remove indent rule, disabled in eslint-config-prettier ([9fa3ad3](https://github.com/christophehurpeau/eslint-config-pob/commit/9fa3ad3))


<a name="14.1.1"></a>
## [14.1.1](https://github.com/christophehurpeau/eslint-config-pob/compare/v14.1.0...v14.1.1) (2017-07-13)


### Bug Fixes

* flowtype/use-flow-type ([99f4a1a](https://github.com/christophehurpeau/eslint-config-pob/commit/99f4a1a))


<a name="14.1.0"></a>
# [14.1.0](https://github.com/christophehurpeau/eslint-config-pob/compare/v14.0.1...v14.1.0) (2017-07-09)


### Features

* add pob/es5 ([1305d00](https://github.com/christophehurpeau/eslint-config-pob/commit/1305d00))


<a name="14.0.1"></a>
## [14.0.1](https://github.com/christophehurpeau/eslint-config-pob/compare/v14.0.0...v14.0.1) (2017-06-25)


### Bug Fixes

* prettier printWidth ([5681969](https://github.com/christophehurpeau/eslint-config-pob/commit/5681969))


<a name="14.0.0"></a>
# [14.0.0](https://github.com/christophehurpeau/eslint-config-pob/compare/v13.0.0...v14.0.0) (2017-06-25)


### Features

* prettier ([d47645a](https://github.com/christophehurpeau/eslint-config-pob/commit/d47645a))


<a name="13.0.0"></a>
# [13.0.0](https://github.com/christophehurpeau/eslint-config-pob/compare/v12.1.0...v13.0.0) (2017-06-17)


### Features

* react/sort-comp add type-annotations and move constructor after state ([f11910c](https://github.com/christophehurpeau/eslint-config-pob/commit/f11910c))


### BREAKING CHANGES

* react/sort-comp


<a name="12.1.0"></a>
# [12.1.0](https://github.com/christophehurpeau/eslint-config-pob/compare/v12.0.0...v12.1.0) (2017-06-17)


### Features

* update dependencies ([ca414d3](https://github.com/christophehurpeau/eslint-config-pob/commit/ca414d3))


<a name="12.0.0"></a>
# [12.0.0](https://github.com/christophehurpeau/eslint-config-pob/compare/v11.1.0...v12.0.0) (2017-05-14)


### Features

* add SERVER global ([7638f11](https://github.com/christophehurpeau/eslint-config-pob/commit/7638f11))
* enable arrow-parens https://github.com/eslint/eslint/pull/7436 ([bafe419](https://github.com/christophehurpeau/eslint-config-pob/commit/bafe419))


### BREAKING CHANGES

* enabled rule arrow-parens


### v11.1.0

- [`33925b6`](https://github.com/christophehurpeau/eslint-config-pob/commit/33925b63cd618c2d3e3ed24171e45f694e20902c) add expert file and disable no-await-in-loop, allow for of (Christophe Hurpeau)

### v11.0.0

- [`2ed2f28`](https://github.com/christophehurpeau/eslint-config-pob/commit/2ed2f289790390dc52bc09bd0fa4d29a9f998132) add code quality (Christophe Hurpeau)

### v10.0.1

- [`8b2bad4`](https://github.com/christophehurpeau/eslint-config-pob/commit/8b2bad4677533236811a8c75c25eaa4b537b1381) eslint-plugin-babel@4 (Christophe Hurpeau)

### v9.0.1

- [`d0e5d08`](https://github.com/christophehurpeau/eslint-config-pob/commit/d0e5d084c9a331545e35ba4f6592d8b4e8e8725d) babel remove babel/flow-object-type (Christophe Hurpeau)

### v9.0.0

#### Added rules

- flow: object-type-delimiter
- flow: delimiter-dangle (always multiline)
- flow: warning no-weak-types

#### Commits

- [`9413c1d`](https://github.com/christophehurpeau/eslint-config-pob/commit/9413c1daf05815cb0ef30f7cc8908c1ff9dc803e) add flowtype rules, disable react/proptypes with flow (Christophe Hurpeau)


### v8.0.0

- [`d4e09c2`](https://github.com/christophehurpeau/eslint-config-pob/commit/d4e09c202ddd745a387ba43646b89fe93407b4a6) remove changed rule no-use-before-define (Christophe Hurpeau)

### v7.6.0

- [`e24e281`](https://github.com/christophehurpeau/eslint-config-pob/commit/e24e281151e6da7b297fcedf5d37d142bcfc45b5) disable react/forbid-prop-types with flow (Christophe Hurpeau)
- [`cc9b10b`](https://github.com/christophehurpeau/eslint-config-pob/commit/cc9b10b9e486ee4aca6365a63774ace200b22586) update dependencies (Christophe Hurpeau)

### v7.5.0

- [`b582f07`](https://github.com/christophehurpeau/eslint-config-pob/commit/b582f07dd54849d9435c1873c87814ce81c2788a) flow: remove valid-syntax (deprecated), add no-dupe-keys, boolean-style, semi, space-before-generic-bracket, union-intersection-spacing (Christophe Hurpeau)

### v7.4.0

- [`82b8484`](https://github.com/christophehurpeau/eslint-config-pob/commit/82b8484a0b7e9fec264f0d4e904f1502fe5228f6) babel support import type vs import for duplicates (Christophe Hurpeau)
- [`70408ec`](https://github.com/christophehurpeau/eslint-config-pob/commit/70408ec18e62cbb3733cd8302a8bd210847bd686) disable class-methods-use-this (Christophe Hurpeau)
- [`793afe3`](https://github.com/christophehurpeau/eslint-config-pob/commit/793afe3abdfc12e5ca7defa67af22d6d21f79bf3) peerDependencies: remove eslint 2.0 (Christophe Hurpeau)
- [`6f02579`](https://github.com/christophehurpeau/eslint-config-pob/commit/6f02579963b4da0ca855e7cb8cccb8f4c2c4aa54) update dev dependencies (Christophe Hurpeau)

### v7.3.2

- [`0d91187`](https://github.com/christophehurpeau/eslint-config-pob/commit/0d911878c5d15ce7fe102b137e07e3451277df35) disable import/no-named-as-default (Christophe Hurpeau)

### v7.3.1

- [`d5426b1`](https://github.com/christophehurpeau/eslint-config-pob/commit/d5426b1da36d33cb053c2cf77d29a35fecba43bb) disable arrow-parens because it breaks with flow (Christophe Hurpeau)

### v7.3.0

- [`2d4097c`](https://github.com/christophehurpeau/eslint-config-pob/commit/2d4097c91d74cdae762f493a5b7e1a5bf231fdb9) upgrade dependencies and disable no-plusplus (Christophe Hurpeau)

### v7.2.0

- [`721a31f`](https://github.com/christophehurpeau/eslint-config-pob/commit/721a31fcfb4eec817fb72d354ff62081692f8ca3) update dependencies (Christophe Hurpeau)

### v7.1.0

- [`70476c4`](https://github.com/christophehurpeau/eslint-config-pob/commit/70476c49772ecc533ed9d7555c62c8a4dd3c6a86) flowtype warnings (Christophe Hurpeau)
- [`9d017ca`](https://github.com/christophehurpeau/eslint-config-pob/commit/9d017cad62525e175a3df43910a2b2d29457de0e) flow: add use-flow-type to fix unused-vars (Christophe Hurpeau)
- [`6e59a6b`](https://github.com/christophehurpeau/eslint-config-pob/commit/6e59a6b9f9a2c556242e4cef888eee6eb3899385) flow use comma, not semicolon (Christophe Hurpeau)
- [`790b003`](https://github.com/christophehurpeau/eslint-config-pob/commit/790b0032acf7faa0dbc01c9e39950696679999b1) globals: PRODUCTION, BROWSER and NODEJS (Christophe Hurpeau)

### v7.0.1

- [`9b8b9b6`](https://github.com/christophehurpeau/eslint-config-pob/commit/9b8b9b66df776d1ba32b7b3be5df93d36b46a758) jsx 2 spaces indent (Christophe Hurpeau)

### v7.0.0

- [`fdf6841`](https://github.com/christophehurpeau/eslint-config-pob/commit/fdf6841201de4a6c360648cbfa9883c265ef66f4) review rules, use 2 spaces indentation (Christophe Hurpeau)

### v6.1.6

- [`cb0e858`](https://github.com/christophehurpeau/eslint-config-pob/commit/cb0e858c94d1466f2c2b9fe16351ce79c22dcaec) add license file, per package.json (Waldir Pimenta)
- [`265d9cb`](https://github.com/christophehurpeau/eslint-config-pob/commit/265d9cb872eac1f277fb86469f87a94bf8d397f7) Merge pull request #12 from waldyrious/patch-1 (Christophe Hurpeau)
- [`c33f6f8`](https://github.com/christophehurpeau/eslint-config-pob/commit/c33f6f8cf1b82243c6ae527ac9ab7751eb788fa7) LICENSE (Christophe Hurpeau)
- [`aeda8d3`](https://github.com/christophehurpeau/eslint-config-pob/commit/aeda8d3c1e2fee7502a1778323fbf450b6dacb62) disable no-continue (Christophe Hurpeau)
- [`fa0942e`](https://github.com/christophehurpeau/eslint-config-pob/commit/fa0942e4e4309deb3895dcbcc4e5cdabeecbaa04) pob-release (Christophe Hurpeau)
- [`ca215dd`](https://github.com/christophehurpeau/eslint-config-pob/commit/ca215dd13bef2980aa475b47a020a5846843c163) update AUTHORS (Christophe Hurpeau)
