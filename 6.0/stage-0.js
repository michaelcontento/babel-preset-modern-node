// V8: 5.0.71.35
module.exports = {
    presets: [
        require('./stage-1')
    ],
    plugins: [
        // preset-stage-0
        require('babel-plugin-transform-function-bind')
    ]
}
