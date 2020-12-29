//写法一：直接声明+输出

// export var a =1      
// import {a} form ''

// export function foo(){}
// import { foo } form ''

// export var a =1
// export function foo1(){
//     console.log('foo1')
// }
// export function foo2(){
//     console.log('foo1')  
// }
//import { a, foo1, foo2 }

//写法二：先声明，后输出

// var a =1
// export {a}
// import {a}

// function foo1(){
//     console.log('foo1')
// }
// function foo2(){
//     console.log('foo1')  
// }
// export { foo1, foo2 }
//import { foo1, foo2 }

//写法三：default (1:变量无需声明 2:import不需要加 {} 3:一个文件只能有一个 export default)

// export default function(){
//     console.log(123)
// }
// import foo from ''


//写法四 default和命名导出组合
// export default 1
// export var b =2
// import a,{b} from ''


//写法五：* 模块整体加载
// export {a,b}
// import * as obj from ''
// obj.a
// obj.b

//六:动态加载
// import('')
// 总结：
// 1、import export 提供模块输入输出接口，本质是提供接口和变量一一对应关系
// 2、静态加载（与AMD CommentJs不同），编译时运行（所以不能写在代码块、条件语句里）
// 3、import的接口名字不允许修改，修改报错
// 4、自动采用严格模式
// 5、node目前不支持,node里有自己的module:require() ==> exports
// 6、html不支持直接引入,需要编译