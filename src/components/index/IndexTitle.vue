<template>
    <div class="title pattern">
        <i></i>
        <span>课程推荐</span>
        <b class="changeKecheng">换一换</b>
    </div>
</template>


<script type='text/ecmascript-6'>
    import IndexBannerUl from "./IndexBannerUl.vue";
    export default {
        components: {
            IndexBannerUl
        }
    }
</script>

<style scoped>
    .title {
       padding: 0.78rem  0.5rem 0 4.3rem;
        height: 0.96rem;background: #f1f5f6 }
    .title i {
        float: left;
        display: block;
        height: 0.36rem;
        width: 0.36rem;
        background: url("../../public/imgs/icon_recommend_course.png") no-repeat center;
        background-size: 100%; }
    .title span {
        float: left;
        margin-left: 0.24rem;
        font: 700  0.36rem/0.36rem "";
        color: #6c7175; }
    .title b {
        float: right;
        font: 600  0.30rem/0.36rem "";
        color: #b7bcbf; }
</style>