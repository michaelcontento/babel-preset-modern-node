// V8: 3.28.71.19
module.exports = {
    presets: [
        require('./4.0')
    ],
    plugins: [
        require('babel-plugin-check-es2015-constants'),
        require('babel-plugin-transform-es2015-arrow-functions'),
        require('babel-plugin-transform-es2015-block-scoped-functions'),
        require('babel-plugin-transform-es2015-block-scoping'),
        require('babel-plugin-transform-es2015-classes'),
        require('babel-plugin-transform-es2015-computed-properties'),
        require('babel-plugin-transform-es2015-for-of'),
        require('babel-plugin-transform-es2015-literals'),
        require('babel-plugin-transform-es2015-object-super'),
        require('babel-plugin-transform-es2015-shorthand-properties'),
        require('babel-plugin-transform-es2015-template-literals'),
        require('babel-plugin-transform-es2015-typeof-symbol'),
        [require('babel-plugin-transform-regenerator'), { async: false, asyncGenerators: false }],
    ]
}
