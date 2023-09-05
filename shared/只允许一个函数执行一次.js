// 写一个函数once，传入一个函数，使得再次调用时无法触发
function once (fn) {
  let flag = true;
  return (...args) => {
    if (flag) {
      flag = false;
      fn(...args)
    }
  }
}

function testRun (r) {
  console.log(r)
  console.log("欢迎关注、点赞、收藏、投币")
}

let onceRun = once(testRun);
onceRun('感谢大家的支持')
onceRun('感谢大家的投币')


