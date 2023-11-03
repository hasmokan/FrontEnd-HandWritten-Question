function object(o) {
  function f() { }
  f.prototype = o
  return new f()
}

function createAnother(origin) {
  let clone = object(origin)
  clone.sayHi = () => {
    console.log('hi');
  }
  return clone
}

let person = {
  name: 'hasmokan',
  friend: ['xiaoha', 'hehehaha']
}

let anotherPerson = createAnother(person)

anotherPerson.sayHi()