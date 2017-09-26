<template>
    <div>
        <div class="input1">
            <input id="eMail" type="text" placeholder="输入注册邮箱" required="required"/><span id="showEMailMsg"></span>
        </div>
    </div>
</template>

<script type='text/ecmascript-6'>
    export default {
        mounted: function () {

            var eMail=document.querySelector("#eMail");
            var showEMailMsg=document.querySelector("#showEMailMsg");

            eMail.onblur = function () {
                //邮箱： ****@***.com；开始是数字字母下划线@开始是数字字母下划线.com或者net或者cn

                var reg = /^\w+@\w+\.(com|net|cn|com\.cn)$/;
                var str = document.querySelector("#eMail").value;
                if (reg.test(str)) {
                    showEMailMsg.innerHTML = "☺输入正确!";
                    showEMailMsg.style.color = "#fff";
                } else {
                    showEMailMsg.innerHTML = "☹输入错误!";
                    showEMailMsg.style.color = "#fff";
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