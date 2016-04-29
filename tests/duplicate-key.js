var x = { a: 5, a: 6 };
var y = {
    get a() {},
    set a(x) {},
    a: 3
};

if (x.a !== 6 || y.a !== 3) {
    process.exit(1);
}
