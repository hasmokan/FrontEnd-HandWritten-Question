Function.prototype.myCall = function(context, ...args){
    if(typeof this !== 'function'){
        throw new Error('no function')
    }

    context = context || window

    let result = null
    context.fn = this
    result = context.fn(...args)
    delete context.fn

    return result
}

Function.prototype.myApply = function(context, args){
    if(typeof this !== 'function'){
        throw new Error('no function')
    }
    let result = null
    context = context || window
    context.fn = this
    if(!args){
        result = context.fn()
    } else{
        result = context.fn(...args)
    }
    delete context.fn
    return result
}

Function.prototype.myBind = function(context, ...args1){
    return (...args2) => {
        this.apply(context, [...args1, ...args2])
    }

}

function l(e){
    console.log(this.a, this.b, this.c, this.d,e)
}
const obj = {
    a : 1,
    b : 2,
    c : 3,
    d : 4
}


l.myCall(obj,1,2,3,4)