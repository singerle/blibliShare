let arr = [1, 2, 1, 2, 3, 4, 5, 4, 6, 6]; // ==> [1,2,3,4,5,6]
let len = arr.length;

// ES6 常用Set对象来去重
let res = [...new Set(arr)]
console.log('Set去重：', res)

// ES5 利用对象属性的唯一性去重
let obj = {};
let objArr = [];
for (let i = 0; i < len; i++) {
  if (obj[arr[i]]) {
    continue
  }
  obj[arr[i]] = true;
  objArr.push(arr[i])
}
console.log('objArr：', objArr)

// ES5 利用数组的一些特性去重的一些思路
// 1、利用数组indexOf方法判断要成立的数组是否存在，不存在就push进去
let newArr = [];
for (let i = 0; i < len; i++) {
  if (!~newArr.indexOf(arr[i])) {
    newArr.push(arr[i])
  }
}
console.log('newArr:', newArr)


// 2、利用数组的下标判断
let newArr1 = [];
for (let i = 0; i < len; i++) {
  if (arr.indexOf(arr[i]) === i) {
    newArr1.push(arr[i])
  }
}
console.log('newArr1:', newArr1)

// 3、数组先排序，然后相邻两项相同的去掉
let temp = JSON.parse(JSON.stringify(arr)).sort();
let newArr2 = [temp[0]];
for (let i = 1; i < len; i++) {
  if (temp[i] === temp[i - 1]) {
    continue;
  }
  newArr2.push(temp[i])
}
console.log('newArr2：', newArr2)

// 4、双层循环（立一个flag，有相同的跳出到下一次循环）
let newArr3 = [];
for (let i = 0; i < len; i++) {
  let flag = true; // 重复标志
  for (let j = i + 1; j < len; j++) {
    if (arr[i] === arr[j]) {
      flag = false;
      break;
    }
  }
  flag && newArr3.push(arr[i])
}
console.log('newArr3：', newArr3)


// 5、双层循环（用splice删除掉重复的元素）
let newArr4 = JSON.parse(JSON.stringify(arr));
for (let i = 0; i < len; i++) {
  for (let j = i + 1; j < len; j++) {
    if (newArr4[i] === newArr4[j]) {
      newArr4.splice(j, 1)
    }
  }
}
console.log('newArr4：', newArr4)

// 6、filter+indexOf 原理和  2、利用数组的下标判断 相同，写法和利用的方法不同
let newArr5 = arr.filter(function (item, i, curArr) {
  return curArr.indexOf(item, 0) === i;
})
console.log('newArr5：', newArr5)
