<template>
    <ul class="pattern">
        <IndexShizhantuijianLi :key="index" :pro="n" v-for="(n,index) in recommendUlLists"></IndexShizhantuijianLi>
    </ul>
</template>


<script type='text/ecmascript-6'>
    import IndexShizhantuijianLi from "./IndexShizhantuijianLi.vue";
    export default {
        props:["recommendUlLists"],
		components: {
            IndexShizhantuijianLi
        }
    }
</script>

<style scoped>
    #shizhantuijian ul {
        padding: 0.33rem 0.57rem 0;
        justify-content: space-between;background: #f1f5f6;
        display: flex;
        flex-wrap: wrap; }

</style>