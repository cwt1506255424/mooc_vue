<template>

        <div class="input1">
            <input id="mobilePhone" type="text" placeholder="请输入手机号码" required="required"/><span id="showMobilePhoneMsg"></span>
        </div>


</template>

<script type='text/ecmascript-6'>
//        import shoujidenglulinear from "./shoujidenglulinear.vue";
        export default {
            components:{
//                shoujidenglulinear
            },
            mounted:function () {

                var mobilePhone=document.querySelector("#mobilePhone");
                var showMobilePhoneMsg=document.querySelector("#showMobilePhoneMsg");
                    mobilePhone.onblur=function(){
                        //手机号码：11位，  1开头（后者13|18|17），其余全是数字
                        //var reg = /^1[0-9]{10}$/;
                        //var reg = /^1[35784][0-9]{9}$/;
                        var reg = /^1\d{10}$/;
                        var str = document.querySelector("#mobilePhone").value;
                        if(reg.test(str)){
                            showMobilePhoneMsg.innerHTML="☺输入正确!";
                            showMobilePhoneMsg.style.color="#fff";
                        }else{
                            showMobilePhoneMsg.innerHTML="☹输入错误!";
                            showMobilePhoneMsg.style.color="#fff";
                        }
                    };



            }
        }

</script>

<style scoped>
    .input1{
        width:100%;
        height:1.52rem;
        margin-bottom: 0.1rem;
        /*opacity: 0.2;*/
        /*background: #fff;*/
    }
    .input1 input{
        height:1.52rem;
        border:0;
        outline: none;
        font-size: 0.4rem;
        line-height: 1.52rem;
        background: none;
        color: #fff;
        margin-left: 0.6rem;
    }
</style>