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
  arr.forEach(item => {
    if(item.parent_id === '0'){
      res.push(item)
    }
    // 用filter直接筛选出结果
    item.children = arr.filter(ele => item.id === ele.parent_id)
    // 直接遍历写法
    // item.children = [];
    // arr.forEach(ele => {
    //   item.id === ele.parent_id && item.children.push(ele)
    // })
  });
  return res
}
let res = flatToTree(data)
console.log(res)