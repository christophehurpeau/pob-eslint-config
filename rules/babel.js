module.exports = {
    'plugins': ['babel'],
    'rules': {
        // https://github.com/babel/babel-eslint/issues/316
        'generator-star-spacing': 0,
        'babel/generator-star-spacing': [2, { before: false, after: true }],
    }
};
