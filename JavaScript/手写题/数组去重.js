let arr = [1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 4, 4, 4, 4, 4, 5, 5, 5, 5, 5, 5, 5, 5]

// sort
// Map
// set

// includes

// let tmp = []
// for (let i = 0; i < arr.length; i++) {
//   if (!tmp.includes(arr[i])) {
//     tmp.push(arr[i])
//   }
// }


// indexOf -1

// let tmp = []
// for (let i = 0; i < arr.length; i++) {
//   if (tmp.indexOf(arr[i]) === -1) {
//     tmp.push(arr[i])
//   }
// }
// console.log(tmp)

// for for

// for (let i = 0; i < arr.length; i++) {
//   for (let j = i + 1; j < arr.length; j++) {
//     if (arr[j] === arr[i]) {
//       arr.splice(i, 1)
//       // 往前移动一位，因为j++会往后一位
//       j--
//     }
//   }
// }
// console.log(arr)

// filter
arr = arr.filter((item, index) => {
  console.log(arr.indexOf(item), index)
  // 就取第一个
  return arr.indexOf(item) === index
})

console.log(arr)