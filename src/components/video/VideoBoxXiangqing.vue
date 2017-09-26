<template>
    <div id="xiangqing" class="swiper-slide kuai">
        <div id="introduce">
            <span>{{videoDetailGrade.title}}</span>
            <p>{{videoDetailGrade.content}}</p>
        </div>
        <VideoBoxXiangqingNotice :videoDetailNotice="videoDetailNotice"></VideoBoxXiangqingNotice>
        <div id="teacher">
            <a href="#">
                <img :src="videoTeacher.img" alt="">
                <div class="teach_r">
                    <h4>{{videoTeacher.title}}</h4>
                    <span>{{videoTeacher.occupation}}</span>
                </div>
            </a>
        </div>
        <VideoBoxXiangqingGrade :VideoGrade="VideoGrade"></VideoBoxXiangqingGrade>

    </div>
</template>


<script type='text/ecmascript-6'>
    import VideoBoxXiangqingNotice from "./VideoBoxXiangqingNotice.vue"
    import VideoBoxXiangqingGrade from "./VideoBoxXiangqingGrade.vue"
    export default {
        props:["videoDetailGrade","videoDetailNotice","videoTeacher","VideoGrade"],
		components:{
            VideoBoxXiangqingNotice,
            VideoBoxXiangqingGrade
        }
    }
</script>

<style scoped>
    #box .rongqi .baozhuang #xiangqing #introduce {
        padding: 0.48rem 0.72rem;
        border-bottom: 1px solid #cbcbcb; }
    #box .rongqi .baozhuang #xiangqing #introduce span {
        display: block;
        height: 0.48rem;
        width: 0.96rem;
        background-color: #ff9f1c;
        font: 700 0.24rem/0.48rem "";
        color: #ffffff;
        text-align: center;
        border-radius: 12%; }
    #box .rongqi .baozhuang #xiangqing #introduce p {
        font: 700 0.34rem/0.5rem "";
        color: #b6bcbc; }
    #box .rongqi .baozhuang #xiangqing #teacher {
        border-bottom: 1px solid #cbcbcb; }
    #box .rongqi .baozhuang #xiangqing #teacher a {
        display: block;
        height: 1.2rem;
        padding: 0.72rem;
        background: url("../../public/imgs/triangle.png") no-repeat 95% 50%;
        background-size: 5% 25%; }
    #box .rongqi .baozhuang #xiangqing #teacher a img {
        width: 1.2rem;
        height: 1.2rem;
        float: left;
        border-radius: 50%; }
    #box .rongqi .baozhuang #xiangqing #teacher a .teach_r {
        float: left;
        font: 700 0.28rem/0.6rem "";
        margin-left: 0.24rem; }
    #box .rongqi .baozhuang #xiangqing #teacher a .teach_r h4 {
        color: #000000; }
    #box .rongqi .baozhuang #xiangqing #teacher a .teach_r span {
        color: #6d747c; }
</style>