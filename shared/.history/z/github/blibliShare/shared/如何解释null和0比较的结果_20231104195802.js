// 说一下下面每行代码的执行结果，说说是为什么？
null == 0  // false
null > 0 // false
null < 0 // false
null >= 0 // true
null <= 0 // true

// null 0 都是基本数据类型 null null和undefined才相等。
// 非==，比较大小。null先隐式转化为Number，为0