function asyncPool(poolLimit){
    let i = 0
    const executing = []
    this.poolLimit = poolLimit || 5
    this.add = (promiseCreator) => {
        if(this.executing.length < poolLimit){
            const p = Promise.resolve().then(() => promiseCreator)
            const e = p.then(res => {
                this.executing.splice(executing.indexOf(e), 1)
                return res
            })
            this.executing.push(e)
            return e
        } else {
            const race = Promise.race(executing)
            return race.then(() => this.add(promiseCreator))
        }
    }
    
}

const startTime = new Date().getTime()
function task(task, time){
    return new Promise((resolve => {
        const endTime = new Date.getTime() - startTime
        console.log(`${task}---${endTime}开始执行`)
        setTimeout(() => {
            resolve()
            const endTime = new Date.getTime() - startTime
            console.log(`${endTime}---${task}执行完毕`)
        }, time)
    }))
}

console.log(Promise.resolve().then(() => console.log(1)))
