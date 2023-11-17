// 加上...  args自动会转化成数组
Function.prototype.myCall = function(context, ...args){
    if(typeof this !== 'function'){
        throw new Error('error')
    }

    let result = null

    context = context || window
    context.fn = this
    result = context.fn(...args)
    delete context.fn

    return result
}

// args传入的参数数组
Function.prototype.myApply = function(context, args){
    if(typeof this !== 'function'){
        throw new Error('error')
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

Function.prototype.myBind = function(context){
    
}


function l(...args){
    console.log(...args)
}


l.myCall(this, 1, 2, 3)
l.myApply(this, [1, 2, 3])