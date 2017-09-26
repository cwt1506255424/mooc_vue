<template>
    <ul>
        <VideoBoxXiangqingNoticeLi :key="index" :pro="n" v-for="(n,index) in videoDetailNoticeUl"></VideoBoxXiangqingNoticeLi>
    </ul>
</template>


<script type='text/ecmascript-6'>
    import VideoBoxXiangqingNoticeLi from "./VideoBoxXiangqingNoticeLi.vue"
    export default {
        props:["videoDetailNoticeUl"],
		components:{
            VideoBoxXiangqingNoticeLi
        }
    }
</script>

<style scoped>

</style>