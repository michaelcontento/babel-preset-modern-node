/**
 * This preset was originally an object, before function-based configurable presets were introduced.
 * For backward-compatibility with anything that may have been loading this preset and expecting
 * it to be a simple Babel config object, we maintain the old config here.
 */
module.exports = preset({});

// For backward compatibility with babel-core < v6.13.x, we use the 'buildPreset' property
// of the preset object for the preset creation function.
Object.defineProperty(module.exports, "buildPreset", {
    configurable: true,
    writable: true,
    // We make this non-enumerable so old versions of babel-core won't see it as an unknown property,
    // while allowing new versions to see it as a preset builder function.
    enumerable: false,
    value: preset,
});

function preset(context, opts) {
    var moduleTypes = ["commonjs", "amd", "umd", "systemjs"];
    var loose = false;
    var modules = "commonjs";
    var version = process.versions.node;

    if (opts !== undefined) {
        if (opts.loose !== undefined) loose = opts.loose;
        if (opts.modules !== undefined) modules = opts.modules;
        if (opts.version !== undefined) version = opts.version;
    }

    if (typeof loose !== "boolean") {
        throw new Error("Preset modern-node 'loose' option must be a boolean.");
    }

    if (modules !== false && moduleTypes.indexOf(modules) === -1) {
        throw new Error("Preset modern-node 'modules' option must be 'false' to indicate no modules\n" +
          "or a module type which be be one of: 'commonjs' (default), 'amd', 'umd', 'systemjs'");
    }

    if (!version) {
        throw new Error("Preset moder-node 'version' option must be set");
    }

    var semver = require('semver');
    function enableFor(constraint) {
        var fullVersion = version.split('.').length == 2
            ? version + '.0'
            : version;
        return semver.satisfies(fullVersion, '<= ' + constraint);
    }

    var fs = require('fs');
    var versionplugin = false;
    try {
        if (fs.statSync('package.json').isFile()) {
            versionplugin = require('babel-plugin-version-inline').default;
        }
    } catch (err) {
        // ignore: ENOENT: no such file or directory, stat 'package.json'
    }

    return {
        plugins: [
// ---- v0.12
            enableFor('0.12') && [require('babel-plugin-transform-regenerator'), { async: false, asyncGenerators: false }],
            enableFor('0.12') && [require("babel-plugin-transform-es2015-classes"), { "loose": loose }],
            enableFor('0.12') && [require("babel-plugin-transform-es2015-computed-properties"), { "loose": loose }],
            enableFor('0.12') && [require("babel-plugin-transform-es2015-for-of"), { "loose": loose }],
            enableFor('0.12') && [require("babel-plugin-transform-es2015-template-literals"), { "loose": loose }],
            enableFor('0.12') && require('babel-plugin-check-es2015-constants'),
            enableFor('0.12') && require('babel-plugin-transform-es2015-arrow-functions'),
            enableFor('0.12') && require('babel-plugin-transform-es2015-block-scoped-functions'),
            enableFor('0.12') && require('babel-plugin-transform-es2015-block-scoping'),
            enableFor('0.12') && require('babel-plugin-transform-es2015-literals'),
            enableFor('0.12') && require('babel-plugin-transform-es2015-object-super'),
            enableFor('0.12') && require('babel-plugin-transform-es2015-shorthand-properties'),
            enableFor('0.12') && require('babel-plugin-transform-es2015-typeof-symbol'),
// ---- v5.12
            enableFor('5.12') && [require("babel-plugin-transform-es2015-spread"), { "loose": loose }],
            enableFor('5.12') && require('babel-plugin-transform-es2015-parameters'),
            enableFor('5.12') && require('babel-plugin-transform-es2015-sticky-regex'),
            enableFor('5.12') && require('babel-plugin-transform-es2015-unicode-regex'),
// ---- v6.2
            enableFor('6.2') && require('babel-plugin-array-includes').default,
// ---- v6.4
            enableFor('6.4') && [require("babel-plugin-transform-es2015-destructuring"), { "loose": loose }],
            enableFor('6.4') && require('babel-plugin-transform-es2015-function-name'),
// ---- v6.5
            enableFor('6.5') && require('babel-plugin-transform-es2015-duplicate-keys'),
            enableFor('6.5') && require('babel-plugin-transform-exponentiation-operator'),
// --- MODULES
            modules === "amd" && [require("babel-plugin-transform-es2015-modules-amd"), { "loose": loose }],
            modules === "commonjs" && [require("babel-plugin-transform-es2015-modules-commonjs"), { "loose": loose }],
            modules === "systemjs" && [require("babel-plugin-transform-es2015-modules-systemjs"), { "loose": loose }],
            modules === "umd" && [require("babel-plugin-transform-es2015-modules-umd"), { "loose": loose }],
// --- EXTRAS
            // foo.default -> foo["default"]
            require('babel-plugin-transform-es3-member-expression-literals'),
            // default: "bar" -> "default": "bar"
            require('babel-plugin-transform-es3-property-literals'),
            // "use strict"
            require('babel-plugin-transform-strict-mode'),
            // __VERSION__
            versionplugin,
        // filter out falsy values
        ].filter(Boolean)
    };
}
