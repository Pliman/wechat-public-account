module.exports = {
    hello: hello
}

function* hello() {
    this.body = 'hello';
}
