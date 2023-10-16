let obj = {
    // a:undefined,
    // b:()=>{
    //     return 1
    // }
}
obj[Symbol('a')] = 'SymbolA'
Object.defineProperty(obj,'c',{
    value:2,
    enumerable:false
})

// 法一：判断JSON.stringify后等于字符串"{}"
// 局限性：
    // 1、忽略属性值为undefined、function,Symbol类型的属性
    // 2、属性为Symbol类型会被忽略。

console.log(JSON.stringify(obj) ==="{}")

// for(let i in obj){
//     console.log(i) // a,b
// }

// 法二：for in遍历对象 
// 局限性：属性为Symbol类型会被忽略，不可遍历类型的属性无法被遍历出来
function isNullObj(){
    for(let i in obj){
        return false
    }
    return true
}
isNullObj()

// 法三：Object.keys() 判断长度为0
// 局限性：属性为Symbol类型会被忽略，不可遍历类型的属性无法被遍历出来
console.log('Object.keys',Object.keys(obj),Object.keys(obj).length === 0)

// 法四：Object.getOwnPropertyNames()  判断长度为0
// 属性为Symbol类型会被忽略
console.log('Object.getOwnPropertyNames',Object.getOwnPropertyNames(obj),Object.getOwnPropertyNames(obj).length === 0)

// 法五：Reflect.ownKeys()  判断长度为0
// 近乎完美，不可枚举属性、symbol类型属性，都会被返回

console.log('Reflect.ownKeys',Reflect.ownKeys(obj),Reflect.ownKeys(obj).length === 0)



// 相关知识点：
Object.getOwnPropertyDescriptor(obj,'a') // 查看对象上某个属性或者方法的具体属性内容
obj.hasOwnProperty('a')  // 检测属性a是否时obj对象的自有属性
Object.getOwnPropertySymbols(obj) // 返回obj对象中Symbol类型属性名形成的数组


