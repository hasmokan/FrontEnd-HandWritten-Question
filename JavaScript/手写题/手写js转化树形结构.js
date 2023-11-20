// function convertToTree(arr) {
// 	const map = new Map();
// 	const roots = [];

// 	for (const node of arr) {
// 		const { id, pid, name } = node;
// 		const newNode = { id, name, children: [] };
// 		map.set(id, newNode);

// 		if (pid === null) {
// 			roots.push(newNode);
// 		} else {
// 			const parent = map.get(pid);
// 			parent.children.push(newNode);
// 		}
// 	}

// 	return roots;
// }

// const arr = [
// 	{ id: 1, pid: 1, name: "A" },
// 	{ id: 2, pid: 1, name: "B" },
// 	{ id: 3, pid: null, name: "C" },
// 	{ id: 4, pid: 3, name: "D" },
// 	{ id: 5, pid: 3, name: "E" },
// ];

// const tree = convertToTree(arr);
// console.log(tree);

let arr = [
	{ id: 1, pid: 2, name: "A" },
	{ id: 2, pid: 2, name: "B" },
	{ id: 3, pid: null, name: "C" },
	{ id: 4, pid: 3, name: "D" },
	{ id: 5, pid: 3, name: "E" },
];

function tree() {
	let cnt = 1;
	let result = [];
	let flag = new Array(arr.length).fill(false);
	let map = new WeakMap();
	let createTree = (o = {}) => {
		map.set(o, true);
		if (o === null || undefined) return;
		o.child = [];
		for (let item of arr) {
			if (item.pid === o.id) {
				flag[item.id - 1] = true;
				o.child.push(item);
				cnt++;
			}
		}

		for (let item of o.child) {
			if (!map.has(o)) createTree(item);
		}
		result.push(o);
		return;
	};

	for (let i = 0; i < arr.length; i++) {
		if (!flag[arr[i].id - 1]) createTree(arr[i]);
	}

	return result;
}

console.log(tree());
