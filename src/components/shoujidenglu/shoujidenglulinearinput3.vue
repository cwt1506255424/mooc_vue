<template>
    <div>
        <div class="input3">
            <input type="text" placeholder="请填写您手机获取的验证码"/>
            <span id="shuzi"></span>
            <span class="test">获取短信验证码</span>
        </div>

    </div>
</template>

<script type='text/ecmascript-6'>
    //        import shoujidenglulinear from "./shoujidenglulinear.vue";
    export default {
        components:{
//                shoujidenglulinear
        },
        mounted:function () {
//            window.onload = function(){
//                $("mobilePhone").onblur=function(){
//                    //手机号码：11位，  1开头（后者13|18|17），其余全是数字
//                    //var reg = /^1[0-9]{10}$/;
//                    //var reg = /^1[35784][0-9]{9}$/;
//                    var reg = /^1\d{10}$/;
//                    var str = $("mobilePhone").value;
//                    if(reg.test(str)){
//                        $("showMobilePhoneMsg").innerHTML="☺输入正确!";
//                        $("showMobilePhoneMsg").style.cssText="color:#fff";
//                    }else{
//                        $("showMobilePhoneMsg").innerHTML="☹输入错误!";
//                        $("showMobilePhoneMsg").style.cssText="color:#fff";
//                    }
//                };




//                $("xienima").onblur = function(){
//                    //密码:由6-20个英文字母数字组成
//                    var reg = /^[0-9a-zA-Z_]\w{5,19}$/;
//                    var str = $("xienima").value;
//                    if(reg.test(str)){
//                        $("jiancha").innerHTML="☺输入正确!";
//                        $("jiancha").style.cssText="color:#fff";
//                    }else{
//                        $("jiancha").innerHTML="☹格式错误!由6-20个英文字母数字组成";
//                        $("jiancha").style.cssText="color:#fff";
//                    }
//
//                };

//            };
//            function login1(){
//                var reg = /^1\d{10}$/;
//                var regg = /^[0-9a-zA-Z_]\w{5,19}$/;
//                if(reg.test($("mobilePhone").value) && regg.test($("xienima").value)){
//                    location.href="youxiang.html";
//
//                }else{
//                    alert("请完善您的信息");
//
//                }
//
//            }

//            function ceshi(reg,str){
//                if(reg.test(str)){
//                    return true;
//                }else{
//                    return false;
//                }
//
//            }
            var showMobilePhoneMsg=document.querySelector("#shuzi");
            (function ($) {
                console.log($);
                $(".test").click(function () {
                    var num="";
                    for(var i=0;i<6;i++){
                        num+=Math.ceil(Math.random()*9)
                    }
//                    alert(num)
                    shuzi.innerHTML=num;
                    shuzi.style.color="#fff";
                })
            })(jQuery)
        }
    }

</script>

<style scoped>
    .input3{
        width:100%;
        height:1.52rem;
        margin-bottom: 0.1rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        /*opacity: 0.2;*/
        /*background: #fff;*/
    }
    .input3 input{
        height:1.52rem;
        border:0;
        outline: none;
        font-size: 0.4rem;
        line-height:1.52rem;
        background: none;
        color: #fff;
        margin-left: 0.6rem;
    }
    .input3 span{
        font-size: 0.4rem;
        line-height: 1.52rem;
        color: #14ade9;
        margin-right: 0.52rem;
    }
</style>