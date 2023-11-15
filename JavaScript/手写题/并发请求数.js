function createTask(i) {
  return new Promise((resolve, reject) => {
    () => {
      setTimeout(() => {
        resolve(i)
      }, 2000)
    }
  })
}


function taskQueue() {
  this.max = 10
  this.queue = []

  this.add = (task) => {
    this.queue.push(task)
  }

  this.run = () => {
    const length = this.queue.length
    if (!length) return

    const min = Math.min(this.max, length)
    for (let i = 0; i < min; i++) {
      this.max--
      const task = this.queue.shift()
      task().then(res => {
        console.log(res)
      }).catch(error => {
        console.log(error)
      }).finally(() => {
        this.max++
        this.run()
      })
    }
  }
}

const taskqueue = new taskQueue()

for (let i = 0; i < 20; i++) {
  taskqueue.add(createTask(i))
}