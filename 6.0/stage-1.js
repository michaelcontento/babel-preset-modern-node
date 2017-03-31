// V8: 5.0.71.35
module.exports = {
    presets: [
        require('./stage-2')
    ],
    plugins: [
        // preset-stage-1
        require('babel-plugin-transform-class-constructor-call'),
        require('babel-plugin-transform-class-properties'),
        require('babel-plugin-transform-decorators'),
        require('babel-plugin-transform-export-extensions')
    ]
}
