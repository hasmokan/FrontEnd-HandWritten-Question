function deepClone(object1) {
	const map = new WeakMap();

	let deep = (value) => {
		if (value === null || typeof value !== "object") return value;

		if (map.has(value)) return map.get(value);

		let result = Array.isArray(object1) ? [] : {};

		map.set(value, result);
		for (let key in obj) {
			if (obj.hasOwnProperty(key)) {
				result[key] = deep(value[key]);
			}
		}
		return result;
	};
	return deep(object1);
}
