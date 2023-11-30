function myPromisify(callback) {
	return function (...args) {
		return new Promise((resolve, reject) => {
			callback(...args, (err, data) => {
				if (err) reject(err);
				resolve(data);
			});
		});
	};
}

// 假设这是一个基于回调的函数
function asyncFunction(input, callback) {
	// 异步操作
	setTimeout(() => {
		if (input) {
			callback(null, `Success: ${input}`);
		} else {
			callback(new Error("Input is missing"));
		}
	}, 1000);
}

// 使用 myPromisify 转换为返回 Promise 的函数
const promisedAsyncFunction = myPromisify(asyncFunction);

// 现在可以像使用 Promise 的其他函数一样使用它
promisedAsyncFunction("Hello")
	.then((result) => {
		console.log(result); // 输出: Success: Hello
	})
	.catch((error) => {
		console.error(error); // 输出: Error: Input is missing
	});
