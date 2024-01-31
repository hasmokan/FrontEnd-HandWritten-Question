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



function myInstanceof1(obj, proto1){
  p = Object.getPrototypeOf(obj)
  proto = proto1.prototype
  while(true){
    if(!p) return false
    if(p === proto) return true
    p = Object.getPrototypeOf(p)
  }

}

console.log(myInstanceof1(new f(), Object))