function fsPromise (path) {
  return new Promise((resolve, reject) => {
    require('fs').readFile(path, (err, res) => {
      if (err) {
        reject(err)
      } else {
        resolve(res)
      }
    })
  })
}

// test
let p = fsPromise('./promise使用.htm')
p.then(res => {
  console.log('获取文件成功：', res.toString())
}, err => {
  console.log('获取文件失败了：', err)
})