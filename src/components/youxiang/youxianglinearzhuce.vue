<template>
    <div>
        <router-link to="/index">
            <div class="zhuce">
                <!--<h3>注册</h3>-->
                <input type="submit" value="注册" class="h3" id="login1"/>
                <!--@onclick="login1()"-->
            </div>
        </router-link>
    </div>
</template>

<script type='text/ecmascript-6'>
    export default {
        components:{

        },

        mounted:function () {
            var login1=document.querySelector("#login1");
            login1.onclick=function(){
                var reg = /^\w+@\w+\.(com|net|cn|com\.cn)$/;
                var regg = /^[0-9a-zA-Z_]\w{5,19}$/;

                if(reg.test(document.querySelector("#eMail").value) && regg.test(document.querySelector("#xienima").value)){
                    location.href="index.html";

                }else{
                    alert("请完善您的信息");

                }

            }
            function ceshi(reg,str){
                if(reg.test(str)){
                    return true;
                }else{
                    return false;
                }

            }
        }

    }
</script>

<style scoped>
    .zhuce{
        width:7.92rem;
        height:1.5rem;
        margin:0 auto;
        background: #245b79;
        margin-top: 0.72rem;
        text-align: center;
    }
    .zhuce .h3{
        font-size: 0.52rem;
        font-weight: 700;
        color: #fff;
        line-height: 1.5rem;
        border:0;
        outline: none;
        background: none;
    }

</style>