
###定义
Babel 是一个 JavaScript 编译器，将 ECMAScript 2015+ 版本的代码转换为向后兼容的 JavaScript 语法（es5或更老的语法），以便能够运行在当前和旧版本的浏览器或其他环境中

###babel使用方式
1. 使用单体文件 (standalone script)
2. 命令行 (cli)
3. 构建工具的插件 (webpack 的 babel-loader, rollup 的 rollup-plugin-babel)。

###Plugins & Presets
####plugin
babel本身不具备转化功能，通过一系列插件（**plugin**）来实现功能，比如plugin-transform-arrow-functions转化箭头函数
####preset
定义：预设（**preset**），一组预定的插件。（一组插件套餐）
分类：env, react, flow, minify, Stage-x

###配置
-项目范围的配置
babel.config.json 文件，具有不同的扩展名（babel.config.json/babel.config.js/babel.config.cjs/babel.config.mjs）都会被识别
-相对文件配置
.babelrc.json（别名.babelrc） 文件，具有不同的扩展名
package.json里

###其他
useBuiltIns: 'usage';配置babel-polyfill,usage表示只加入项目用到的垫片功能
故开发类库，第三方模块或者组件库时使用transform-runtime，平常的项目使用babel-polyfill即可

###链接
[一口（很长的）气了解 babel](https://zhuanlan.zhihu.com/p/43249121)
[了解babel：polyfill、loader、 preset-env及 core之间的关系](https://zhuanlan.zhihu.com/p/138108118)

