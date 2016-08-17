module.exports = {
    'rules': {
        // added rules
        "max-len": [0, 120, 4],
        "camelcase": [2, {"properties": "always"}],
        "constructor-super": 2,
        "prefer-spread": 2,
        "dot-location": [2, "property"],

        // changed rules
        "indent": [2, 4, {"SwitchCase": 1}],        // http://eslint.org/docs/rules/indent
        "no-unused-vars": [2, {"args": "none"}],
        "no-use-before-define": [2, "nofunc"],
        "object-shorthand": [2, "methods"],

        // disabled rules
        "prefer-const": 0,                          // http://eslint.org/docs/rules/prefer-const
        "no-cond-assign": 0,                        // http://eslint.org/docs/rules/no-cond-assign
        "no-return-assign": 0,                      // http://eslint.org/docs/rules/no-return-assign
        "consistent-return": 0,                     // http://eslint.org/docs/rules/consistent-return
        "default-case": 0,                          // http://eslint.org/docs/rules/default-case
        "guard-for-in": 0,                          // http://eslint.org/docs/rules/guard-for-in
        "no-else-return": 0,                        // http://eslint.org/docs/rules/no-else-return
        "no-param-reassign": 0,                     // http://eslint.org/docs/rules/no-param-reassign
        "no-loop-func": 0,                          // http://eslint.org/docs/rules/no-loop-func
        "func-names": 0,                            // http://eslint.org/docs/rules/func-names
        "no-empty": 0,
        "no-shadow": 0,
        "no-underscore-dangle": 0,
        "no-continue": 0,
        "import/prefer-default-export": 0,
    }
};
