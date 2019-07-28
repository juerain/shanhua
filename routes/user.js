//引入express模块
const express=require('express');
//引入连接池
const pool=require('../pool.js');
//创建路由器
var router=express.Router();
//添加路由
//1.用户注册
router.post('/reg',(req,res)=>{
  //判断数据是否为空
  var obj=req.body;
  var num=400;
  for(var key in obj){
    num++;
    if(!obj[key]){
      res.send({code:num,msg:key+' required'});
      return;
    }
  }
  //执行SQL语句，添加用户
  var sql="INSERT INTO sh_user SET ?";
  pool.query(sql,[obj],(err,result)=>{
    //抛出错误
    if(err) throw err;
    //判断是否注册成功
    if(result.affectedRows>0){
      res.send({code:200,msg:'reg suc'});
    }else{
      res.send({code:301,msg:'reg err'});
    }
  });
});
//2.用户登录
router.post('/login',(req,res)=>{
  //判断数据是否为空
  if(!req.body.uname){
    res.send({code:401,msg:'uname required'});
    return;
  }
  if(!req.body.upwd){
    res.send({code:402,msg:'upwd required'});
  }
  //执行SQL语句
  var sql="SELECT * FROM sh_user WHERE uname=? AND upwd=?";
  pool.query(sql,[req.body.uname,req.body.upwd],(err,result)=>{S
    //抛出错误
    if(err)  throw err;
    //判断是否登录成功
    if(result.length>0){
      res.send({code:200,msg:'login suc'});
    }else{
      res.send({code:301,msg:'login err'});
    }
  });
});
//3.用户删除
router.get('/delete',(req,res)=>{
  //判断查询编号是否为空
  if(!req.query.uid){
    res.send({code:401,msg:'uid required'});
    return;
  }
  //执行SQL语句
  var sql="DELETE FROM sh_user WHERE uid=?";
  pool.query(sql,[req.query.uid],(err,result)=>{
    //抛出错误
    if(err) throw err;
    //判断是否删除成功
    console.log(result);
    if(result.affectedRows>0){
      res.send({code:200,msg:'delete suc'});
    }else{
      res.send({code:301,msg:'delete err'});
    }
  });
});
//4.用户修改
router.post('/update',(req,res)=>{
  var obj=req.body;
  var uid=obj.uid;
  var uname=obj.uname;
  var phone=obj.phone;
  var email=obj.email;
  var upwd=obj.upwd;
  var num=400;
  //遍历数据
  for(var key in obj){
    num++;
    //判断数据是否为空
    if(!obj[key]){
      res.send({code:num,msg:kdy+' required'});
      return;
    }
  }
  //执行SQL语句
  var sql="UPDATE sh_user set uname=?,upwd=?,phone=?,email=? WHERE uid=?";
  pool.query(sql,[uname,upwd,phone,email,uid],(err,result)=>{
    //抛出错误
    if(err) throw err;
    //判断数据是否删除成功
    if(result.affectedRows>0){
      res.send({code:200,msg:'update suc'});
    }else{
      res.send({code:301,msg:'update err'});
    }
  });
});
//5.用户查询
router.get('/detail',(req,res)=>{
  //判断数据是否为空
  if(!req.query.uid){
    res.send({code:401,msg:'uid required'});
    return;
  }
  //执行SQL语句
  var sql="SELECT * FROM sh_user WHERE uid=?";
  pool.query(sql,[req.query.uid],(err,result)=>{
    //抛出错误
    if(err) throw err;
    //响应查询到的数据
    res.send(result);
  });
});
//6.用户列表
router.get('/list',(req,res)=>{
  //将数据转为整型
  var pno=parseInt(req.query.pno);
  var count=parseInt(req.query.count);
  //设置默认值
  if(!req.query.pno) pno=1;
  if(!req.query.count) count=5;
  //查询开始值
  var start=(pno-1)*count;
  //执行SQL语句
  var sql="SELECT * FROM sh_user LIMIT ?,?";
  pool.query(sql,[start,count],(err,result)=>{
    //抛出错误
    if(err) throw err
    //响应查询结果
    res.send(result);
  });
});


//导出路由
module.exports=router;