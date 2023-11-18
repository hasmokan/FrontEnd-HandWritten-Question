// 加上...  args自动会转化成数组
Function.prototype.myCall = function (context, ...args) {
	if (typeof this !== "function") {
		throw new Error("error");
	}

	let result = null;

	context = context || window;
	context.fn = this;
	result = context.fn(...args);
	delete context.fn;

	return result;
};

// args传入的参数数组
Function.prototype.myApply = function (context, args) {
	if (typeof this !== "function") {
		throw new Error("error");
	}

	let result = null;
	context = context || window;
	context.fn = this;
	if (!args) {
		result = context.fn();
	} else {
		result = context.fn(...args);
	}

	delete context.fn;
	return result;
};

function add(a, b, c, d) {
	console.log(this.clothes, a, b, c, d);
}

let o = {
	clothes: "shirt",
};

// bind只需要柯里化一层
Function.prototype.myBind = function (context, ...args1) {
	return (...args2) => {
		this.apply(context, [...args1, ...args2]);
	};
};

let myAdd = add.myBind(o, 1, 2, 3)(4);
function l(...args) {
	console.log(...args);
}

l.myCall(this, 1, 2, 3);
l.myApply(this, [1, 2, 3]);
