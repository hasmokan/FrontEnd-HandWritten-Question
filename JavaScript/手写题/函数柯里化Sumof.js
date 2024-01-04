function curried(...args1) {
	this.sumOf = function () {
		return args1.reduce((pre, cur) => pre + cur);
	};
	return (...args2) => curried(...args1, ...args2);
}

// let length = 0;
// const curried = (...args) => ({
// 	sumOf: () => args.reduce((acc, val) => acc + val, 0),
// 	[Symbol.toPrimitive]: () => curried(...args),
// });

// console.log(curried(1, 2)(3).sumOf() == 6);
const curried = (...args) => {
	const innerFn = (...newArgs) => curried(...args, ...newArgs);
	innerFn.sumOf = () => args.reduce((acc, val) => acc + val, 0);
	return innerFn;
};
const result = curried(1, 2)(3).sumOf();
console.log(result); // 输出 6
