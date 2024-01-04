// let str = "ababac";
// let str = "aaabbbcceeff";
let str = "aabbccceeefffff";
let result = "";
let cnt = new Array(26).fill(0);
let len = str.length;
let min = Infinity;

for (let i = 0; i < len; i++) {
	let num = str[i].charCodeAt() - "a".charCodeAt();
	cnt[num]++;
}
for (let i = 0; i < 26; i++) {
	if (cnt[i] !== 0) {
		min = Math.min(cnt[i], min);
	}
}
// console.log(cnt);
for (let i = 0; i < len; i++) {
	let num = str[i].charCodeAt() - "a".charCodeAt();
	if (cnt[num] !== min) {
		result += str[i];
	}
}

console.log(result);
