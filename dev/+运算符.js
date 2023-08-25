// 运算规则：从左向右进行运算，有字符串做拼接，否则做算术加法运算。只有一个数据时，可用于数据的隐式转化。
// 进行+运算时，值的隐式转化规则：
// 一、基本数据类型数据 直接转数值类型后进行运算
// 二、引用类型数据 先调用valueof方法得到值为基本数据类型进行一操作，得到的依然是引用类型，则使用调用toString方法得到的值进行运算
// 特殊注意点：BigInt数据不能混合计算，只能同类型计算。Symbol类型数据不能转化为数值类型计算、

// 因此需要掌握的如下内容：
console.log(Number(undefined)) // NaN
console.log(Number(null)) // 0
console.log(Number(false)) // 0
console.log(Number(true)) // 1

console.log(({}).valueOf()) // {}
console.log(({}).toString()) // [object Object]

console.log(([]).valueOf()) // []
console.log(([]).toString()) // ''
console.log(([1, 2, 3]).toString()) // '1,2,3'
console.log(([1, {}, 3]).toString()) // '1,[object Object],3'

let obj = {
  toString () {
    return 'toString'
  },
  valueOf () {
    return {}
  }
}

console.log(obj + 2)