function Parent(name) {
  this.name = name
  this.age = [100, 200]
}

function Child(name) {
  Parent.call(this, name)

}



let i1 = new Child('哈哈')
i1.age.push(12333)
console.log(i1);

let i2 = new Child('我hh')
console.log(i2)