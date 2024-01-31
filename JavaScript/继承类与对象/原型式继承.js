function object(o) {
  function f() { }
  f.prototype = o
  return new f()
}

let person = {
  name: 'hasmokan',
  friend: ['xiaoming', 'xiaohu']
}

let h1 = object(person)
h1.name = '你好'

h1.friend.push('hhh')
console.log(h1.friend)

let h2 = object(person)
h2.name = 'hh'

console.log(h2)