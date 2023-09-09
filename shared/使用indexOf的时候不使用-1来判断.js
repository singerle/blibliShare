let arr = [1, 3, 3, 3, 5];
if (arr.indexOf(3)) {
  console.log('欢迎三连！')
}
if (arr.indexOf(6) == -1) {
  console.log('谢谢观看！')
}

if (!~arr.indexOf(6)) {
  console.log('谢谢观看！')
}

// !~arr.indexOf(6)  ~arr.indexOf(6)

