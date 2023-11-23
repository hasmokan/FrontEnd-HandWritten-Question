Array.prototype.myReduce = function (callback, initValue, index, arr1) {
	let arr = this;

	initValue = initValue === "undefined" ? arr[0] : initValue;
	let i = initValue === "undefined" ? 1 : 0;
	let pre = 0;
	for (i; i < arr.length; i++) {
		pre = callback(pre, arr[i], i, arr);
	}

	return pre;
};

let arr = [23, 1, 23, 3, 4, 412, 4, 124, 12];

console.log(arr.reduce((pre, cur, i) => pre + cur));

console.log(arr.myReduce((pre, cur) => pre + cur));
