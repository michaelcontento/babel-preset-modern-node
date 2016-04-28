function eg() {
    var x = [1, 2, 3];
    var [a, ...b] = x;

    return a === 1 && b[0] === 2 && b[1] === 3;
}

function __createIterableObject(arr, methods) {
    methods = methods || {};
    if (typeof Symbol !== 'function' || !Symbol.iterator) {
        return {};
    }

    arr.length++;
    var iterator = {
      next: function() {
          return {
              value: arr.shift(),
              done: arr.length <= 0
          };
      },
      'return': methods['return'],
      'throw': methods['throw']
    };

    var iterable = {};
    iterable[Symbol.iterator] = function() {
        return iterator;
    }

    return iterable;
}

function closing() {
    var closed = false;
    var iter = __createIterableObject([1, 2, 3], {
        'return': function() {
            closed = true;
            return {};
        }
    });
    var [a, b] = iter;
    return closed;
}


if (!eg() || !closing()) {
  process.exit(1);
}
