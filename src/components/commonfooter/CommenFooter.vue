<template>
    <footer>
        <ul class="pattern">
            <router-link to="/index">
                <li>
                    <a class="act hrefA" >
                        <i class="iconfont">&#xe607;</i>
                        <span class="indexspan">首页</span>
                    </a>
                </li>
            </router-link>
            <router-link to="/course">
                <li>
                    <a class="hrefA">
                        <i class="iconfont">&#xe619;</i>
                        <span>课程</span>
                    </a>
                </li>
            </router-link>
            <router-link to="/download">
                <li>
                    <a  class="hrefA">
                        <i class="iconfont">&#xe732;</i>
                        <span>下载</span>
                    </a>
                </li>
            </router-link>
            <router-link to="/mine">
                <li>
                    <a class="hrefA">
                        <i class="iconfont">&#xe6b1;</i>
                        <span>我的</span>
                    </a>
                </li>
            </router-link>
        </ul>
    </footer>

</template>


<script type='text/ecmascript-6'>
    export default {
        mounted:function(){
            var footPath=this.$route.path;
            var test= $(".pattern .hrefA");
            for(var i in test){
                test.eq(i).removeClass('act');
            }
            if(footPath=="/index"||footPath=="/"){
                test.eq(0).addClass('act');
            }
            if(footPath=="/course"){
                test.eq(1).addClass('act');
            }
            if(footPath=="/download"){
                test.eq(2).addClass('act');
            }
            if(footPath=="/mine"){
                test.eq(3).addClass('act');
            }
        }
    }
</script>

<style scoped>
    @font-face {
        font-family: 'iconfont';
        src: url('../../public/font/iconfont.eot');
        src: url('../../public/font/iconfont.eot?#iefix') format('embedded-opentype'),
        url('../../public/font/iconfont.woff') format('woff'),
        url('../../public/font/iconfont.ttf') format('truetype'),
        url('../../public/font/iconfont.svg#iconfont') format('svg');
    }

    .iconfont{
        font-family:"iconfont" !important;
        font-size:16px;font-style:normal;
        -webkit-font-smoothing: antialiased;
        -webkit-text-stroke-width: 0.2px;
        -moz-osx-font-smoothing: grayscale;
    }
    footer ul {
        height: 1.5rem;
        background-color: #ffffff;
        padding: 0.2rem 1.02rem 0.15rem;
        box-sizing: border-box;
        display: flex;
        justify-content: space-between;
        position: fixed;
        width: 100%;
        bottom: 0;
        z-index: 100; }
    footer ul li{text-align:center;}
    footer ul li a i.iconfont{
        font:900 0.62rem/0.62rem "";color:#b6bbbe;
    }
    .act{color:#ff294d;}
  .act i.iconfont{color:#ff294d;}
  .act span{color:#ff294d;}
    footer ul li a span {
        display: block;
        text-align: center;
        font: 0.24rem/0.24rem "";
        margin-top: 0.28rem; }

</style>