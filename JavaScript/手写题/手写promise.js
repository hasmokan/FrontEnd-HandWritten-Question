/*
 * @Author: hasmokan 1021056159@qq.com
 * @Date: 2023-10-15 19:51:11
 * @LastEditTime: 2023-10-16 00:51:57
 * @LastEditors: hasmokan 1021056159@qq.com
 * @FilePath: \hasmokan的案例\JavaScript\手写题\手写promise.js
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
  // 面试时候可以用 setTimeout(() => {callback, 0})来代替 十分粗糙 实现异步

  // 参照vue写法
  // 判断node环境
  if (process && process.nextTick) { // node环境
    process.nextTick(callback)
  }
  else if (MutationObserver) { // 浏览器环境
    const p = document.createElement('p')
    const observer = new MutationObserver(callback)
    observer.observe(p, {
      childList: true //观察该元素的内部变化
    })
    p.innerHTML = 1
  }
  else { // 其他环境
    setTimeout(callback, 0)
  }

}

/**
 * @Description: 判断链式调用中返回的是不是Promise对象
 * @param {any} obj
 * @return {Boolean}
 */
function isPromise(obj) {
  // Promise A+规范 是对象并且有then方法 
  return !!(obj && typeof obj === 'object' && typeof obj.then === 'function')
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
  _pushHandler(executor, state, resolve, reject) {
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
  _runOneHandler({ executor, state, resolve, reject }) {
    runMicroTask(() => {
      if (this._state !== handler.state) {
        // 状态不匹配,不处理
        return
      }
      // 状态一致但传的不是函数
      if (typeof handler.executor !== 'function') {
        this._state === FULFILLED ? handler.resolve(this._value) : handler.reject(this._value)
        return
      }
      try { // 实现链式调用
        const result = executor(this._value)
        if (isPromise(result)) {
          result.then(resolve, reject)
        } else { // 不是Promise对象
          resolve(result)
        }
        resolve(result)
      } catch (error) {
        reject(error) // 执行的期间有错
      }

    })
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
      this._pushHandler(onFulfilled, FULFILLED, resolve, reject)
      this._pushHandler(onRejected, REJECTED, resolve, reject)
      this._runHandlers(); // 改变状态的时候触发
    })
  }
}

const promise = new myPromise((resolve, reject) => {
  setTimeout(() => {
    resolve(1)
  })
})
promise.then(function A1() { }, undefined).then(function A2() { }, function B2() { })

// setTimeout(() => {console.log(1);})
// runMicroTask(() => {console.log(2);})

// console.log(3);

myPromise.deferred = function () {
  var result = {};
  result.promise = new myPromise(function (resolve, reject) {
    result.resolve = resolve;
    result.reject = reject;
  });

  return result;
}