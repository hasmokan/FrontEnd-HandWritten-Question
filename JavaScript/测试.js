const data = [
  {
    "label": 1,
    "value": "-- RBA管理手册 | 从文章中，我们可以了解到RBA管理手册是为我司的社会责任及安全卫生损失而建立的管理方案。..."
  },

];

console.log(data)

data.forEach((item) => {
  console.log("Label:", item.label);
  console.log("Value:", item.value);

});