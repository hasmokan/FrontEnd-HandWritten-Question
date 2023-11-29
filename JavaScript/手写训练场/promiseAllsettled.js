let myPromiseAllSettled = function(promises){
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



let p1 = new Promise((resolve) => {
    setTimeout(() => {
        resolve(1)
    }, 1000);
})
let p2 = new Promise((resolve) => {
    setTimeout(() => {
        resolve(2)
    }, 2000);
})
let p3 = new Promise((resolve) => {
    setTimeout(() => {
        resolve(3)
    }, 3000);
})

Promise.myPromiseAllSettled([p1,p2,p3]).then((data) => console.log(data))
// Promise.allSettled([p1,p2,p3]).then((data) => console.log(data))