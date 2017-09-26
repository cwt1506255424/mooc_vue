<template>
    <ul>
        <VideoBoxXiangqingGradeLi :VideoGradeLi="VideoGradeUl"></VideoBoxXiangqingGradeLi>
        <VideoBoxXiangqingGradeLi :VideoGradeLi="VideoGradeUl"></VideoBoxXiangqingGradeLi>
        <VideoBoxXiangqingGradeLi :VideoGradeLi="VideoGradeUl"></VideoBoxXiangqingGradeLi>
        <VideoBoxXiangqingGradeLi :VideoGradeLi="VideoGradeUl"></VideoBoxXiangqingGradeLi>
    </ul>
</template>


<script type='text/ecmascript-6'>
    import VideoBoxXiangqingGradeLi from "./VideoBoxXiangqingGradeLi.vue"
    export default {
        props:["VideoGradeUl"],
		components:{
            VideoBoxXiangqingGradeLi
        }
    }
</script>

<style scoped>

    #box .rongqi .baozhuang #xiangqing #grade .grade_b ul {
        float: left;
        display: flex;
        justify-content: flex-start; }

</style>