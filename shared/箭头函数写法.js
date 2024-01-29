function foo (a) {
  return a * 2
}

let bar = a => a * 2;

foo(1)
bar(1)

let arr = [1,2,3];

let arr1 = arr.map(item => item * 2)

let arr2 = arr.map(item => ({a:item * 2}))

console.log(arr2)
console.log(arr1)
