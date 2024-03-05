function add(a, b, c, d, e) {
	console.log( a + b + c + d)
}

function curry(fn) {
	return function curried(...args) {
		if (fn.length <= args.length) {
            return fn.apply(this, args);
		} else {
			console.log(fn.length,1)
            return (...args2) => curried(...args, ...args2);
		}
	};
}

let curryAdd = curry(add);

curryAdd(1)(2)(3)(4)()
