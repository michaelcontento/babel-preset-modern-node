var obj = {
    value: '123',

    func: function() {
        return this.value;
    }
};

var helper = ::obj.func;
if (helper() !== '123') {
    process.exit(1);
}
