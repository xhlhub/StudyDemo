function foo(){
    let value = 0;
    // value++;
    return function(){
        return ++value
    }
}

let a = foo()
/* 
测试一：

console.log(a())//1
console.log(a())//2

let c = foo()

console.log(c()) //1
console.log(a()) //3  

结论1：说明a和c不是共用一个执行环境，每执行一次函数就创造一个新的执行环境
 */

/*  
测试二：

console.log(a())//1

foo = null

console.log(a()) //2

结论2：闭包生效以后，删除函数并不能，结束已创建执行环境，除非删除return的变量 a = null
       防止内存泄露，删除return的变量
*/

/* 
证明结论1：
function xoo(){
    let i = 0
    return function(){
        return this
    }
}

console.log(xoo() === xoo())//false
*/

/*
结论3：
定义：一个函数能访问另一个函数变量
形式：函数内定义函数
内存泄露条件：
1：形成函数套函数
2：内部函数引用外部函数变量
3：return 内部函数
*/