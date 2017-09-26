<template>
    <li class="swiper-slide">
        <a href="#">
            <img :src="pro.img" alt="">
            <span>{{pro.username}}</span>
            <b>{{pro.job}}</b>
        </a>
    </li>
</template>


<script type='text/ecmascript-6'>
	export default{
		props:["pro"]
	}
</script>

<style scoped>

    #famousteacher div ul li {
        height: 3.3rem;
        width: 3.6rem;
        margin: 0 0.15rem; }
    #famousteacher div ul li a {
        border-radius: 0.2rem;
        display: block;
        height: 3.3rem;
        width: 3.6rem;
        padding: 0.35rem 1.05rem;
        box-sizing: border-box;
        text-align: center;
        background-color: #ffffff; }
    #famousteacher div ul li a img {
        display: block;
        height: 1.5rem;
        width: 1.5rem;
        border-radius: 50%; }
    #famousteacher div ul li a span {
        font: 800 0.3rem/0.3rem ""; }
    #famousteacher div ul li a b {
        color: #bbbcbe;
        font: 600 0.24rem/0.24rem ""; }
</style>