/**
 * Created by web on 2019/7/15.
 */
// 当文本框的获得失去焦点时，改变div的样式
var txtName=document.getElementsByName("username")[0];
var txtPwd=document.getElementsByName("pwd")[0];
var txtRpwd=document.getElementsByName("rpwd")[0];
var txtEmail=document.getElementsByName("email")[0];
console.log(txtName);
// 获得触发事件的元素
txtName.onfocus=txtPwd.onfocus=txtRpwd.onfocus=txtEmail.onfocus=function(){
    var span=this.parentNode.children[3];
    console.log(span);
    span.className="";
}
txtRpwd.onfocus=function(){
    var span=this.parentNode.children[3];
    span.className="";
    span.innerHTML="<span style='color:black;'>请再次确认密码<span>";
}
txtName.focus();
function vali(reg){
    // 定义公用的正则验证函数

    // 获得需要修改的元素对象
    var span=this.parentNode.children[3];
    // 如果正则表达式验证通过，就把span的样式改为vali_success
    if(reg.test(this.value)==true){
        span.className="vali_success";
    }else{
        // 否则，就改为vali_fail
        span.className="vali_fail";
    }
}
// 为用户名框绑定触发事件函数
txtName.onblur=function(){
    // 定义正则表达式
    var reg=/^[a-zA-Z][a-zA-Z0-9]{3,15}$/;
    // 调用公用的vali函数，调用call函数，改变this的指向
    vali.call(this,reg);
}
// 为密码框绑定触发事件函数
txtPwd.onblur=function(){
    // 定义正则表达式
    var reg=/^[a-zA-Z0-9]{4,10}$/;
    // 调用公用的vali函数，调用call函数，改变this的指向
    vali.call(this,reg);
}
// 为邮箱绑定触发事件函数
txtEmail.onblur=function(){
    // 定义正则表达式
    var reg=/^([0-9A-Za-z\-_\.]+)@([0-9a-z]+\.[a-z]{2,3}(\.[a-z]{2})?)$/g;
    // 调用公用的vali函数，调用call函数，改变this的指向
    vali.call(this,reg);
}
//为确认密码框绑定触发事件函数
txtRpwd.onblur=function(){
    var span=this.parentNode.children[3];
    if(this.value===""){
        span.className="vali_fail";
        span.innerHTML="<span style='color:red'>密码不能为空<span>";
    }else if(this.value===txtPwd.value){
        span.className="vali_success";
    }else{
        span.innerHTML="<span style='color:red'>密码不一致<span>";
        span.className="vali_rfail";
    }
}
