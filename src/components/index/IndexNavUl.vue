<template>
    <ul class="swiper-wrapper">
        <IndexNavLiOne></IndexNavLiOne>
        <IndexNavLiTwo></IndexNavLiTwo>
        <IndexNavLiThree></IndexNavLiThree>
        <IndexNavLiFour></IndexNavLiFour>
        <IndexNavLiFive></IndexNavLiFive>
    </ul>
</template>


<script type='text/ecmascript-6'>
    import IndexNavLiOne from "./IndexNavLiOne.vue";
    import IndexNavLiTwo from "./IndexNavLiTwo.vue";
    import IndexNavLiThree from "./IndexNavLiThree.vue";
    import IndexNavLiFour from "./IndexNavLiFour.vue";
    import IndexNavLiFive from "./IndexNavLiFive.vue";
    export default {
        components: {
            IndexNavLiOne,
            IndexNavLiTwo,
            IndexNavLiThree,
            IndexNavLiFour,
            IndexNavLiFive
        }
    }
</script>

<style scoped>
    #nav ul {
        padding: 0.36rem 0.57rem 0.16rem;
        box-sizing: border-box;
        height: 2.4rem;
        display: flex;
        justify-content: space-between; }
</style>