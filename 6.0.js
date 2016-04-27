// V8: 5.0.71.35
module.exports = {
    presets: [
        require('./extras')
    ],
    plugins: [
        // preset-es2015
        require('babel-plugin-transform-es2015-destructuring'),
        require('babel-plugin-transform-es2015-function-name'),
        require('babel-plugin-transform-es2015-modules-commonjs'),
        // preset-stage-0
        require('babel-plugin-transform-function-bind'),
        // preset-stage-1
        require('babel-plugin-transform-class-constructor-call'),
        require('babel-plugin-transform-class-properties'),
        require('babel-plugin-transform-decorators'),
        require('babel-plugin-transform-export-extensions'),
        // preset-stage-2
        require('babel-plugin-syntax-trailing-function-commas'),
        require('babel-plugin-transform-object-rest-spread'),
        // preset-stage-3
        require('babel-plugin-transform-async-to-generator'),
        require('babel-plugin-transform-exponentiation-operator'),
    ]
}
