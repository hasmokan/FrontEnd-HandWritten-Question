let promiseAllSettled = function(promises){
    return new Promise((resolve, reject) => {
        let result = []
        let resolvedCnt = 0
        for(let i in promises){
            promises[i].then(res => {
                result[i] = {
                    status: 'onFulfilled',
                    value: res
                }
            }).catch(err => {
                result[i] = {
                    status: 'onRejected',
                    reason: err
                }
            }).finally(() => {
                resolvedCnt++
                if(resolvedCnt === promises.length){
                    resolve(result)
                }
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
        reject('err')
    }, 3000)
})
promiseAllSettled([p3, p1, p2]).then(res => {
    console.log(res) // [3, 1, 2]
})

Promise.allSettled