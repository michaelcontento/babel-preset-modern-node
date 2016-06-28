[babel-preset-modern-node][]
================================

Babel preset for building modern node apps with the least amount of
transformations as possible.

[![build](https://travis-ci.org/michaelcontento/babel-preset-modern-node.svg)](https://travis-ci.org/michaelcontento/babel-preset-modern-node)
[![dependencies](https://david-dm.org/michaelcontento/babel-preset-modern-node.svg)](https://david-dm.org/michaelcontento/babel-preset-modern-node)
[![devDependencies](https://david-dm.org/michaelcontento/babel-preset-modern-node/dev-status.svg)](https://david-dm.org/michaelcontento/babel-preset-modern-node#info=devDependencies)

[![license](https://img.shields.io/npm/l/babel-preset-modern-node.svg?style=flat-square)](https://www.npmjs.com/package/babel-preset-modern-node)
[![npm version](https://img.shields.io/npm/v/babel-preset-modern-node.svg?style=flat-square)](https://www.npmjs.com/package/babel-preset-modern-node)
[![npm downloads](https://img.shields.io/npm/dm/babel-preset-modern-node.svg?style=flat-square)](https://www.npmjs.com/package/babel-preset-modern-node)

## Installation

    npm install --save-dev babel-preset-modern-node

## Usage

1. Read ["Configuring Babel 6" article][1] for more information about babel@6
configuration.
2. Decide which version of node you want to support
3. Use `modern-node/$VERSION` (e.g. `modern-node/6.0`) as your preset
4. Optionally add babel `stage-0`

### Via `.babelrc` (recommended)

**.babelrc**

```json
{
  "presets": ["modern-node/6.0", "stage-0"]
}
```

### Via CLI

    babel script.js --presets modern-node/6.0,stage-0

### Via Node API

```js
require('babel-core').transform('code', {
  presets: ['modern-node/6.0', 'stage-0'],
})
```

## Compatibility

This preset currently supports ES2015 and ES2016 support for all minor node
versions starting at `v0.12`.

### Notes on `Array.includes`

This preset **does not modify** the global space / prototypes! Due to this we're
not able to fully support ES2016's `Array.includes`
[see here][plugin-array-includes] for more details.

### Special extras

1. If you project contains a `package.json` the super global `__VERSION__`
   will be set accordingly
    * See [plugin-version-inline][]
1. Strict mode will be enabled
    * See [transform-strict-mode][]
1. Restricted keywords will always be quoted
    * `foo.default` becomes `foo["default"]`
        * See [transform-es3-member-expression-literals][]
    * `default: "bar"` becomes `"default": "bar"`
        * See [transform-es3-property-literals][]

  [1]: http://www.2ality.com/2015/11/configuring-babel6.html
  [babel-preset-modern-node]: https://github.com/michaelcontento/babel-preset-modern-node
  [plugin-version-inline]: https://www.npmjs.com/package/babel-plugin-version-inline
  [transform-es3-member-expression-literals]: https://www.npmjs.com/package/babel-plugin-transform-es3-member-expression-literals
  [transform-es3-property-literals]: https://www.npmjs.com/package/babel-plugin-transform-es3-property-literals
  [transform-strict-mode]: https://www.npmjs.com/package/babel-plugin-transform-strict-mode
  [plugin-array-includes]: https://www.npmjs.com/package/babel-plugin-array-includes
