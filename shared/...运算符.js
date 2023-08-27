// ... 展开运算符？剩余运算符？
// 1、做数据的展开
// 2、做函数剩余参数

// 以下几个场景来看看...的使用
// 一、set去重得到一个数组
[...new Set([1, 23, 4, 1, 1, 3, 4])]
// 二、将数组a展开合并插入到数组任意位置
let a = [2, 3];
console.log([1, ...a, 4, 5]) // [1, 2, 3, 4, 5]
// 三、对象融合与属性重置
let obj = {
    name: 'singerle',
    age: 18
}
let obj1 = {
    age: 30,
    hobby: 'play game'
}
let me = {
    height: '185cm',
    ...obj,
    ...obj1
}
console.log(me)

// 四、函数传参（注意只能放最后一个）
function foo(a, b, ...rest) {
    console.log(a, b, rest)
}
console.log(foo(1, 2, 3, 4, 5))

// 五、解构赋值
let [x, y, ...z] = [1, 2, 3, 4, 5]
console.log(x,y,z)

// 六、Math.max方法求数组中最大值，巧妙使用...
Math.max(1,2,3,4,6,5) // 6
let arr = [1,2,3,4,6,5] 
// ...写法：
Math.max(...arr) // 6
// 以前写法：
Math.max.apply(null,arr) // 6