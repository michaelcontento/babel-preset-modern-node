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

Simply use this preset as any other. Following options can be passed to
configure `babel-preset-modern-node` to your taste:

- Set loose mode optimizations (**default:** `false`)
    - `loose = true|false`    
- Module loader to use (**default:** `commonjs`)
    - `modules = (false|commonjs|amd|umd|systemjs)`
- Min node version compatibility (**default:** `process.versions.node`)
    - `version = "5.10.2"`

### Via `.babelrc` (recommended)

```json
{
  "presets": ["modern-node"]
}
```

Or:

```json
{
  "presets": [["modern-node", { "loose": true, ... }]]
}
```

### Via CLI

    babel script.js --presets modern-node

### Via Node API

```js
require('babel-core').transform('code', {
  presets: ['modern-node'],
})
```

Or:

```js
require('babel-core').transform('code', {
  presets: [['modern-node', { "loose": true, ... }]],
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

### Alternatives

- https://github.com/babel/babel-preset-env 

  [1]: http://www.2ality.com/2015/11/configuring-babel6.html
  [babel-preset-modern-node]: https://github.com/michaelcontento/babel-preset-modern-node
  [plugin-version-inline]: https://www.npmjs.com/package/babel-plugin-version-inline
  [transform-es3-member-expression-literals]: https://www.npmjs.com/package/babel-plugin-transform-es3-member-expression-literals
  [transform-es3-property-literals]: https://www.npmjs.com/package/babel-plugin-transform-es3-property-literals
  [transform-strict-mode]: https://www.npmjs.com/package/babel-plugin-transform-strict-mode
  [plugin-array-includes]: https://www.npmjs.com/package/babel-plugin-array-includes
