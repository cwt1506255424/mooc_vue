<template>
    <li class="swiper-slide">
        <a href="#">
            <img :src="pro.img" alt="">
        </a>
    </li>
</template>


<script type='text/ecmascript-6'>
    export default{
        props:["pro"]
    }
</script>

<style scoped>

    #banner ul li a img {
        width: 100%;
        height: 3.6rem;
        display: block; }
</style>