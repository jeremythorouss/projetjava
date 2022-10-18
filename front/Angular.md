
# **Components**
- 
<<<<<<< HEAD
* polyfills.ts 使支持浏览器ES7，使angular内容和ES7兼容
 
2.6 指令 Directive
Angular渲染模板时，它会根据directive提供的操作对DOM进行转换。
Component组件是一个带模版的指令，还有两种其他类型的指令：结构型指令和属性(attributes)型指令
2.6.2 属性型指令修改一个现有元素的外观或行为。在模版中，他们看起来就像是标准的
HTML属性，顾名 -> [prop]
<>

2.7 ng 双数据指令
从左往右：
html文件中，<input 
            (input)/(click)="nameFunction($event)"/>
$event: the data emitted with that event
(input): 当用户进行输入时触发
/(click): default events in the DOM
在ts文件中Function: nameFunction(e){
                        this.variableName = e.target.value;
fetch event data in HTML page: <p>{{ variableName }} </p>

双向：
<input [(ngModel)]="text"/>
<h1>{{text}}</h1>

4.5 模板引用变量（#var）
- # 来引用声明变量 或用 ref- 前缀来代替 #

4.6 安全导航符号 ？.

4.7 Directives 自定义指令
=======

3.8 指令 Directive
3.8.2 自定义指令 
//事件控制颜色显示




# **Typescript**
- 数组：
ex: var jobs: Array<string> = ['IBM','Microsoft','Google']; 
  - var jobs: string[]= [...]
- 枚举： enumerate
ex: enum Role {Employee, Manager, Director, IT};
ex: var role: Role = Role.Employee;/ Role[0];
- any: 任意数据类型
- void：无返回值
ex: function setName(name: string):void { this.name = name;}

# **Form表单**
- 表单输入意味在页面和服务器同时修改这条数据；
- 内容修改需要在页面其他地方反应出来；
>>>>>>> 6cb8b403022abefe71ae2fd5ade55e38a7361213
