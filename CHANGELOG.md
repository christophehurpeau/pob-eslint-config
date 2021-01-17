# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# [43.0.0](https://github.com/christophehurpeau/eslint-config-pob/compare/v42.0.1...v43.0.0) (2021-01-17)


### Features

* configure mjs ([1c729b7](https://github.com/christophehurpeau/eslint-config-pob/commit/1c729b7e1f1f42a05d7c146f0e5cc9743bc7a9dd))


### BREAKING CHANGES

* you should use /root instead of reliing on override config





## [42.0.1](https://github.com/christophehurpeau/eslint-config-pob/compare/v42.0.0...v42.0.1) (2021-01-09)


### Bug Fixes

* disable arrow-body-style ([27272e3](https://github.com/christophehurpeau/eslint-config-pob/commit/27272e383b4f498d16daef0345d7bfe249da0e84))





# [42.0.0](https://github.com/christophehurpeau/eslint-config-pob/compare/v41.1.3...v42.0.0) (2021-01-09)


### Features

* update eslint-config-prettier ([5195da6](https://github.com/christophehurpeau/eslint-config-pob/commit/5195da6c6deeeaf21b64d5b52f355ee23a5362b5))
* update eslint-plugin-unicorn and enable two new rules ([738dd3f](https://github.com/christophehurpeau/eslint-config-pob/commit/738dd3f5635bbe45318e2d15d6ba08a500a6c716))


### BREAKING CHANGES

* enabled rules unicorn/prefer-array-some and unicorn/prefer-default-parameters





## [41.1.3](https://github.com/christophehurpeau/eslint-config-pob/compare/v41.1.2...v41.1.3) (2020-12-20)


### Bug Fixes

* no-use-before-define ([e66faf2](https://github.com/christophehurpeau/eslint-config-pob/commit/e66faf26c3bf00f1092d84fee90481ad2e47a013))





## [41.1.2](https://github.com/christophehurpeau/eslint-config-pob/compare/v41.1.1...v41.1.2) (2020-12-19)

**Note:** Version bump only for package @pob/eslint-config-monorepo





## [41.1.1](https://github.com/christophehurpeau/eslint-config-pob/compare/v41.1.0...v41.1.1) (2020-12-13)


### Bug Fixes

* import in typescript-react ([a84b8cb](https://github.com/christophehurpeau/eslint-config-pob/commit/a84b8cbadd43f826630fff1bbeae0091403d1c3c))





# [41.1.0](https://github.com/christophehurpeau/eslint-config-pob/compare/v41.0.4...v41.1.0) (2020-12-13)


### Features

* add test config turning off some rules ([f4cd3a1](https://github.com/christophehurpeau/eslint-config-pob/commit/f4cd3a126d7f566650de8110885790d42c8e686d))





## [41.0.4](https://github.com/christophehurpeau/eslint-config-pob/compare/v41.0.3...v41.0.4) (2020-11-15)


### Bug Fixes

* **eslint-config-typescript:** remove eslint-plugin-prettier ([54fa4a2](https://github.com/christophehurpeau/eslint-config-pob/commit/54fa4a21e62f58b9d3acec7eba55456663194000))





## [41.0.3](https://github.com/christophehurpeau/eslint-config-pob/compare/v41.0.2...v41.0.3) (2020-11-13)


### Bug Fixes

* remove prettier from peer dependencies ([31a0326](https://github.com/christophehurpeau/eslint-config-pob/commit/31a0326bdd9eb0061a5581c652296edbca6ca79f))





## [41.0.2](https://github.com/christophehurpeau/eslint-config-pob/compare/v41.0.1...v41.0.2) (2020-11-13)


### Bug Fixes

* import prettier config in eslint-config-typescript ([329e5ba](https://github.com/christophehurpeau/eslint-config-pob/commit/329e5ba27d24c0b572ca6a8c5cc2528dbc72de3c))





## [41.0.1](https://github.com/christophehurpeau/eslint-config-pob/compare/v41.0.0...v41.0.1) (2020-11-13)


### Bug Fixes

* import prettier config in eslint-config-typescript ([a9b7e47](https://github.com/christophehurpeau/eslint-config-pob/commit/a9b7e473fddcb3381b15495a9477bfd4f8346f77))





# [41.0.0](https://github.com/christophehurpeau/eslint-config-pob/compare/v40.1.0...v41.0.0) (2020-11-13)


### chore

* requires node 12 ([82f6be7](https://github.com/christophehurpeau/eslint-config-pob/commit/82f6be79778dcd1de7bfaea2e5523b7bfb490a35))


### Features

* drop eslint-plugin-prettier ([71cfb3b](https://github.com/christophehurpeau/eslint-config-pob/commit/71cfb3ba5a51b192c39ce1faa912d850ea987969))


### BREAKING CHANGES

* drop node 10 support
* removed plugin prettier, use prettier directly

See the downsides of using plugin in https://prettier.io/docs/en/integrating-with-linters.html





# [40.1.0](https://github.com/christophehurpeau/eslint-config-pob/compare/v40.0.0...v40.1.0) (2020-10-18)


### Features

* update eslint-plugin-unicorn ([39d47cc](https://github.com/christophehurpeau/eslint-config-pob/commit/39d47ccdc17665e5b8b9769b34dc5143a28d9325))





# [40.0.0](https://github.com/christophehurpeau/eslint-config-pob/compare/v39.0.4...v40.0.0) (2020-09-19)


### Features

* update plugins ([afb715d](https://github.com/christophehurpeau/eslint-config-pob/commit/afb715db72a76353e02488fce1de2cf363d38ab0))
* update typescript-eslint ([135f5e2](https://github.com/christophehurpeau/eslint-config-pob/commit/135f5e288126c26db6a9b0b71881afcc7f56a435))


### BREAKING CHANGES

* see https://github.com/typescript-eslint/typescript-eslint/releases/tag/v4.0.0 for more info ; enabled rule consistent-type-imports and no-redeclare





## [39.0.4](https://github.com/christophehurpeau/eslint-config-pob/compare/v39.0.3...v39.0.4) (2020-08-16)


### Bug Fixes

* disable spaced-comment rule in typescript ([7d25309](https://github.com/christophehurpeau/eslint-config-pob/commit/7d253098aa5ff57b93d4360ef730d0b21bbfc516))





## [39.0.3](https://github.com/christophehurpeau/eslint-config-pob/compare/v39.0.2...v39.0.3) (2020-07-26)


### Bug Fixes

* naming-convention rule should be a warning ([aedf424](https://github.com/christophehurpeau/eslint-config-pob/commit/aedf4241acded72cedd9743effd25d3a6eff0ac8))





## [39.0.2](https://github.com/christophehurpeau/eslint-config-pob/compare/v39.0.1...v39.0.2) (2020-07-26)


### Bug Fixes

* boolean prefix rule ([7fc4d21](https://github.com/christophehurpeau/eslint-config-pob/commit/7fc4d2136043096b66584cadd8d35b6fc6309ed1))





## [39.0.1](https://github.com/christophehurpeau/eslint-config-pob/compare/v39.0.0...v39.0.1) (2020-07-26)


### Bug Fixes

* fix @typescript-eslint/naming-convention rule ([12adb47](https://github.com/christophehurpeau/eslint-config-pob/commit/12adb47e90c25fed2bb16f72031280f7d897cca4))





# [39.0.0](https://github.com/christophehurpeau/eslint-config-pob/compare/v38.2.0...v39.0.0) (2020-07-26)


### Features

* eslint 7 ([224cf76](https://github.com/christophehurpeau/eslint-config-pob/commit/224cf76a8df1c6b2a2d762b7cf80b11f1d985e1a))


### BREAKING CHANGES

* requires eslint 7 and other dependencies updated





# [38.2.0](https://github.com/christophehurpeau/eslint-config-pob/compare/v38.1.0...v38.2.0) (2020-07-18)


### Bug Fixes

* move react-native to eslint-config-typescript-react ([f0333f4](https://github.com/christophehurpeau/eslint-config-pob/commit/f0333f4987810885c56b16e9b756a51048ceb8b4))


### Features

* support importing .dts files ([d3a48ef](https://github.com/christophehurpeau/eslint-config-pob/commit/d3a48efccd218edc98fec70f36a4653825ec794c))





# [38.1.0](https://github.com/christophehurpeau/eslint-config-pob/compare/v38.0.2...v38.1.0) (2020-06-05)


### Features

* enable explicit-function-return-type as error but allow expressions ([4f12c9f](https://github.com/christophehurpeau/eslint-config-pob/commit/4f12c9f6d53d527bc321809ad23aa5885bd2f0b0))





## [38.0.2](https://github.com/christophehurpeau/eslint-config-pob/compare/v38.0.1...v38.0.2) (2020-06-05)


### Bug Fixes

* typescript-node config node plugin ([787ee25](https://github.com/christophehurpeau/eslint-config-pob/commit/787ee25c646315a88cc8e2f5b934eec105d31078))





## [38.0.1](https://github.com/christophehurpeau/eslint-config-pob/compare/v38.0.0...v38.0.1) (2020-06-05)


### Bug Fixes

* ensure sourceType is set to module in typescript config ([908ffbf](https://github.com/christophehurpeau/eslint-config-pob/commit/908ffbf3bd44741e85f198cc4a4eba8d4759b548))





# [38.0.0](https://github.com/christophehurpeau/eslint-config-pob/compare/v37.2.0...v38.0.0) (2020-06-05)


### Features

* drop babel without typescript configurations ([91f390c](https://github.com/christophehurpeau/eslint-config-pob/commit/91f390c3f2b78c75ca8f52e559df60ef24a070f5))
* import/order add alphabetize ([10c670d](https://github.com/christophehurpeau/eslint-config-pob/commit/10c670dc555f6d381ee8fae8f3b356502e3983a0))


### BREAKING CHANGES

* dropped @pob/eslint-config-babel, @pob/eslint-config-babel-common, @pob/eslint-config-react ; replaced @pob/eslint-config-babel-node by @pob/eslint-config-typescript-node





# [37.2.0](https://github.com/christophehurpeau/eslint-config-pob/compare/v37.1.0...v37.2.0) (2020-05-30)


### Features

* remove prefer-class-properties ([#141](https://github.com/christophehurpeau/eslint-config-pob/issues/141)) ([dce2126](https://github.com/christophehurpeau/eslint-config-pob/commit/dce21266b2d92aa7c124655c6625e22d42ade084))





# [37.1.0](https://github.com/christophehurpeau/eslint-config-pob/compare/v37.0.2...v37.1.0) (2020-05-08)


### Features

* update eslint-config-prettier and eslint-plugin-prettier ([9f5efcc](https://github.com/christophehurpeau/eslint-config-pob/commit/9f5efcce6396f477070fd398188ef770d8dac282))





## [37.0.2](https://github.com/christophehurpeau/eslint-config-pob/compare/v37.0.1...v37.0.2) (2020-05-02)


### Bug Fixes

* disable node/no-extraneous-import ([95f8cd9](https://github.com/christophehurpeau/eslint-config-pob/commit/95f8cd95a9de57f5a065c40c76b158ee4431d0d3))





## [37.0.1](https://github.com/christophehurpeau/eslint-config-pob/compare/v37.0.0...v37.0.1) (2020-04-07)


### Bug Fixes

* required peer dep eslint match eslint-config-airbnb-base ([b22adb0](https://github.com/christophehurpeau/eslint-config-pob/commit/b22adb0e23af1c627b427b4b4cf8137afce94894))





# [37.0.0](https://github.com/christophehurpeau/eslint-config-pob/compare/v36.0.0...v37.0.0) (2020-04-04)


### Features

* update airbnb config ([bc56c9d](https://github.com/christophehurpeau/eslint-config-pob/commit/bc56c9d8b3833cf96108b6b1977bcf5d9c44bf7c))
* update eslint-plugin-unicorn ([2cf7c71](https://github.com/christophehurpeau/eslint-config-pob/commit/2cf7c71d48116b4c63630f3ee7431f929d0a00a9))
* update prettier ([b619cac](https://github.com/christophehurpeau/eslint-config-pob/commit/b619cac4a567f7bfa0ac1ca6851ec1f4d98b9a34))
* update typescript-eslint ([039252b](https://github.com/christophehurpeau/eslint-config-pob/commit/039252b85baf9bf544c9499c44e009549ef4dac0))


### BREAKING CHANGES

* requires prettier 2





# [36.0.0](https://github.com/christophehurpeau/eslint-config-pob/compare/v35.0.1...v36.0.0) (2020-02-28)


### chore

* **deps:** update dependency eslint-plugin-unicorn to v16 ([#119](https://github.com/christophehurpeau/eslint-config-pob/issues/119)) ([bab9d7e](https://github.com/christophehurpeau/eslint-config-pob/commit/bab9d7e49d0c8d2a7ec3eb0d3d5251360c026865))


### BREAKING CHANGES

* **deps:** requires eslint-plugin-unicorn 16

Co-authored-by: WhiteSource Renovate <renovatebot@gmail.com>
Co-authored-by: Christophe Hurpeau <christophe.hurpeau+github@gmail.com>





## [35.0.1](https://github.com/christophehurpeau/eslint-config-pob/compare/v35.0.0...v35.0.1) (2020-02-07)


### Bug Fixes

* **eslint-plugin-node:** disable rule node/no-extraneous-require already checked by import plugin ([6649322](https://github.com/christophehurpeau/eslint-config-pob/commit/66493222300507be3eb4550918724e47b34426a7))
* add peerDependenciesMeta ([26f1d31](https://github.com/christophehurpeau/eslint-config-pob/commit/26f1d31b69a3329ae16e86a25f96bee4a2a1c086))





# [35.0.0](https://github.com/christophehurpeau/eslint-config-pob/compare/v34.0.0...v35.0.0) (2020-02-05)


### Bug Fixes

* remove @pob/eslint-config-typescript peer dependency in @pob/eslint-config-typescript-react ([98b8da1](https://github.com/christophehurpeau/eslint-config-pob/commit/98b8da151fe237446456f23b928f4fe20a3986c9))
* remove cross-env needed in yarn2 ([f3b2528](https://github.com/christophehurpeau/eslint-config-pob/commit/f3b252854e1303eb3c05f2bab5bdba274f191726))


### chore

* yarn 2 ([88254ac](https://github.com/christophehurpeau/eslint-config-pob/commit/88254ac8740cb51872ff10fbe64b0ee3ae1b7c28))


### Features

* update husky ([fc77d4a](https://github.com/christophehurpeau/eslint-config-pob/commit/fc77d4a4dd0a8a598c1cfb8af7503f1d9064bb81))


### BREAKING CHANGES

* to support yarn 2, you need to add eslint plugins as devdep in your project





# [34.0.0](https://github.com/christophehurpeau/eslint-config-pob/compare/v33.0.8...v34.0.0) (2020-01-26)


### Bug Fixes

* **deps:** update dependency eslint-plugin-node to v11 ([#108](https://github.com/christophehurpeau/eslint-config-pob/issues/108)) ([8ed140e](https://github.com/christophehurpeau/eslint-config-pob/commit/8ed140e0caf83db866cdfb00db99b64472a35e33))
* **deps:** update dependency eslint-plugin-unicorn to v15 ([#107](https://github.com/christophehurpeau/eslint-config-pob/issues/107)) ([e3ef973](https://github.com/christophehurpeau/eslint-config-pob/commit/e3ef9737636c68e5e18a9be22b557299e637f61d))
* disable node/no-unpublished-import ([8ca55ab](https://github.com/christophehurpeau/eslint-config-pob/commit/8ca55ab210daefa3d6455b2453828a698a1f8284))


### chore

* update eslint and node 10 ([ce42ab5](https://github.com/christophehurpeau/eslint-config-pob/commit/ce42ab5be5bb6cbb857de47d536805d95e4782e5))


### Features

* configure all options in explicit-function-return-type ([561fe9b](https://github.com/christophehurpeau/eslint-config-pob/commit/561fe9ba2495315f3ba3a419a2e2e9ee55dda35a))
* enable new unicorn rule prefer-modern-dom-apis ([8576577](https://github.com/christophehurpeau/eslint-config-pob/commit/8576577be0ba46f9ae6ae62272e0d4894c9a3c2c))


### Reverts

* Revert "chore(deps): update dependency husky to v4 (#109)" ([7371005](https://github.com/christophehurpeau/eslint-config-pob/commit/73710055e8d871fcb3a2d8a627b05a20a47d9cee)), closes [#109](https://github.com/christophehurpeau/eslint-config-pob/issues/109)


### BREAKING CHANGES

* new rule unicorn/prefer-modern-dom-apis enabled
* **deps:** eslint-plugin-node new major (version 11)
* requires node 10





## [33.0.8](https://github.com/christophehurpeau/eslint-config-pob/compare/v33.0.7...v33.0.8) (2019-12-06)


### Bug Fixes

* disable unicorn/consistent-function-scoping ([fabf67b](https://github.com/christophehurpeau/eslint-config-pob/commit/fabf67b46d2191932b844b41c4a4d3d861284b26))





## [33.0.7](https://github.com/christophehurpeau/eslint-config-pob/compare/v33.0.6...v33.0.7) (2019-12-06)


### Bug Fixes

* disable @typescript-eslint/no-empty-function ([73b96b1](https://github.com/christophehurpeau/eslint-config-pob/commit/73b96b19a58aa91cc57528fd238e83e2398e02a1))





## [33.0.6](https://github.com/christophehurpeau/eslint-config-pob/compare/v33.0.5...v33.0.6) (2019-12-06)


### Bug Fixes

* disable @typescript-eslint/no-empty-function ([ee7fc46](https://github.com/christophehurpeau/eslint-config-pob/commit/ee7fc46c49eb97160aaa0d75e9e26e59a911fce3))





## [33.0.5](https://github.com/christophehurpeau/eslint-config-pob/compare/v33.0.4...v33.0.5) (2019-12-06)


### Bug Fixes

* pass allowWarningComments to true ([6d93030](https://github.com/christophehurpeau/eslint-config-pob/commit/6d930307477cd70e5bd52f7575654a1606afa505))





## [33.0.4](https://github.com/christophehurpeau/eslint-config-pob/compare/v33.0.3...v33.0.4) (2019-12-06)


### Bug Fixes

* path rules expert ([df32552](https://github.com/christophehurpeau/eslint-config-pob/commit/df3255202885883273a59f56a6fdabd0aea70c38))





## [33.0.3](https://github.com/christophehurpeau/eslint-config-pob/compare/v33.0.2...v33.0.3) (2019-12-06)


### Bug Fixes

* import eslint-config in eslint-config-react ([c476327](https://github.com/christophehurpeau/eslint-config-pob/commit/c476327a7d8d3c65899d7c86146ba9302ab28517))





## [33.0.2](https://github.com/christophehurpeau/eslint-config-pob/compare/v33.0.1...v33.0.2) (2019-12-06)


### Bug Fixes

* reapply expert rules in react config ([5302175](https://github.com/christophehurpeau/eslint-config-pob/commit/5302175ee6a2935d1ab4626e73c6efa3e0819d29))





## [33.0.1](https://github.com/christophehurpeau/eslint-config-pob/compare/v33.0.0...v33.0.1) (2019-12-06)


### Bug Fixes

* disable typescript rule no-unnecessary-condition ([c7ea4eb](https://github.com/christophehurpeau/eslint-config-pob/commit/c7ea4eb726dcdc7783f9bb6147dc65c5c7ec8489))





# [33.0.0](https://github.com/christophehurpeau/eslint-config-pob/compare/v32.1.0...v33.0.0) (2019-12-06)


### Bug Fixes

* **deps:** update dependency eslint-plugin-unicorn to v14 ([#99](https://github.com/christophehurpeau/eslint-config-pob/issues/99)) ([fdf1185](https://github.com/christophehurpeau/eslint-config-pob/commit/fdf1185420796c8a55f26a484879fd48aa68d6ba))


### Features

* update [@typescript-eslint](https://github.com/typescript-eslint) ([2dd50d0](https://github.com/christophehurpeau/eslint-config-pob/commit/2dd50d0f433538957df7b53f18e2c7bcfd4cb3ba))
* update eslint-config-prettier ([2b46b87](https://github.com/christophehurpeau/eslint-config-pob/commit/2b46b8713f836700b1bc357495a4124a35fc038a))
* update eslint-plugin-react ([8e6dbe4](https://github.com/christophehurpeau/eslint-config-pob/commit/8e6dbe4744ad021fbececffb208d0a5cf97b5b3f))
* update eslint-plugin-react-hooks ([1af0ec0](https://github.com/christophehurpeau/eslint-config-pob/commit/1af0ec0fd59051d19fc14dc2d9381577518879df))


### BREAKING CHANGES

* enabled rules and requires typescript 3.7
* **deps:** this commit enables new rules





# [32.1.0](https://github.com/christophehurpeau/eslint-config-pob/compare/v32.0.13...v32.1.0) (2019-09-13)


### Features

* drop node 6 support ([cd84c76](https://github.com/christophehurpeau/eslint-config-pob/commit/cd84c76))
* update dependencies ([ee1a828](https://github.com/christophehurpeau/eslint-config-pob/commit/ee1a828))





## [32.0.13](https://github.com/christophehurpeau/eslint-config-pob/compare/v32.0.12...v32.0.13) (2019-09-07)


### Bug Fixes

* disable no-unnecessary-type-assertion ([d72bcf9](https://github.com/christophehurpeau/eslint-config-pob/commit/d72bcf9))
* **deps:** update dependency eslint-plugin-node to v10 ([#86](https://github.com/christophehurpeau/eslint-config-pob/issues/86)) ([041b6ea](https://github.com/christophehurpeau/eslint-config-pob/commit/041b6ea))





## [32.0.12](https://github.com/christophehurpeau/eslint-config-pob/compare/v32.0.11...v32.0.12) (2019-09-06)


### Bug Fixes

* ignore resolve type-fest ([a51b368](https://github.com/christophehurpeau/eslint-config-pob/commit/a51b368))





## [32.0.11](https://github.com/christophehurpeau/eslint-config-pob/compare/v32.0.10...v32.0.11) (2019-09-06)


### Bug Fixes

* enable allowTypedFunctionExpressions ([acf195d](https://github.com/christophehurpeau/eslint-config-pob/commit/acf195d))





## [32.0.10](https://github.com/christophehurpeau/eslint-config-pob/compare/v32.0.9...v32.0.10) (2019-09-06)


### Bug Fixes

* allow props spreading ([ac7b4ea](https://github.com/christophehurpeau/eslint-config-pob/commit/ac7b4ea))





## [32.0.9](https://github.com/christophehurpeau/eslint-config-pob/compare/v32.0.8...v32.0.9) (2019-08-30)


### Bug Fixes

* disable react/static-property-placement ([66e23da](https://github.com/christophehurpeau/eslint-config-pob/commit/66e23da))





## [32.0.8](https://github.com/christophehurpeau/eslint-config-pob/compare/v32.0.7...v32.0.8) (2019-08-30)


### Bug Fixes

* disable @typescript-eslint/unbound-method ([5d4fe77](https://github.com/christophehurpeau/eslint-config-pob/commit/5d4fe77))





## [32.0.7](https://github.com/christophehurpeau/eslint-config-pob/compare/v32.0.6...v32.0.7) (2019-08-30)


### Bug Fixes

* disable node/no-missing-import ([0ecdee6](https://github.com/christophehurpeau/eslint-config-pob/commit/0ecdee6))





## [32.0.6](https://github.com/christophehurpeau/eslint-config-pob/compare/v32.0.5...v32.0.6) (2019-08-30)


### Bug Fixes

* disable typescript rules that should be off ([e6e65a6](https://github.com/christophehurpeau/eslint-config-pob/commit/e6e65a6))
* remove recomended in eslint-config-babel-node ([a1819cb](https://github.com/christophehurpeau/eslint-config-pob/commit/a1819cb))





## [32.0.5](https://github.com/christophehurpeau/eslint-config-pob/compare/v32.0.4...v32.0.5) (2019-08-30)


### Bug Fixes

* missing dependency ([be6a58d](https://github.com/christophehurpeau/eslint-config-pob/commit/be6a58d))





## [32.0.4](https://github.com/christophehurpeau/eslint-config-pob/compare/v32.0.3...v32.0.4) (2019-08-30)


### Bug Fixes

* config eslint-config-babel-node ([9e2961e](https://github.com/christophehurpeau/eslint-config-pob/commit/9e2961e))





## [32.0.3](https://github.com/christophehurpeau/eslint-config-pob/compare/v32.0.2...v32.0.3) (2019-08-30)


### Bug Fixes

* missing parserOptions ([5d2e5b5](https://github.com/christophehurpeau/eslint-config-pob/commit/5d2e5b5))





## [32.0.2](https://github.com/christophehurpeau/eslint-config-pob/compare/v32.0.1...v32.0.2) (2019-08-30)


### Bug Fixes

* disable unicorn/prefer-flat-map ([d22a654](https://github.com/christophehurpeau/eslint-config-pob/commit/d22a654))





## [32.0.1](https://github.com/christophehurpeau/eslint-config-pob/compare/v32.0.0...v32.0.1) (2019-08-30)


### Bug Fixes

* move plugins to babel-common ([b99c980](https://github.com/christophehurpeau/eslint-config-pob/commit/b99c980))





# [32.0.0](https://github.com/christophehurpeau/eslint-config-pob/compare/v31.1.0...v32.0.0) (2019-08-30)


### Bug Fixes

* update strict rule ([0365b72](https://github.com/christophehurpeau/eslint-config-pob/commit/0365b72))
* **deps:** update dependency eslint-plugin-node to v9 ([#75](https://github.com/christophehurpeau/eslint-config-pob/issues/75)) ([2e8893a](https://github.com/christophehurpeau/eslint-config-pob/commit/2e8893a))


### Features

* @pob/eslint-config-babel-common ([4ebad20](https://github.com/christophehurpeau/eslint-config-pob/commit/4ebad20))
* pob update ([20e7be9](https://github.com/christophehurpeau/eslint-config-pob/commit/20e7be9))
* update eslint ([10031d3](https://github.com/christophehurpeau/eslint-config-pob/commit/10031d3))
* update eslint-config-airbnb ([3ae5ef4](https://github.com/christophehurpeau/eslint-config-pob/commit/3ae5ef4))
* update eslint-config-airbnb-base ([f297013](https://github.com/christophehurpeau/eslint-config-pob/commit/f297013)), closes [/github.com/airbnb/javascript/blob/master/packages/eslint-config-airbnb-base/CHANGELOG.md#1400--2019-08-09](https://github.com//github.com/airbnb/javascript/blob/master/packages/eslint-config-airbnb-base/CHANGELOG.md/issues/1400--2019-08-09)
* update eslint-plugin-unicorn ([3eeaf3d](https://github.com/christophehurpeau/eslint-config-pob/commit/3eeaf3d))
* update typescript-eslint ([8b91022](https://github.com/christophehurpeau/eslint-config-pob/commit/8b91022))


### BREAKING CHANGES

* v2 of typescript-eslint and changes in rules
* requires eslint 6
* @pob/eslint-config-typescript no longer requires to import @pob/eslint-config-babel





# [31.1.0](https://github.com/christophehurpeau/eslint-config-pob/compare/v31.0.0...v31.1.0) (2019-04-26)


### Features

* enable prefer-includes and prefer-string-starts-ends-with ([fff4885](https://github.com/christophehurpeau/eslint-config-pob/commit/fff4885))





# [31.0.0](https://github.com/christophehurpeau/eslint-config-pob/compare/v30.0.1...v31.0.0) (2019-04-26)


### Features

* add import/no-anonymous-default-export ([36279f0](https://github.com/christophehurpeau/eslint-config-pob/commit/36279f0))


### BREAKING CHANGES

* new rule





## [30.0.1](https://github.com/christophehurpeau/eslint-config-pob/compare/v30.0.0...v30.0.1) (2019-04-22)


### Bug Fixes

* update [@typescript-eslint](https://github.com/typescript-eslint) deps ([ae3d6d8](https://github.com/christophehurpeau/eslint-config-pob/commit/ae3d6d8))





# [30.0.0](https://github.com/christophehurpeau/eslint-config-pob/compare/v29.2.0...v30.0.0) (2019-04-19)


### Features

* explicit-member-accessibility to no-public ([4a926c3](https://github.com/christophehurpeau/eslint-config-pob/commit/4a926c3))


### BREAKING CHANGES

* typescript-eslint/explicit-member-accessibility rule changed





# [29.2.0](https://github.com/christophehurpeau/eslint-config-pob/compare/v29.1.1...v29.2.0) (2019-04-05)


### Features

* update deps ([e11eb26](https://github.com/christophehurpeau/eslint-config-pob/commit/e11eb26))





## [29.1.1](https://github.com/christophehurpeau/eslint-config-pob/compare/v29.1.0...v29.1.1) (2019-04-05)


### Bug Fixes

* disable unicorn/prevent-abbreviations ([70ef05a](https://github.com/christophehurpeau/eslint-config-pob/commit/70ef05a))
* **deps:** update dependency eslint-plugin-unicorn to v8 ([#67](https://github.com/christophehurpeau/eslint-config-pob/issues/67)) ([c1c81e1](https://github.com/christophehurpeau/eslint-config-pob/commit/c1c81e1))





# [29.1.0](https://github.com/christophehurpeau/eslint-config-pob/compare/v29.0.1...v29.1.0) (2019-03-21)


### Bug Fixes

* import/extensions rule ([415ad55](https://github.com/christophehurpeau/eslint-config-pob/commit/415ad55))


### Features

* update deps ([38744b4](https://github.com/christophehurpeau/eslint-config-pob/commit/38744b4))





## [29.0.1](https://github.com/christophehurpeau/eslint-config-pob/compare/v29.0.0...v29.0.1) (2019-03-08)

**Note:** Version bump only for package eslint-config-pob





# [29.0.0](https://github.com/christophehurpeau/eslint-config-pob/compare/v28.0.1...v29.0.0) (2019-03-08)


### Features

* split repos and plugins as dependencies ([669248c](https://github.com/christophehurpeau/eslint-config-pob/commit/669248c))


### BREAKING CHANGES

* split repos
