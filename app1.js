//引入express模块
const express=require('express');
//引入body-parser模块
const bodyParser=require('body-parser');
//引入路由器模块
const userRouter=require('./routes/user.js');

//创建服务器
var server=express();
//监听端口
server.listen(8080);
//托管静态资源
server.use(express.static('public'));
//使用body-parser中间件，使字符串转换为对象
server.use(bodyParser.urlencoded({
  extended:false
}));




//挂载路由
server.use('/user',userRouter);
