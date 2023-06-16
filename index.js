function receivesAFunction(callback) {
callback()

}

function returnsAnAnonymousFunction() {
    return function (){}

}

function returnsANamedFunction() {
    return function w(){}
}