function throttle(func, delay){
    let timer

    return function (...args){
        if(timer) return

        setTimeout(() => {
            func.apply(this, args)
            timer = null // 置空
        }, delay)
    }
}
