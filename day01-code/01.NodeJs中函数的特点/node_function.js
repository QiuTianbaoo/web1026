//#region
//  * 1.在NodeJS中，所有的模块（js文件），都被自动包裹了一个外层函数
//  * 2. 外层函数：function (exports, require, module, __filename, __dirname) {...}
//  *       -- exports : 用于暴露模块
//  *       -- require ：用于引入模块
//  *       -- module ： 用于暴露了模块
//  *       -- __filename ：当前文件的路径（绝对路径）
//  *       --__dirname ：当前文件所在文件夹的路径（绝对路径）
//  *
//  * 3.这个外层函数有什么用？
//  *     1.让我们可以直接使用CommonJs语法。
//  *     2.隐藏内部实现（作用域）
//  *     3.处于安全性考虑
//  *
//  * arguments.callee.toString 在函数内部执行,用于查看当前函数
//  *
//  * */
//#endregion



// 在node平台下执行这个js的时候,node会自动给这个js文件里面的代码,包裹一个函数


// function fn(){
//     console.log('自定义的函数')
//     // 在函数执行的过程中,想要查看当前函数
//     console.log(arguments.callee.toString())
// }
// fn()
console.log('node平台下执行')
// console.log(arguments.callee.toString())
console.log(__filename) // 返回当前文件的绝对路径
console.log(__dirname) //返回当前文件所处文件夹的绝对路径