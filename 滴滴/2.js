let arr = [
	{
		key: "x",
		value: 2,
		children: [
			{ key: "x", value: 4 },
			{ key: "x", value: 4 },
		],
	},
	{ key: "x", value: 2 },
	{ key: "x", value: 3 },
];

const map = new Map();
let result = [];
for (let i = 0; i < arr.length; i++) {
	if (arr[i].children) {
		let child = [];

		for (let item of arr[i].children) {
			if (!map.has(item.value)) {
				child.push(item);
			}
			map.set(item.value, true);
		}
		arr[i].children = child;
	}
	if (!map.has(arr[i].value)) {
		result.push(arr[i]);
	}
	map.set(arr[i].value, true);
}

console.log(result);
