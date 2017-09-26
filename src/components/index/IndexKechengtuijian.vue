<template>
    <section id="kechengtuijian" class="pattern">
        <IndexTitle></IndexTitle>
        <IndexKechengtuijianUl :KechengtuijianUlLists="KechengtuijianLists"></IndexKechengtuijianUl>
     </section>
</template>


<script type='text/ecmascript-6'>
    import IndexTitle from "./IndexTitle.vue";
    import IndexKechengtuijianUl from "./IndexKechengtuijianUl.vue";

    export default {
        props:["KechengtuijianLists"],
        components: {
            IndexTitle,
            IndexKechengtuijianUl
        }
    }
</script>

<style scoped>
    #nav {
        background-color: #ffffff; }

</style>