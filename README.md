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
3. Use `modern-node/$VERSION` (e.g. `modern-node/5.5`) as your preset

### Via `.babelrc` (recommended)

**.babelrc**

```json
{
  "presets": ["modern-node/5.5"]
}
```

### Via CLI

    babel script.js --presets modern-node/5.5

### Via Node API

```js
require('babel-core').transform('code', {
  presets: ['modern-node/5.5'],
})
```

  [1]: http://www.2ality.com/2015/11/configuring-babel6.html
  [babel-preset-modern-node]: https://github.com/michaelcontento/babel-preset-modern-node
