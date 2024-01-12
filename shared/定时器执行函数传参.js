// let foo = ()=>console.log(1);
function foo(...args){
  console.log(args);
}
// let timer1 = setInterval(foo,1000)
// let timer2 = setInterval("console.log(1);",1000)
let arr = [1,2,3,4]
let timer1 = setInterval(foo,1000,arr)

// demo
for(let i = 0; i < 5; i++){
  setTimeout(function(a){
    console.log(a)
  },0,i)
}