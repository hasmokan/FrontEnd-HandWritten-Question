//块级作用域实现 花括号{}就是块级作用域
// for (let i = 1; i <= 5; i++) {
// 	setTimeout(() => {
// 		console.log(i);
// 	}, i * 1000);
// }
//闭包实现
// for (var i = 1; i <= 5; i++) {
// 	(function (i) {
// 		setTimeout(() => {
// 			console.log(i);
// 		}, i * 1000);
// 	})(i);
// }

// 作用域问题
/*这问题涉及到 JavaScript 中的变量作用域和异步执行的特性。

在你的代码中，使用了 setTimeout 函数，它是异步执行的。当 setTimeout 中的回调函数执行时，它会访问外部的变量 i。由于 JavaScript 中的变量作用域是函数作用域，而不是块级作用域，因此 i 是在 for 循环的全局作用域中声明的。

在 setTimeout 的回调函数执行时，循环已经执行完毕，此时 i 的值已经是 6。因此，无论 setTimeout 的延迟是多少，它都会打印五个6。 */
for (var i = 1; i <= 5; i++) {
	setTimeout(() => {
		console.log(i);
	}, i * 1000);
}
