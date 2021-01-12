// 需求: 将music.mp3读取,并且写入到一个叫music1.mp3文件中

// 1. 采用流的方式读取mp3 
// 1.1 引入fs模块
const fs = require('fs')
// 1.2 创建可读流
const rs = fs.createReadStream('./music.mp3')
// 1.3 获取到每一次读取的数据
rs.on('data',(data)=>{
    ws.write(data)
})
// 2. 通过流的形式写入到music1.mp3中
// 2.1 创建可写流
const ws = fs.createWriteStream('./music1.mp3')
// 监听可读流
rs.on('open',()=>{
    console.log('可读流开启了')
})
rs.on('close',()=>{
    console.log('可读流关闭了')
    //关闭可写流
    ws.end()
})
// 监听可写流
ws.on('open',()=>{
    console.log('可写流开启了')
})
ws.on('close',()=>{
    console.log('可写流关闭了')
})

