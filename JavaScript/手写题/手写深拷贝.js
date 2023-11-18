const obj = {
	arr: [1, 2, 3],
	a: 4,
};
obj.sub = obj;
obj.arr.push(obj);

function deepClone(obj = {}) {
	const map = new WeakMap();

	const copy = (value) => {
		if (value === null || typeof value !== "object") return value;

		if (map.has(value)) {
			return map.get(value);
		}

		let result = Array.isArray(value) ? [] : {};
		map.set(value, result);

		for (let key in value) {
			if (value.hasOwnProperty(key)) {
				result[key] = copy(value[key]);
			}
		}
	

		return result;
	};

	return copy(obj);
}

let newObj = deepClone(obj);
console.log(newObj.arr !== obj.arr);
console.log(newObj.sub !== obj.sub);
console.log(newObj.arr[3] !== obj);
console.log(newObj.arr[3] === newObj);

/*手写无法处理循环的深拷贝*/
// let deepClone = (obj = {}) => {
// 	if (!obj || typeof obj !== "object") return;

// 	let newObj = Array.isArray(obj) ? [] : {};

// 	for (let key in obj) {
// 		// 判断是否是自身的属性而不是原型链上的属性
// 		if (obj.hasOwnProperty(key)) {
// 			newObj[key] =
// 				typeof obj[key] === "object" ? deepClone(obj[key]) : obj[key];
// 		}
// 	}
// 	return newObj;
// };
