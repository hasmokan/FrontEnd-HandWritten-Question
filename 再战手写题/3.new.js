function myNew(constructor, ...args) {
  // 创建一个空对象
  const obj = {};
  // 设置原型链
  Object.setPrototypeOf(obj, constructor.prototype);
  // 将构建函数的this指向新对象，并执行构造函数的代码
  const result = constructor.apply(obj, args);
  // 如果构造函数返回的是对象，则返回该对象；否则返回新创建的对象
  return Object.prototype.toString.call(result) === '[object Object]' ? result : obj;
}
function Person(name, age) {
  this.name = name;
  this.age = age;
}
Person.prototype.say = function () {
  console.log(this.name)
}

let p = myNew(Person, "xxx", 21)
console.log(p) // Person { name: 'xxx', age: 21 }
p.say() // xxx
