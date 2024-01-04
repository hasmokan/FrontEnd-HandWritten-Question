let obj = {
	a: 1,
	b: [1, 2, 3],
	c: { k: 1 },
};

let deepClone = (o = {}) => {
	const copy = (value) => {
		if (!value || typeof value !== "object") return value;
		let result = Array.isArray(value) ? [] : {};

		for (let key in value) {
			if (value.hasOwnProperty(key)) {
				result[key] = copy(value[key]);
			}
		}

		return result;
	};

	return copy(o);
};

console.log(deepClone(obj));
