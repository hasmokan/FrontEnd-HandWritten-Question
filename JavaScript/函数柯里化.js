function add(a, b, c, d) {
  return a + b + c + d
}


function curry(fn){
  return function curried(...args){
    if(fn.length <= args.length){
      return fn.apply(this, args)
    } else{
      return function(...newArgs){
        // 再次柯里化， 尾递归
        return curried.apply(this, args.concat(newArgs))
      }
    }
  }
}


let curryAdd = curry(add)

console.log(curryAdd(1)(2)(3)(4));