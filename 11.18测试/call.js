// Function.prototype.myApply = function (context, ...args) {
// 	if (typeof this !== "function") {
// 		throw new Error("err");
// 	}
// 	let result = null;
// 	context = context || window;

// 	context.fn = this;
// 	if (!args) {
// 		result = context.fn();
// 	} else {
// 		result = context.fn(...args);
// 	}

// 	delete context.fn;
// 	return result;
// };
// function l(...args) {
// 	console.log(...args);
// }
// l.myApply(this, [1, 2, 3]);

// Function.prototype.myBind = function(context) {
//   // 判断调用对象是否为函数
//   if (typeof this !== "function") {
//     throw new TypeError("Error");
//   }
//   // 获取参数
//   var args = [...arguments].slice(1),
//       fn = this;
//   return function Fn() {
//     // 根据调用方式，传入不同绑定值
//     return fn.apply(
//       this instanceof Fn ? this : context,
//       args.concat(...arguments)
//     );
//   };
// };

function add(a, b, c, d) {
	console.log(this.clothes, a, b, c, d);
}

let o = {
	clothes: "shirt",
};

Function.prototype.myBind = function (context, ...args1) {
	return (...args2) => {
		this.apply(context, [...args1, ...args2]);
	};
};

let myAdd = add.myBind(o, 1, 2, 3)(4);
