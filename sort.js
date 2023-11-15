var fruits = [
  { label: 'Apple', value: 2 },
  { label: 'Banana', value: 12 },
  { label: 'Cherry', value: 8 },
  { label: 'Strawberry', value: 13 },
  { label: 'Pineapple', value: 4 }]


// 1.使用for循环和forEach两种方法输出13在数组 fruits 对应的label和索引 

for (let i = 0; i < fruits.length; i++) {
  if (fruits[i].value === 13) {
    console.log(fruits[i].label, i)
  }
}

fruits.forEach((item, index) => {
  if (item.value === 13) {
    console.log(item.label, index)
  }
})


// 2.根据value值递增排序(不限方法) 

fruits.sort((a, b) => {
  return a.value - b.value
})
console.log(fruits)

// 3.计算value总合(不限方法)

let sum = 0
for (let i = 0; i < fruits.length; i++) {
  sum += fruits[i].value
}
console.log(sum)
