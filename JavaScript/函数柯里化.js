// function add(a, b, c, d) {
// 	return a + b + c + d;
// }

// function curry(fn) {
// 	return function curried(...args) {
// 		if (fn.length <= args.length) {
// 			return fn.apply(this, args);
// 		} else {
// 			return function (...newArgs) {
// 				return curried.apply(this, args.concat(newArgs));
// 			};
// 		}
// 	};
// }

// function curry(fn) {
// 	return function curried(...args) {
// 		if (fn.length <= args.length) {
// 			return fn.apply(this, args);
// 		} else {
// 			return (...args2) => curried(...args, ...args2);
// 		}
// 	};
// }

// let curryAdd = curry(add);

// console.log(curryAdd(1)(2)(3)(4));

console.log(typeof +"255");
