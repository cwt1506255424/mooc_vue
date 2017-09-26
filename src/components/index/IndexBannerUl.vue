<template>
    <ul class="swiper-wrapper">
        <IndexBannerLi :key="index" :pro="n" v-for="(n,index) in BannerLists"></IndexBannerLi>
    </ul>
</template>


<script type='text/ecmascript-6'>
    import IndexBannerLi from "./IndexBannerLi.vue";
    export default {
        props:["BannerLists"],
        components: {
            IndexBannerLi
        }
    }
</script>

<style scoped>

</style>