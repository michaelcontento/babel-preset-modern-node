module.exports = {
    plugins: [
        // foo.default -> foo["default"]
        require('babel-plugin-transform-es3-member-expression-literals'),
        // default: "bar" -> "default": "bar"
        require('babel-plugin-transform-es3-property-literals'),
        // "use strict"
        require('babel-plugin-transform-strict-mode')
    ],
    sourceMaps: "inline"
};
