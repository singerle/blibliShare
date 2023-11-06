// 说一下下面每行代码的执行结果，说说是为什么？
null == 0  // false
null > 0 // false
null < 0 // false
null >= 0 // true
null <= 0 // true

// ==比较运算符 不做隐式转化，规定另一端表达式结果是null或undefined才相等。
// 非==比较运算。null先隐式转化为Number，为0。
