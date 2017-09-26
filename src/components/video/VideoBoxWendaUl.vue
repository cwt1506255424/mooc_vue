<template>
    <ul>
        <VideoBoxWendaLi :key="index" :pro="n" v-for="(n,index) in VideoWendaUl"></VideoBoxWendaLi>

    </ul>
</template>
<script type='text/ecmascript-6'>
    import VideoBoxWendaLi from "./VideoBoxWendaLi.vue"
    export default {
        props:["VideoWendaUl"],
		components:{
            VideoBoxWendaLi
        }
    }
</script>

<style scoped>
     ul {
        padding: 0 0.6rem; }
</style>