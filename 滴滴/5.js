let date1 = { id: 1, date: new Date(100000) };
let date4 = { id: 4, date: new Date(100001) };
let date2 = { id: 2, date: new Date(200000) };
let date3 = { id: 3, date: new Date(300000) };

let arr = [date3, date1, date2, date4];

// arr.sort((a, b) => {
// 	return a.date - b.date;
// });

for (let i = 0; i < arr.length; i++) {
	for (let j = i; j < arr.length; j++) {
		if (arr[i].date > arr[j].date) {
			[arr[i], arr[j]] = [arr[j], arr[i]];
		}
	}
}

console.log(arr);
