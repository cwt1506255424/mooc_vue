<template>
    <div>
        <div class="input2">
            <!--<input id="mima" type="text" placeholder="密码" required/>-->
            <input id="xienima" type="text" placeholder="密码" required="required"/><span id="jiancha"></span>
            <i class="icon iconfont">&#xe61b;</i>
        </div>
    </div>
</template>

<script type='text/ecmascript-6'>
    export default {
        mounted: function () {

            var xienima=document.querySelector("#xienima");
            var jiancha=document.querySelector("#jiancha");

            xienima.onblur = function(){
                //密码:由6-20个英文字母数字组成
                var reg = /^[0-9a-zA-Z_]\w{5,19}$/;
                var str = document.querySelector("#xienima").value;
                if(reg.test(str)){
                    jiancha.innerHTML="☺输入正确!";
                    jiancha.style.cssText="color:#fff";
                }else{
                    jiancha.innerHTML="☹格式错误!由6-20个英文字母数字组成";
                    jiancha.style.cssText="color:#fff";
                }

            };
        }
    }

</script>

<style scoped>
    @font-face {font-family: "iconfont";
        src: url('../../public/font/iconfont.eot'); /* IE9*/
        src: url('../../public/font/iconfont.eot#iefix') format('embedded-opentype'), /* IE6-IE8 */
        url('../../public/font/iconfont.woff') format('woff'), /* chrome, firefox */
        url('../../public/font/iconfont.ttf') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+*/
        url('../../public/font/iconfont.svg#iconfont') format('svg'); /* iOS 4.1- */
    }

    .iconfont {
        font-family:"iconfont" !important;
        font-size:16px;
        font-style:normal;
        -webkit-font-smoothing: antialiased;
        -webkit-text-stroke-width: 0.2px;
        -moz-osx-font-smoothing: grayscale;
    }
    .input2{
        width:100%;
        height:1.52rem;
        /*opacity: 0.2;*/
        /*background: #fff;*/
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .input2 input{
        height:1.52rem;
        border:0;
        outline: none;
        font-size: 0.4rem;
        line-height:1.52rem;
        background: none;
        color: #fff;
        margin-left: 0.6rem;
    }
    .input2 .icon{
        font-size: 0.4rem;
        line-height: 1.52rem;
        margin-right: 0.52rem;
        color: #aeb8b7;
    }


</style>