function * generator(){
    yield 1
    yield 2
    yield 3
}
const gen = generator()
console.log(generator())
console.log(generator().next().value)