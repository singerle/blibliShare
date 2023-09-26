// foo(){
//     console.log(123)
// } 
// name undefined
// a undefined

foo()
console.log(name)
console.log(a)
// 变量声明提升
// 函数声明提升
function foo(){
    console.log(123)
}

if(true){
    var a = 1;
}

var name = 'blibli';