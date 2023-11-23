/*
去除字符串中连续的ac和b
 */

let str = "acacbbbb";
let st = "bbdfg";
let str1 = "ghghacbdsfds";
let str2 = "dfaaabbbcccdfdf";

function deleteACB(str) {
	if (str.length <= 0) return str;
	let stack = [];
	for (let i = 0; i < str.length; i++) {
		if (str[i] === "c" && stack[stack.length - 1] === "a") {
			stack.pop();
			continue;
		} else if (str[i] === "b" && stack[stack.length - 1] === "b") {
			let j = i;
			while (str[j] === "b") {
				j++;
			}
			i = j - 1;
			stack.pop();
			continue;
		}
		stack.push(str[i]);
	}
	return stack;
}
console.log(deleteACB(str));
console.log(deleteACB(str2));
console.log(deleteACB(st));
console.log(deleteACB(str1));
