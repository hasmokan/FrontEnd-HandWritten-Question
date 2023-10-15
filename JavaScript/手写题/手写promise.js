/*
 * @Author: hasmokan 1021056159@qq.com
 * @Date: 2023-10-15 19:51:11
 * @LastEditTime: 2023-10-15 21:28:51
 * @LastEditors: hasmokan 1021056159@qq.com
 * @FilePath: \JavaScript\手写题\手写promise.js
 * @Description: 手写promise
 */

//小知识 使用ES6的class来实现,属于严格模式，this的指向会变为undefined
//_resolve和_reject是私有方法,下划线表示私有方法

// 用字符串表示状态就会更改很多，如果用常量表示三种状态将来只需要改变字符串
const PENDING = 'pending'
const FULFILLED = 'fulfilled'
const REJECTED = 'rejected'

/**
 * @Description: 运行一个微队列，把传递的函数放到微队列中
 * @param {Function} callback
 */
function runMicroTask(callback) {
  callback()
}

class myPromise {
  /**
   * @Description: 创建一个Promise
   * @param {Function} executor 任务执行器,立即执行
   */
  constructor(executor) {
    this._state = PENDING // 默认是pending
    this._value = null; // 存放成功返回的data
    this._handlers = [] // 处理函数形成的队列
    try {
      // 传入this._resolve和this._reject 没有指定上下文 所以需要bind绑定
      executor(this._resolve.bind(this), this._reject.bind(this))
    } catch (error) {// 因为执行过程中出错自动转化为rejected
      this._reject(error)
    }
  }

  /**
   * @Description: resolve(),reject()相同处理就抽离函数
   * @param {String} newState
   * @param {any} data
   */
  _changeState(newState, data) {
    // 如果不是pending就不更改
    if (this._state !== PENDING) {
      return
    }
    this._state = newState
    this._value = data
    this._runHandlers() // 状态变化，执行队列
  }
  /**
   * @Description: 标记当前任务完成
   * @param {String} data 成功返回的data
   */
  _resolve(data) {
    this._changeState(FULFILLED, data)

  }

  /**
   * @Description: 标记当前拒绝
   * @param {String} reason 失败返回的原因
   */
  _reject(reason) {
    this._changeState(REJECTED, reason)
  }

  /**
   * @Description: 向处理队列中添加一个函数, 
   * @param {Function} executor 添加的函数
   * @param {String} state 该函数什么状态下执行， 成功后执行还是失败后执行
   * 下方两个属性是重难点，因为返回的Promise无法知道什么时候解决和拒绝，只有将来执行fn时才知道，是实现链式调用的根本，
   * @param {Function} resolve 让then函数返回的Promise成功 
   * @param {Function} reject 让then函数返回的Promise失败
   */
  _pushHandlers(executor, state, resolve, reject) {
    this._handlers.push({
      executor,
      state,
      resolve,
      reject
    })
  }

  /**
   * @Description: 根据实际情况执行队列
   */
  _runHandlers() {
    if (this._state === PENDING) {
      return
    }
    // for (const handler of this._handlers) { // 如果成功或者失败
    //   this._runOneHandler(handler)
    //   this._handlers.shift()
    // }
    // 为了替代上方那种bug
    while (this._handlers[0]) { // 保证
      this._runOneHandler(this._handlers[0])
      this._handlers.shift()
    }

  }

  /**
   * @Description: 处理一个handler
   * @param {Object} handler
   */
  _runOneHandler(handler) {
    runMicroTask(() => {
      if (this._state !== handler.state) {
        // 状态不匹配,不处理
        return
      }
      console.log(this._state)
      console.log(handler);
    })
    if (typeof handler.executor !== 'function') {
      this._state === FULFILLED ? handler.resolve(this._value) : handler.reject(this._value)
    }
  }

  /**
   * @Description: Promise A+规范的then
   * @param {Function} onFulfilled
   * @param {Function} onRejected
   * @return {myPromise}
   */
  then(onFulfilled, onRejected) {
    return new myPromise((resolve, reject) => { // 为了支持链式调用
      // 放入微任务队列
      this._pushHandlers(onFulfilled, FULFILLED, resolve, reject)
      this._pushHandlers(onRejected, REJECTED, resolve, reject)
      this._runHandlers(); // 改变状态的时候触发
    })
  }
}

const promise = new myPromise((resolve, reject) => {
  setTimeout(() => {
    resolve(1)
  })
})
promise.then(function A1() { }, undefined)
promise.then(function A2() { }, function B2() { })

