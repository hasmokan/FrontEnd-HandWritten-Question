const inputString = "1234567.89";
const reg = /(\d)(?=(\d{3})+\.)/g;

const matches = inputString.match(reg);

if (matches) {
  // matches 包含符合正则表达式的所有子串组成的数组
  for (const match of matches) {
    console.log(match); // 打印符合正则表达式的子串
  }
}