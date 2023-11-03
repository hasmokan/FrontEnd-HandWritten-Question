function object(o) {
  function f() { }
  f.prototype = o
  return new f()
}

function inheritance(superType, subType) {
  let prototype = object(superType)
  subType.prototype = prototype
  prototype.constructor = subType
}


function superType(name) {
  this.name = name
  this.color = ['red', 'yellow', 'blue']
}

superType.prototype.sayName = () => {
  console.log(this.name);
}

function subType() {
  superType.call(this, 'haha')

}

