<template>
    <ul>
        <VideoBoxPinglunLi :key="index" :pro="n" v-for="(n,index) in VideoPinglunUl"></VideoBoxPinglunLi>
        
    </ul>
</template>


<script type='text/ecmascript-6'>
    import VideoBoxPinglunLi from "./VideoBoxPinglunLi.vue"
    export default {
        props:["VideoPinglunUl"],
		components:{
            VideoBoxPinglunLi
        }
    }
</script>

<style scoped>

</style>