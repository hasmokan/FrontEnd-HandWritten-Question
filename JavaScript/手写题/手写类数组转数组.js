let arr = {
	0: "11",
	1: "22",
	2: "33",
	3: "44",
	4: "55",
	5: "66",
	length: 6,
};
let tmp1 = Array.from(arr);
let tmp2 = Array.prototype.slice.call(arr);

let tmp4 = Array.prototype.concat.apply([], arr);
let tmp3 = Array.prototype.splice.call(arr, 0);
console.log(tmp1, tmp2, tmp3, tmp4);

let arrayLike = { 0: "a", 1: "b", 2: "c", length: 3 };
let array1 = Array.from(arrayLike);
let array2 = Array.prototype.slice.call(arrayLike);

let array3 = Array.prototype.concat.apply([], arrayLike);
let array4 = Array.prototype.splice.call(arrayLike, 0);
console.log(array1, array2, array3, array4);
