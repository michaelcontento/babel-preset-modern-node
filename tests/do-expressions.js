// do-while
var i = 5;
do {
    i--;
} while (i > 3);

if (i !== 3) {
    process.exit(1);
}

// single expression
if (do { "foo" } !== "foo") {
    process.exit(1);
}
