<template>
    <ul class="">
        <VideoBoxProjectLi :key="index" :pro="n" v-for="(n,index) in VideoBoxProjectLi"></VideoBoxProjectLi>
    </ul>
</template>


<script type='text/ecmascript-6'>
    import VideoBoxProjectLi from "./VideoBoxProjectLi.vue"
    export default {
		props:["VideoBoxProjectLi"],
		components:{
            VideoBoxProjectLi
        }
    }
</script>

<style scoped>

</style>