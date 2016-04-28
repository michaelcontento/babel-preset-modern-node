function functionNameVariables() {
    var foo = function () {};
    var bar = function baz() {};
    return foo.name === "foo" && bar.name === "baz";
}

if (!functionNameVariables()) {
  process.exit(1);
}
