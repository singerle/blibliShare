// 1、声明变量未赋值
let a;
console.log(a)


// 2、对象上的属性，包括继承属性。如果说该属性不存在，那么返回undefined
let obj = {
  a:'123'
}
console.log(obj.b)

// 3、函数的返回值，如果不return。那么使用函数调用的结果值为undefined
function foo(){
  console.log(123)
}
let d = foo();
console.log(d)

// 4、函数传入的实参数量小于形参，那么后面没没有接收到实参的形参变量值为undefined
function bar(a,b,c){
  console.log(a,b,c)
  console.log("c：",c)
}
bar(1,2)