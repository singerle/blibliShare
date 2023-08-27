// 运算规则：从左向右进行运算，有字符串做拼接，否则做算术加法运算。
// 隐藏小tip：以+开头的，会将右侧的表达式结果进行Number类型转换
// 进行+运算时，数据的转化规则：
// 一、基本数据类型数据间使用“+”：有字符串，则直接进行字符串拼接；没有字符串，转Number后进行算术加法运算。
// 二、遇到引用类型数据 先调用valueof方法得到值为基本数据类型进行一操作，得到的依然是引用类型，则使用调用toString方法得到的值进行运算
// 特殊注意点：BigInt数据不能混合计算，只能同类型计算。Symbol类型数据不能转化为数值类型计算、

// 因此需要掌握的如下内容：
console.log(Number(undefined)) // NaN
console.log(Number(null)) // 0
console.log(Number(false)) // 0
console.log(Number(true)) // 1

console.log(undefined + '') // 'undefined'
console.log(null + '') // 'null'
console.log(NaN + '') // 'NaN'
console.log(false + '') // 'false'
console.log(true + '') // 'true'

console.log([]+'') // ''
console.log({}+'') // '[object Object]'

console.log(({}).valueOf()) // {}
console.log(({}).toString()) // '[object Object]'

console.log(([]).valueOf()) // []
console.log(([]).toString()) // ''
console.log(([1, 2, 3]).toString()) // '1,2,3'
console.log(([1, {}, 3]).toString()) // '1,[object Object],3'


// 见过的面试题：
// 在控制台输出:[]+{}和{}+[]的结果分别是什么？为什么？



console.log(1+2+""+3)  // "3" + 3 ==> 33
console.log(23 + [23,23]) // 2323,23

console.log(undefined + []) // NaN  + '' ==> 'NaN'


// let obj = {
//   valueOf:function(){
//     return {}
//   },
//   toString:function(){
//     return []
//   }
// }

// [] + {}   ===>  '' + '[object Object]' ==> '[object Object]'

// {}+[]  ===> +[] ==> +"" ==> 0

// +单带一个数据 做隐式数据转化  将后面这个表达式的结果转化为数值类型