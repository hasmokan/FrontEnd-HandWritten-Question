Promise.myAny = function (promises) {
	return new Promise((resolve, reject) => {
		let err = [];
		let cnt = 0;
		for (let i in promises) {
			promises[i]
				.then((res) => {
					resolve(res);
				})
				.catch((error) => {
					err[i] = error;
					cnt++;
				})
				.finally(() => {
					if (cnt === promises.length) {
						reject(err);
					}
				});
		}
	});
};

const p1 = new Promise((resolve, reject) => {
	setTimeout(() => {
		reject("p1");
	}, 1000);
});

const p2 = new Promise((resolve, reject) => {
	setTimeout(() => {
		reject("p2");
	}, 2000);
});

const p3 = new Promise((resolve, reject) => {
	setTimeout(() => {
		reject("p3");
	}, 3000);
});

Promise.myAny([p1, p2, p3])
	.then((res) => console.log(res))
	.catch((err) => console.log(err));
