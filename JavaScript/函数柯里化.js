function add() {
  let args = Array.prototype.slice.call(arguments)

  let inner = function () {
    args.push(...arguments)
    return inner
  }
  return inner // 这里会进入调用 就像递归一样 即 尾递归
}

console.log(add(1)(2)(3)(4));