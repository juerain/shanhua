/**
 * Created by web on 2019/7/15.
 */
// ���ı���Ļ��ʧȥ����ʱ���ı�div����ʽ
var txtName=document.getElementsByName("username")[0];
var txtPwd=document.getElementsByName("pwd")[0];
var txtRpwd=document.getElementsByName("rpwd")[0];
var txtEmail=document.getElementsByName("email")[0];
console.log(txtName);
// ��ô����¼���Ԫ��
txtName.onfocus=txtPwd.onfocus=txtRpwd.onfocus=txtEmail.onfocus=function(){
    var span=this.parentNode.children[3];
    console.log(span);
    span.className="";
}
txtRpwd.onfocus=function(){
    var span=this.parentNode.children[3];
    span.className="";
    span.innerHTML="<span style='color:black;'>���ٴ�ȷ������<span>";
}
txtName.focus();
function vali(reg){
    // ���幫�õ�������֤����

    // �����Ҫ�޸ĵ�Ԫ�ض���
    var span=this.parentNode.children[3];
    // ���������ʽ��֤ͨ�����Ͱ�span����ʽ��Ϊvali_success
    if(reg.test(this.value)==true){
        span.className="vali_success";
    }else{
        // ���򣬾͸�Ϊvali_fail
        span.className="vali_fail";
    }
}
// Ϊ�û�����󶨴����¼�����
txtName.onblur=function(){
    // ����������ʽ
    var reg=/^[a-zA-Z][a-zA-Z0-9]{3,15}$/;
    // ���ù��õ�vali����������call�������ı�this��ָ��
    vali.call(this,reg);
}
// Ϊ�����󶨴����¼�����
txtPwd.onblur=function(){
    // ����������ʽ
    var reg=/^[a-zA-Z0-9]{4,10}$/;
    // ���ù��õ�vali����������call�������ı�this��ָ��
    vali.call(this,reg);
}
// Ϊ����󶨴����¼�����
txtEmail.onblur=function(){
    // ����������ʽ
    var reg=/^([0-9A-Za-z\-_\.]+)@([0-9a-z]+\.[a-z]{2,3}(\.[a-z]{2})?)$/g;
    // ���ù��õ�vali����������call�������ı�this��ָ��
    vali.call(this,reg);
}
//Ϊȷ�������󶨴����¼�����
txtRpwd.onblur=function(){
    var span=this.parentNode.children[3];
    if(this.value===""){
        span.className="vali_fail";
        span.innerHTML="<span style='color:red'>���벻��Ϊ��<span>";
    }else if(this.value===txtPwd.value){
        span.className="vali_success";
    }else{
        span.innerHTML="<span style='color:red'>���벻һ��<span>";
        span.className="vali_rfail";
    }
}
