// 在一些情况下用some代替forEach
let arr = [1,2,3,4,5];

// for(let i = 0; i < arr.length; i++){
//   console.log(i)
//   if(arr[i] === 1){
//     // 操作
//     break;
//   }
// }

let res = arr.some((item)=>{
  console.log(item)
  if(item === 1) return true; // return true 后，终止数组遍历
})

console.log(res)


