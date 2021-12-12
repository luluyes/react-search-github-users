# 样式的模块化 (.module.css)
component.module.scss
import style from '../component.module.scss'
<div className={style.title}>Title</div>

# 连续结构赋值
let obj = {a:{b:{c:1}}}
console.log(obj.a.b.c) // 1
const {a:{b:{c}}} = obj // 相当于 const c = 1， a,b都不可用
console.log(c)

连续结构赋值并重命名
let obj2 = {a:{b:1}}
const {a:{b:data}} = obj2
console.log(data)

# 兄弟组件传递数据
使用消息的订阅与发布机制
工具库：PubSubJS （有其他库）
使用方法：https://github.com/mroderick/PubSubJS

# Ajax 请求
1. xhr： new XMLHttpRequest ()
2. jQuery: 对xhr的封装。但有可能形成回调地狱
3. axios： 对xhr的封装。解决回调地狱。属于Promise风格
4. fetch：不属于xhr，浏览器内置，无须安装库。属于Promise风格

关注分离（xhr设计不符合关注分离：Separation of Concerns）
