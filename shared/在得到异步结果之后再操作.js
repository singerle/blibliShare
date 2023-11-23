let count = 0;
async function addCount(num,delay){
  // 正确写法：等到异步值回来之后再操作
  let val = await fetchCount(num,delay)
  count += val;
  // // 错误写法：调用时就获取了其他有可能被其他值修改的值，导致无法得出想要的结果
  // count += await fetchCount(num,delay)
}
async function fetchCount(n,delay){
  return new Promise((resolve)=>{
    setTimeout(()=>{
      resolve(n)
    },delay)
  })
}
addCount(1,200)
addCount(2,100)

setTimeout(()=>{
  console.log(count)
},2000)