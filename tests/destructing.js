var x = [1, 2, 3];
var [a, ...b] = x;

if (b[0] !== 2 || b[1] !== 3) {
    process.exit(1);
}
