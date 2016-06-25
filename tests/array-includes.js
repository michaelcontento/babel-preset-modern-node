const assert = require('assert');
// https://www.npmjs.com/package/babel-plugin-array-includes

assert([1, 2].includes(2));
assert(![1, 2].includes(3));
