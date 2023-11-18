// 语法：
// JSON.stringify(value[, replacer [, space]])
// JSON.parse(text, reviver)
// 详细请看mdn

let obj = {
  a:1,
  age:23,
  id:'xxxxxxxxx',
  b:"string",
  c:false
}

// let copy = JSON.parse(JSON.stringify(obj));

// replacer // 数组  函数
JSON.stringify(obj, ["a","age"]) // 数组
function replacer(key,value){
  if(key === ''){
    return value
  }
  if(key == 'a' || key === 'age'){
    return undefined
  }
  return value;
}

JSON.stringify(obj, replacer) // 函数

// 支持数字和字符串 （1-10）
JSON.stringify(obj, replacer,10)

let jsonStr = JSON.stringify(obj);

function reviver(key,value){
  if(key === ''){
    return value
  }
  if(key == 'a' || key === 'age'){
    return undefined
  }
  return value;
}

JSON.parse(jsonStr,reviver)