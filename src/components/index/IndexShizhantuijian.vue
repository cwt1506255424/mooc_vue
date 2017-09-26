<template>
    <section id="shizhantuijian" class="pattern">
        <IndexTitle></IndexTitle>
        <IndexShizhantuijianUl :recommendUlLists="recommendLists"></IndexShizhantuijianUl>

    </section>
</template>


<script type='text/ecmascript-6'>
    import IndexTitle from "./IndexTitle.vue";
    import IndexShizhantuijianUl from "./IndexShizhantuijianUl.vue";

    export default {
        props:["recommendLists"],
		components: {
            IndexTitle,
            IndexShizhantuijianUl
        }
    }
</script>

<style scoped>

</style>