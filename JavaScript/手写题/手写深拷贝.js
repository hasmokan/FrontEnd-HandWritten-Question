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

let deepClone = (obj) => {
	let map = new WeakMap();

	let copy = (value) => {
		if (obj === null || typeof obj !== "object") return value;

		if (!map.has(value)) return map.get(value);

		let newObj = Array.isArray(value) ? [] : {};

		map.set(value, newObj);

		for (let key in value) {
			if (obj.hasOwnProperty(key)) {
				newObj[key] = copy(value[key]);
			}
		}
		return result;
	};

	return copy(obj);
};
