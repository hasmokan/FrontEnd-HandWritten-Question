let promiseAll = function(fn){
    return new Promise((resolve, reject) => {
        let result = []
        let resolveCnt = 0
        for(let i in fn){
            fn[i]
            .then(res => {
                result[i] = res
                resolveCnt++
                if(resolveCnt === fn.length){
                    resolve(result)
                }
            }, error => {
                reject(error)
            })
        }
    })
}



// test
let p1 = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve(1)
    }, 1000)
})
let p2 = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve(2)
    }, 2000)
})
let p3 = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve(3)
    }, 3000)
})
promiseAll([p3, p1, p2]).then(res => {
    console.log(res) // [3, 1, 2]
})


