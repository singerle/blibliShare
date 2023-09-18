let data = [
  { id: '1', name: '钱一', sex: 'man', parent_id: '0' },
  { id: '2', name: '胡二', sex: 'woman', parent_id: '1' },
  { id: '3', name: '张三', sex: 'woman', parent_id: '1' },
  { id: '4', name: '李四', sex: 'woman', parent_id: '2' },
  { id: '5', name: '王五', sex: 'man', parent_id: '4' },
  { id: '6', name: '王二麻子', sex: 'man', parent_id: '3' },
  { id: '7', name: '赵六', sex: 'man', parent_id: '2' },
  { id: '8', name: '田七', sex: 'woman', parent_id: '3' },
  { id: '9', name: '第九', sex: 'man', parent_id: '1' },
]

// target data:
tag = [
  {
    id: 1, name: '钱一', sex: 'man', parent_id: '0', children: [
      {
        id: 2, name: '胡二', sex: 'woman', parent_id: '1', children: [
          { id: '4', name: '李四', sex: 'woman', parent_id: '2' }
        ]
      }
    ]
  }
]

// 将扁平数据转化为树结构数据
function flatToTree (arr) {
  let res = [];
  // map数据对象
  // let mapObj = arr.reduce((pre, cur) => {
  //   pre[cur.id] = cur;
  //   return pre;
  // }, {});
  let mapObj = {};
  arr.forEach(item => mapObj[item.id] = item)
  // console.log(mapObj)
  // 将arr数据进行遍历
  arr.forEach(element => {
    if (element.parent_id === '0') {
      res.push(element)
    } else if (mapObj[element.parent_id]) {
      let parent = mapObj[element.parent_id];
      (parent.children || (parent.children = [])).push(element)
    }
  });
  return res
}

flatToTree(data)

// 原理笔记：
// 应用数据类型的地址应用关系
// let obj = {
//   name: 'singerle',
//   sex: 'man'
// }

// let arr = [obj];
// obj.hobby = 'ping pong';
// console.log(arr[0])

