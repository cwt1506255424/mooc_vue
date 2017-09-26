<template>
    <section id="img" class="swiper-container">
        <div class="swiper-wrapper">
            <div class="swiper-slide"><img src="../../public/imgs/lb.png" alt=""/></div>
            <div class="swiper-slide"><img src="../../public/imgs/lb2.png" alt=""/></div>
            <div class="swiper-slide"><img src="../../public/imgs/lb.png" alt=""/></div>
        </div>
    </section>
</template>

<script type="text/ecmascript-6">
    export default{
        mounted: function () {
            var mySwiper = new Swiper('.swiper-container', {
                // 轮播图的方向，也可以是vertical方向
                direction: 'horizontal',

                //播放速度
                loop: true,

                // 自动播放时间
                autoplay: 2000,

                // 播放的速度
                speed: 3000,


                // 这样，即使我们滑动之后， 定时器也不会被清除
                autoplayDisableOnInteraction: false,

            });
        }
    }
</script>

<style scoped>
    #img img {
        margin-top: 1.65rem;
        height: 3.6rem;
        width: 100%; }
</style>