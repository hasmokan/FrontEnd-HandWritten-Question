// es5
var Person = (function() {
  // 私有变量
  var privateVariable = 'I am private';

  // 构造函数
  function Person(name, age) {
    // 公共变量
    this.name = name;
    this.age = age;

    // 公共方法
    this.getDetails = function() {
      // 在这里可以访问私有变量
      return 'Name: ' + this.name + ', Age: ' + this.age;
    };
    this.getPrivateVar = function() {
      return privateVariable
    }
  }

  Person.say = function() {
    return 'hello, I am ' + this.age
  }

  return Person;
})();

// 示例用法
var person1 = new Person('John', 25);
console.log(person1.getDetails());
// 试图直接访问私有变量会导致错误
console.log(person1.privateVariable);
console.log(person1.getPrivateVar()) // 通过公共方法访问成功
// 闭包的特性保护了私有变量

// 调用静态方法 static
console.log(Person.say())


// es6
class ClassWithPrivateField {
  // 私有变量
  #privateField;

  constructor() {
    this.#privateField = 42;
    delete this.#privateField;   // 语法错误
    this.#undeclaredField = 444; // 语法错误
  }

  // 公共方法
  sayName(){
    return this.#privateField
  }

  // 静态方法
  static say(){
    return 'hello, I am ' + this.age
  }
  
}

const instance = new ClassWithPrivateField()
instance.#privateField === 42;   // 语法错误

console.log(instance)


