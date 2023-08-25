// 发布-订阅模型
let bus = {
  // 订阅者列表
  subscribersList: {},
  // 订阅方法subscribe
  subscribe: function (clientId, fn) {
    (this.subscribersList[clientId] || (this.subscribersList[clientId] = [])).push(fn)
  },
  // 发布方法publish
  publish: function () {
    let curSubscriber = Array.prototype.shift.call(arguments),
      fns = this.subscribersList[curSubscriber];
    // 当前是未订阅或者发布事件函数为空，不进行下一步操作
    if (!fns || fns.length === 0) {
      return false
    }
    // 遍历执行订阅的事件函数
    for (let i = 0, fn; fn = fns[i++];) {
      fn.apply(this, arguments)
    }
  }
}

// 数据劫持
let mountData = function ({ data, key, target, selector }) {
  let value = '',
    el = document.querySelector(selector);
  Object.defineProperty(data, key, {
    get () {
      // 获取到当前值
      console.log('获取到当前值', value)
      return value
    },
    set (val) {
      // 设置值
      value = val;
      // 监听到修改时，发布修改view
      bus.publish(target, val)
      console.log(key, '修改为：', val)
      return value
    }
  })
  // 根据视图修改数据
  el.addEventListener('keyup', () => {
    console.log(key, '修改为：', el.value)
    value = el.value;
  })
  // 添加订阅
  bus.subscribe(target, (val) => {
    el.value = val;
  })
}

// 