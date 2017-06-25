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
