
// 1、var声明变量之前使用变量得到的是undefined，let在声明一个变量之前使用变量会形成暂时性死区（TDZ）而报错。
console.log(a) // undefined
var a = 1;

// 执行过程 Start
var a;
console.log(a) // undefined
a = 1;
// 执行过程 End


console.log(a); // tdz 暂时性死区 也就是没有声明的不允许使用
let a = 1;

// 2、在同一个作用域内，可重复var一个变量，但是let不允许变量重复声明。
// var a = 1;
// var a = 2;
// var a = 3;
// console.log(a)

// let a = 1; 
// let a = 2; 报错
// console.log(a)

// 3、var只有全局作用域和局部作用的区分，没有块级作用域。而let有块级作用域。
// var arr = [];
// for(var i = 0; i < 10; i++){
//     arr[i] = function(){
//         console.log(i)
//     }
// }
// arr[3]() // 10

// var arr = [];
// for(let i = 0; i < 10; i++){
//     arr[i] = function(){
//         console.log(i)
//     }
// }
// arr[3]() // 3

// if(true){
//     let i = 12;
//     console.log(i)
// }
// console.log(i)

// 4、const和let类似。不同的是const初衷是用来保存常量，且不可修改（引用类型数据除外）。const一个常量时，必须给出指定的具体值，否则报错。
// const AGE = 18; 不能被修改
// AGE = 10

// const AGE  报错

// // 引用类型数据是以地址的形式进行存储的。
// const obj = {a:1}
// obj.a = 2;
// console.log(obj)



// 5、var是es6前声明变量和常量的唯一关键字。let、const是es6引入的新关键字。












// 1、es6之前js只能通过var来声明常量和变量。
// let和const是es6新提供的定义变量和常量的关键字，目的是去除使用var带来的副作用。推荐使用let、const，逐渐放弃使用var。

// 2、let、const有块级作用域，而var没有。
// 区分全局和局部变量的唯一方式是函数。使用var声明变量就是局部，不使用var声明一个变量则会挂在window下成为全局变量。

// 3、在一个块级作用域内，在let和const之前使用声明的变量，会因为暂时性死区（TDZ）而报错。必须先声明后使用。

// 4、通过var声明的变量可重复声明。而let、const不允许在同一个作用域中重复声明。

// 5、const必须声明时就写入值，否则直接报错

// 6、const声明的常量，不允许被修改。（注：作为地址存储的引用类型在不改变地址的前提下都是可以被修改的）