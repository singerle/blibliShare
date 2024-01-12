let foo = ()=>console.log(1);
let timer = setInterval(foo,1000);
clearInterval(timer)

let bar = ()=>console.log(2);
let timer1 = setTimeout(bar,1000);
clearTimeout(timer1)