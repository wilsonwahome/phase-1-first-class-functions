function receivesAFunction(callback){
    callback();
}

function returnsANamedFunction(){
    return function namedFuntion(){}
}

function returnsAnAnonymousFunction(){
    return function (){}
}