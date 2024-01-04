function cnt(str) {
	const map = new Map();
	let max = 0;
	let maxWord = str[0];
	for (let item of str) {
		if (map.has(item)) {
			map.set(item, map.get(item) + 1);
		} else {
			map.set(item, 1);
		}
		if (map.get(item) > max) {
			max = map.get(item);
			maxWord = item;
		}
	}

	return [max, maxWord];
}

console.log(cnt("abbbccccc"));
