// Symbol.unscopables 属性对象，控制使用with时，使用对象的相关属性是否可用

let person = {
  name:'张三',
  age:18
}

person[Symbol.unscopables] = {
  age:true
}

with(person){
  console.log(name)
  console.log(age)
}


