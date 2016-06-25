// V8: 4.6.85.32
module.exports = {
    presets: [
        require('./6.0')
    ],
    plugins: [
        // preset-es2015
        require('babel-plugin-transform-es2015-parameters'),
        require('babel-plugin-transform-es2015-spread'),
        require('babel-plugin-transform-es2015-sticky-regex'),
        require('babel-plugin-transform-es2015-unicode-regex')
    ]
}
