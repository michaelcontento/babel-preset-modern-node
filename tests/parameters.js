const assert = require('assert');
// https://babeljs.io/docs/plugins/transform-es2015-parameters/

// Destructuring parameters
function destructuring({ x }) {
    assert.equal(x, 1);
}

// Default parameters
function defaults(x = 1) {
    assert.equal(x, 1);
}

// Rest parameters
function rest(...x) {
    assert.equal(x[0], 1);
    assert.equal(x[1], 2);
}

destructuring({ x: 1 });
defaults();
rest(1, 2);
