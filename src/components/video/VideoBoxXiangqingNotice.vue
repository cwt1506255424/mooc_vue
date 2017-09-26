<template>
    <div id="notice">
        <VideoBoxXiangqingNoticeUl :videoDetailNoticeUl="videoDetailNotice"></VideoBoxXiangqingNoticeUl>
    </div>
</template>


<script type='text/ecmascript-6'>
    import VideoBoxXiangqingNoticeUl from "./VideoBoxXiangqingNoticeUl.vue"
    export default {
        props:["videoDetailNotice"],
		components:{
            VideoBoxXiangqingNoticeUl
        }
    }
</script>

<style scoped>
    #box .rongqi .baozhuang #xiangqing #notice {
        padding: 0.72rem;
        border-bottom: 1px solid #cbcbcb; }
</style>