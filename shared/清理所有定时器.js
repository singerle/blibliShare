let timer = setInterval(()=>{
  console.log(1)
},1000)
let timer1 = setInterval(()=>{
  console.log(2)
},1000)
let timer2 = setInterval(()=>{
  console.log(3)
},1500)

clearInterval(timer)

function clearAllTimer(){
  let max = setInterval(()=>{});
  for(let i = 0; i <= max; i++){
    clearInterval(i)
  }
}


