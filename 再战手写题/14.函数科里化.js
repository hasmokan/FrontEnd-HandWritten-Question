function curry(func){
    return function curried(...args){
        // func.length 代表了函数的参数的数量
        if(func.length <= args){
            return func.apply(this, args)
        } else {
            return (...args2) => curried(...args, ...args2)
        }
    }
}

function add(){
    return this.length
}

console.log(add(1,2,23,4))