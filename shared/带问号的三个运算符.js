// 三目运算符（A ? B : C）
// 空值合并运算符（A ?? B）
// 可选链运算符（A ?. B）

// true ? ('true' ? 1:2): 'false'

let testA = NaN;
let testB = '额';
let obj = {
  b: { c: '基督教' }
}
// ?? ?. 都是符号前面的表达式结果只为undefined或者null的时候，才会执行和返回后面的表达式的执行结果,也就是和||运算不同的地方
console.log(testA ?? testB)


// ?. 读取对象
obj.a && obj.a.c
obj?.a?.c

// 数组
let arr = [2,{a:{func:""
}}]
// '' false NaN 0
arr?.[1]?.a

// 函数
// arr?.[1]?.a?.func()

// ?. 和 ?? 的组合使用

arr ?. [1].b ?? '默认值'







