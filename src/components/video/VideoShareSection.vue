<template>
    <section class="section_one">
        <a href="#"><img src="../../public/imgs/share1.png"/><span>记笔记</span></a>
        <a href="#"><img src="../../public/imgs/share2.png"/><span>提问</span></a>
        <a href="#"><img src="../../public/imgs/share3.png"/><span>评论</span></a>
        <a href="./src/public/video/happy.mp4" download=".mp4">
            <img src="../../public/imgs/share4.png"/><span>下载</span>
        </a>
        <a href="#"><img src="../../public/imgs/share5.png"/><span>分享</span></a>
        <a href="#"><img src="../../public/imgs/share6.png"/><span>定制课表</span></a>
    </section>
</template>


<script type='text/ecmascript-6'>
    export default{
        components:{
        }
    }
</script>

<style scoped>
    #share .section_one {
        width: 100%;
        display: flex;
        flex-flow: row wrap;
        padding-top: 2.1rem; }
    #share .section_one a {
        display: block;
        width: 33%;
        text-align: center;
        box-sizing: border-box; }
    #share .section_one a img {
        width: 1.92rem;
        height: 1.92rem;
        margin: 0 auto;
        margin-bottom: 0.8rem;
        display: block; }
    #share .section_one a span {
        color: #fff;
        font: 0.45rem/0.45rem "";
        display: inline-block;
        margin-bottom: 1.16rem; }
</style>