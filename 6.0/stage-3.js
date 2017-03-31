// V8: 5.0.71.35
module.exports = {
    presets: [
        require('./stage-4')
    ],
    plugins: [
        // preset-stage-3
        require('babel-plugin-transform-async-to-generator'),
        require('babel-plugin-transform-exponentiation-operator')
    ]
}
