<template>
    <div>
        <router-link to="/youxiang">
            <div class="shouji">
                <a href="youxiang.html"> <h3>邮箱注册</h3></a>
            </div>
        </router-link>
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
//
//
//
//
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
//
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
//            (function ($) {
//                console.log($);
//                $(".test").click(function () {
//                    var num="";
//                    for(var i=0;i<6;i++){
//                        num+=Math.ceil(Math.random()*9)
//                    }
//                    alert(num)
//                })
//            })(jQuery)
        }
    }

</script>

<style scoped>
    .shouji{
        width:100%;
        height:1.8rem;
        text-align: center;
    }
    .shouji h3{
        font-size: 0.4rem;
        color: #586166;
        line-height:1.8rem ;
    }


</style>