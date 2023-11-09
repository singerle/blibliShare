let str = 'html';
let str1 = 'css';
let str2 = 'javaScript';

let arr = [str, str1, str2, 'hello world!'];

// 法一：+
let res = str + str1 + str2;
console.log('res:' + res)

// 法二：join 数组转字符串常用方法
let res1 = arr.join('');
console.log("res1:"+res1)

// 法三：concat String对象方法
let res2 = str.concat(str1,str2)
console.log('res2:' + res2)
// 延伸 （字符串拼接数组内的字符串）
let res3 = ''.concat.apply(str,arr);
console.log('res3:' +  res3)
