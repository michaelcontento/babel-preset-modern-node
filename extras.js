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

// __VERSION__
const fs = require('fs');

var packageJsonExists = false;
try {
    packageJsonExists = fs.statSync('package.json').isFile();
} catch (e) {}

if (packageJsonExists) {
    module.exports.plugins.push(require('babel-plugin-version-inline').default);
}
