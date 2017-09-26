<template>
    <section id="banner">
        <div class="swiper-container banner">
            <IndexBannerUl :BannerLists="BannerLists"></IndexBannerUl>
            <div class="swiper-pagination"></div>
        </div>
    </section>
</template>


<script type='text/ecmascript-6'>
    import IndexBannerUl from "./IndexBannerUl.vue";
    export default {
        props:["BannerLists"],
        components: {
            IndexBannerUl
        },
        mounted:function () {
            var mySwiper = new Swiper ('.banner', {
                loop : true,
                autoplay: 3000,
                pagination:".swiper-pagination",
                autoplayDisableOnInteraction: false,
                observer:true,
                observeParents:true,
            })
        }
    }
</script>

<style scoped>
    #banner {
        height: 3.6rem;
        margin-top: 1.65rem;
        width: 100%; }
</style>