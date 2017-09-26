<template>
    <section id="nav" class="pattern">
        <IndexNavUl ></IndexNavUl>
    </section>
</template>


<script type='text/ecmascript-6'>
    import IndexNavUl from "./IndexNavUl.vue";
    export default {
        components: {
           IndexNavUl
        }
    }
</script>

<style scoped>
    #nav {
        background-color: #ffffff; }

</style>