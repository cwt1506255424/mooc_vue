<template>
    <ul>
        <IndexZhiyelujingLi :key="index" :pro="n" v-for="(n,index) in occupationUlLists"></IndexZhiyelujingLi>
    </ul>
</template>


<script type='text/ecmascript-6'>
    import IndexZhiyelujingLi from "./IndexZhiyelujingLi.vue";
    export default {
        props:["occupationUlLists"],
		components: {
            IndexZhiyelujingLi
        }
    }
</script>

<style scoped>

</style>