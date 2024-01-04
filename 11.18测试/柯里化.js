function curring(fn) {
	return function curried(...args) {
		if (fn.length <= args.length) {
			return fn.apply(this, args);
		} else {
			return function (...newArgs) {
				// 再次柯里化， 尾递归
				return curried.apply(this, args.concat(newArgs));
			};
		}
	};
}

function add(a, b, c, d) {
	return a + b + c + d;
}

let curriedAdd = curring(add);

console.log(curriedAdd(1));
