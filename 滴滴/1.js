let arr = [
	{ key: "x", value: 2 },
	{ key: "x", value: 2 },
	{ key: "x", value: 3 },
];

const map = new Map();
let result = [];
for (let i = 0; i < arr.length; i++) {
	let item = arr[i];
	if (!map.has(arr[i].value)) {
		result.push(arr[i]);
	}
	map.set(arr[i].value, true);
}

console.log(result);
