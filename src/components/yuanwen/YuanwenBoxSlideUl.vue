<template>
    <ul class="pattern">
        <YuanwenBoxSlideLi :key="index" :pro="n" v-for="(n,index) in YuanwenLiLists"></YuanwenBoxSlideLi>
                  
    </ul>

</template>


<script type='text/ecmascript-6'>
    import YuanwenBoxSlideLi from "./YuanwenBoxSlideLi.vue";
    export default {
		props:["YuanwenLiLists"],
		components:{
            YuanwenBoxSlideLi
        }
    }
</script>

<style scoped>
    #box {
        margin-top: 3.09rem; }
    #box .rongqi .baozhuang .kuai ul {
        padding: 0 0.6rem;
        background-color: #ffffff; }
</style>