// // // 快手

// const queue = [];
// let maxCon = 3;
// let running = 0;
// const processQueue = () => {
// 	if (running >= maxCon) {
// 		return;
// 	}

// 	const job = queue.shift();

// 	if (!job) {
// 		return;
// 	}

// 	running += 1;
// 	request(job.param).then(
// 		(r) => {
// 			running -= 1;
// 			job.resolve(r);
// 			processQueue();
// 		},
// 		(err) => {
// 			running -= 1;
// 			job.reject(err);
// 			processQueue();
// 		}
// 	);
// };
// function myRequest(param) {
// 	return new Promise((resolve, reject) => {
// 		queue.push({
// 			param,
// 			resolve,
// 			reject,
// 		});
// 		processQueue();
// 	});
// }

// 渡一
// 传入url数组

function myRequest(urls, maxNum) {
	const result = [];
	let index = 0;
	let cnt = 0;
	async function request() {
		if (index === urls.length) return;
		const i = index;
		const url = urls[index++];

		try {
			const res = await fetch(url);
			result[i] = res;
		} catch (err) {
			result[i] = err;
		} finally {
			cnt++;
			if (cnt === urls.length) {
				resolve(result);
			}
			request();
		}
	}
	const times = Math.min(maxNum, url.length);
	for (let i = 0; i < times; i++) {
		request();
	}
}

const max = 3
const promises = []
const running = 0 
function queue(){
	if(running >= max) return false

	const job = promises.shift()
	
	if(!job) return
	running ++
	request(job.param).then(
		res => {
			running--
			job.resolve(res)
			queue()
		},
		err => {
			running--
			job.reject(err)
			queue()
		}
	)

}


function myRequest(){
	return new Promise(() => {
		promises.push({
			param,
			reslove,
			reject
		})
		queue()
	})
}