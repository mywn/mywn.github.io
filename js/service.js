var content = document.getElementsByClassName("service")[0];
function GetQueryString(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if (r != null)
        return unescape(r[2]);
    return "";
}
//JS操作cookies方法!
//这是有设定过期时间的使用示例：
//s20是代表20秒
//h是指小时，如12小时则是：h12
//d是天数，30天则：d30
function setCookie(name,value,time){
    var strsec = getsec(time);
    var exp = new Date();
    exp.setTime(exp.getTime() + strsec*1);
    document.cookie = name + "="+ escape (value) + ";expires=" + exp.toGMTString();
}
function getsec(str){
    var str1=str.substring(1,str.length)*1; 
    var str2=str.substring(0,1); 
    if (str2=="s"){
        return str1*1000;
    }else if (str2=="h"){
        return str1*60*60*1000;
    }else if (str2=="d"){
        return str1*24*60*60*1000;
    }
}
//读取cookies
function getCookie(name){
    var arr,reg=new RegExp("(^| )"+name+"=([^;]*)(;|$)");
    if(arr=document.cookie.match(reg)) return unescape(arr[2]);
    else return null;
}
//删除cookies
function delCookie(name)
{
    var exp = new Date();
    exp.setTime(exp.getTime() - 1);
    var cval=getCookie(name);
    if(cval!=null) document.cookie= name + "="+cval+";expires="+exp.toGMTString();
}

try {
    var aid = GetQueryString('aid') || getCookie('aid') || sessionStorage.getItem('aid');
    console.log(aid)
    if(aid && aid == 'yong96820'){
        setCookie('aid',aid,'h1')
        sessionStorage.setItem('aid',aid)
        var kefuStrings = document.getElementsByClassName("kefu");
        if(kefuStrings){
            for (var index = 0; index < kefuStrings.length; index++) {
                kefuStrings[index].innerHTML = '微信客服: ' + aid
                
            }

        }

        var html ='<ul>'+
            '<li class="pic">'+
                '<img src="./images/wechat_ yong96820.png">'+
            '</li>'+
            '<li class="con"><span>客服微信</span></li>'+
        '</ul>';
        content.innerHTML = html;
    }
    
} catch (error) {
    
}

/**
 *     var html ='<ul>'+
        '<li class="pic">'+
            '<img src="./images/wechat_ yong96820.png">'+
        '</li>'+
        '<li class="con"><span>客服微信</span></li>'+
        '<li class="pic">'+
            '<img src="'+'./images/jxzTaobao.png'+'">'+
        '</li>'+
        '<li class="con"><span>淘宝店铺</span></li>'+
    '</ul>';
*/