<template>
    <ul class="swiper-wrapper">
        <IndexFamousteacherLi :key="index" :pro="n" v-for="(n,index) in FamousteacherUlLists"></IndexFamousteacherLi>
    </ul>
</template>


<script type='text/ecmascript-6'>
    import IndexFamousteacherLi from "./IndexFamousteacherLi.vue";
    export default {
        props:["FamousteacherUlLists"],
		components: {
            IndexFamousteacherLi
        }
    }
</script>

<style scoped>
    #famousteacher div ul {
        padding: 0 0.35rem;background: #f1f5f6; }
</style>