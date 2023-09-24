let testArr = [];

// 方法一：Object.prototype.toString
console.log(Object.prototype.toString.call(testArr) === '[object Array]')  // [object Array]

// 方法二：Array.isArray
console.log(Array.isArray(testArr))

// 方法三：testArr instanceof Array
console.log(testArr instanceof Array)

// 方法四：constuctor
console.log(testArr.constructor === Array)

// 方法法：__proto__  ==> Array.prototype
console.log(testArr.__proto__ === Array.prototype)

