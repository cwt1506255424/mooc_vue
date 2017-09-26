<template>
    <div id="project" class="swiper-slide kuai">
        <h2>课程大纲</h2>
        <VideoBoxProjectUl :key="index" :VideoBoxProjectLi="n" v-for="(n,index) in VideoProject"></VideoBoxProjectUl>
       
    </div>
</template>


<script type='text/ecmascript-6'>
    import VideoBoxProjectUl from "./VideoBoxProjectUl.vue"
    export default {
        props:["VideoProject"],
		components:{
            VideoBoxProjectUl
        }
    }
</script>

<style scoped>

    #box .rongqi .baozhuang #project {
        padding: 0.72rem;
        margin-bottom: 1.43rem; }
    #box .rongqi .baozhuang #project h2 {
        font: 700 0.24rem/0.72rem "";
        color: #000; }
</style>