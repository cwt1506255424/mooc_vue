<template>
    <div id="grade">
        <a href="#">
            <div class="grade_t">
                <span>综合评分</span>
                <b>{{VideoGrade.source}}</b>
                <i>查看全部{{VideoGrade.people}}人评价</i>
            </div>
            <div class="grade_b">
                <img class="cusimg" :src="VideoGrade.userimg" alt="">
                <span>{{VideoGrade.user}}</span>
                 <VideoBoxXiangqingGradeUl :VideoGradeUl="VideoGrade"></VideoBoxXiangqingGradeUl>
            </div>
        </a>
    </div>
</template>

<script type='text/ecmascript-6'>
    import VideoBoxXiangqingGradeUl from "./VideoBoxXiangqingGradeUl.vue"
    export default {
        props:["VideoGrade"],
		components:{
            VideoBoxXiangqingGradeUl
        }
    }
</script>

<style scoped>
    #box .rongqi .baozhuang #xiangqing #grade {
        border-bottom: 1px solid #cbcbcb;
        padding: 0.72rem; }
    #box .rongqi .baozhuang #xiangqing #grade .grade_t span {
        font: 0.32rem/0.42rem "";
        color: #000;
        margin-top: 0.1rem; }
    #box .rongqi .baozhuang #xiangqing #grade .grade_t b {
        font: 0.42rem/0.42rem "";
        color: #000; }
    #box .rongqi .baozhuang #xiangqing #grade .grade_t i {
        margin-left: 4rem;
        font: 0.3rem/0.42rem "";
        margin-top: 0.12rem;
        color: #0eb0f8; }
    #box .rongqi .baozhuang #xiangqing #grade .grade_b {
        margin-top: 0.54rem; }
    #box .rongqi .baozhuang #xiangqing #grade .grade_b .cusimg {
        height: 0.54rem;
        width: 0.54rem;
        float: left;
        border-radius: 50%; }
    #box .rongqi .baozhuang #xiangqing #grade .grade_b span {
        margin: 0.14rem 0.3rem 0;
        margin-top: 0.14rem;
        float: left;
        display: block;
        font: 0.28rem/0.28rem ""; }
    #box .rongqi .baozhuang #xiangqing #grade .grade_b ul {
        float: left;
        display: flex;
        justify-content: flex-start; }
    #box .rongqi .baozhuang #xiangqing #grade .grade_b ul li img {
        height: 0.36rem;
        width: 0.48rem; }
</style>