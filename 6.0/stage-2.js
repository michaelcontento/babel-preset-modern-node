// V8: 5.0.71.35
module.exports = {
    presets: [
        require('./stage-3')
    ],
    plugins: [
        // preset-stage-2
        require('babel-plugin-syntax-trailing-function-commas'),
        require('babel-plugin-transform-object-rest-spread')
    ]
}
