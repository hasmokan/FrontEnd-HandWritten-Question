function closure() {
	let person = {
		name: "xiao",
		age: 18,
	};
	return function (key) {
		return person[key];
	};
}

let fn = closure();
// nickname = "hh";

Object.prototype.nickname = "hh";
console.log(fn("name"));
console.log(fn("nickname"));

let a = {};

Object.defineProperty(a, "self", {
	get() {
		return this;
	},
});

Object.defineProperty(Object.prototype, "self", {
	get() {
		return this;
	},
});

fn("self").age = 20;
console.log(a === a.self);
console.log(fn("self"));

(async () => {
	console.log(1);

	await new Promise((resolve) => {
		console.log(2);
	}).then((_) => {
		console.log(3);
	});

	setTimeout(() => {
		console.log(4);
	});

	console.log(5);
})();
