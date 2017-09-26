<template>
    <ul class="pattern">
        <IndexKechengtuijianLi :key="index" :pro="n" v-for="(n,index) in KechengtuijianUlLists"></IndexKechengtuijianLi>
    </ul>
</template>


<script type='text/ecmascript-6'>
    import IndexKechengtuijianLi from "./IndexKechengtuijianLi.vue";
    export default {
        props:["KechengtuijianUlLists"],
        components: {
            IndexKechengtuijianLi
        }
    }
</script>

<style scoped>
    #kechengtuijian ul {
        padding: 0.33rem 0.57rem 0;
        justify-content: space-between;background: #f1f5f6;
        display: flex;
        flex-wrap: wrap; }

</style>