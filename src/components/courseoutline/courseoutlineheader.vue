<template>
    <div>
        <header  id="head">
            <a href="course.html"  @click="routerBack">
                <img src="../../public/imgs/image_selector_btn_back.png" alt="">
            </a>
            <span class="news">最新</span>
            <span class="hot">最热</span>
        </header>
    </div>
</template>

<script type='text/ecmascript-6'>
    export default{
        methods:{
            routerBack(){
                this.$router.go(-1);
            }
        }
    }
</script>

<style scoped>
    #head {
        color: #ffffff;
        height: 1.68rem;
        box-sizing: border-box;
        padding: 0.6rem  0.4rem;
        position: fixed;
        top: 0;
        width: 100%;
        z-index: 100; }
    #head a {
        display: block;
        float: left; }
    #head a img {
        height: 0.48rem;
        width: 0.48rem; }
    #head span {
        color: #ffffff;
        float: left;
        background: url("../../public/imgs/jiaohu.png") no-repeat left;
        background-size: 25% 100%;
        font: 700 0.48rem/0.48rem "";
        padding-left: 0.5rem; }
    #head .news {
        margin-left: 6.2rem; }
    #head .hot {
        margin-left: 0.3rem;
        background: none; }
</style>