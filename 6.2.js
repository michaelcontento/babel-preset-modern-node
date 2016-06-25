// V8: 5.0.71.47
module.exports = {
    presets: [
        require('./extras')
    ],
    plugins: [
        require('babel-plugin-transform-es2015-destructuring'),
        require('babel-plugin-transform-es2015-function-name'),
        require('babel-plugin-transform-es2015-modules-commonjs'),
        require('babel-plugin-transform-es2015-duplicate-keys'),
        require('babel-plugin-transform-exponentiation-operator'),
        require('babel-plugin-array-includes').default,
        require('babel-plugin-syntax-trailing-function-commas'),
    ]
}
