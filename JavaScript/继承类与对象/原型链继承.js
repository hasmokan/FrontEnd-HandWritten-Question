function Parent() {
  this.name = 'hasmokan'
}

Parent.prototype.getName = function () {
  console.log(this.name);
}

function Child() {
  this.name = 'xiaoha'
}

Child.prototype = new Parent()

let child = new Child()

child.getName()
