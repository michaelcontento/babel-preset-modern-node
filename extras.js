module.exports = {
    plugins: [
        // foo.default -> foo["default"]
        require('babel-plugin-transform-es3-member-expression-literals'),
        // default: "bar" -> "default": "bar"
        require('babel-plugin-transform-es3-property-literals'),
        // "use strict"
        require('babel-plugin-transform-strict-mode')
    ]
};

// __VERSION__
const fs = require('fs');
try {
    if (fs.statSync('package.json').isFile()) {
        module.exports.plugins.push(require('babel-plugin-version-inline').default);
    }
} catch (err) {
    // ignore: ENOENT: no such file or directory, stat 'package.json'
}
