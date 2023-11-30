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
