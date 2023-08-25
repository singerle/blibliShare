// 一、什么是SPA？
//  single page app 单页面应用（vue项目通常用的比较多）
// 二、SPA优缺点？
// 优点：
// 1、页面更新速度快
// 2、组件化，利于后期的维护
// 3、服务器压力小，内容是打包后的js执行渲染的。
// 缺点：
// 1、不利于seo （搜索引擎优化） 例如百度搜索引擎，爬页面，爬页面是爬取html的内容，单页面只挂了一个html，然后挂了个app容器。因此不利于seo
// 2、首屏响应时间长 （相对于不是spa的网站页面来讲的，因为spa需要加载好所有组件页面。）现在已有解决方案：支持了按需加载。用到的才加载。


// 三、mvc和mvvm？
// mvc和mvvm是两种不同的程序架构。
// mvc由 model（数据模型层）、view（视图层）、controler（控制层）组成。他们的流程是单向的：
// view层的用户交互动作 ==》 controler ==》 修改model的数据 ==》 修改view视图
// mvvm由 model（数据模型层）、view（视图层）、viewmodel（视图模型）组成。他们的流程是通过viewmodel统一控制的，可以通过view的修改，通知到viewmodel，viewmodel控制修改model。也可以是model层修改了数据，viewmodel去控制视图的修改。

