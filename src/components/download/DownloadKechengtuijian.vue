<template>
    <section id="kechengtuijian" class="pattern">
        <div class="title">
            <i></i>
            <span>课程推荐</span>
            <b>换一换</b>
        </div>
        <ul>
            <download-kechengtuijian-list key="index" :pro="n" v-for="(n,index) in kechengtuijian"></download-kechengtuijian-list>
        </ul>
        <router-link to="/ShiZhanKeTang">
            <a class="moreclass" href="#">更多课程</a>
        </router-link>
    </section>
</template>
<script type="text/ecmascript-6">
    import DownloadKechengtuijianList from "./DownloadKechengtuijianList.vue";
    export default {
		props:["kechengtuijian"],
        components: {
            DownloadKechengtuijianList
        }
    }
</script>
<style scoped>
    #kechengtuijian {
        margin-bottom: 1.5rem; }
    #kechengtuijian .title {
        margin-top: 0.48rem;
        padding: 0.3rem  0.5rem 0 4.3rem;
        height: 0.96rem; }
    #kechengtuijian .title i {
        float: left;
        display: block;
        height: 0.36rem;
        width: 0.36rem;
        background: url("../../public/imgs/icon_recommend_course.png") no-repeat center;
        background-size: 100%; }
    #kechengtuijian .title span {
        float: left;
        margin-left: 0.24rem;
        font: 700  0.36rem/0.36rem "";
        color: #6c7175; }
    #kechengtuijian .title b {
        float: right;
        font: 600  0.30rem/0.36rem "";
        color: #b7bcbf; }
    #kechengtuijian ul {
        padding: 0.33rem 0.57rem 0;
        justify-content: space-between;
        display: flex;
        flex-wrap: wrap; }
    #kechengtuijian .moreclass {
        display: block;
        text-align: center;
        font: 700 0.26rem/1.4rem "";
        color: #b3b7ba; }
</style>