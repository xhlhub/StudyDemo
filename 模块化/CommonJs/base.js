const age = 1;
const foo = () => {};
const obj = {
  age,
  foo,
};

// module.exports = obj;

// 多次导出
// module.exports.a = () => {};
// module.exports.obj = obj;

// 会覆盖上面的module.exports
// module.exports = {
//   b: 1,
// };

// exports = exports.obj
exports.obj = obj; // 相当于 module.exports.obj = obj
// console.log("load");

// console.log(Object.getOwnPropertyDescriptor(globalThis, "module"));
// console.log(global);
// console.log(__filename);

// console.log(__dirname);

// console.log(require);

/*
module.exports和exports
相同点：
1. module.exports = exports
2. 都可以导出多个值
module.exports.a = 1
module.exports.b = 2

exports.a = 1
exports.b = 2

不同点
1. module.exports可以直接导出一个属性，exports导出值必须放在一个属性里
module.exports = obj 直接导出obj
exports = obj 错误写法，覆盖exports变量
2. module不能赋值，exports赋值会覆盖默认exports
3. module.exports 是commonJs2规范
*/

/*
commonjs和esm

1. 都可以用webpack打包
2. commonjs运行时，esm编译时
3. node是commonJs服务端实现，boweryjs（拼写有误）是浏览器实现
*/
