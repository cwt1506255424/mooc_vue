<template>
    <section id="zhiyelujing" class="pattern">
        <IndexTitle></IndexTitle>
        <IndexZhiyelujingUl :occupationUlLists="occupationLists"></IndexZhiyelujingUl>
         </section>
</template>


<script type='text/ecmascript-6'>
    import IndexTitle from "./IndexTitle.vue";
    import IndexZhiyelujingUl from "./IndexZhiyelujingUl.vue";

    export default {
        props:["occupationLists"],
		components: {
            IndexTitle,
            IndexZhiyelujingUl
        }
    }
</script>

<style scoped>
    #zhiyelujing {
        background-color: #ffffff;
        overflow: hidden; }
</style>