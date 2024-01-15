function myInstanceOf(left, right){
  let proto = Object.getPrototypeOf(left), prototype = right.prototype
  while(true){
    if(!proto) return false
    if(proto === prototype) return true

    proto = Object.getPrototypeOf(proto)
  }
}

function f(){}

console.log(myInstanceOf(new f(), Object))