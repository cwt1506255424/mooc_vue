<template>
    <li>
        <a href="#">
            <img :src="OrderShopcartEasyBuyListli.img" alt="">
            <span>{{OrderShopcartEasyBuyListli.classify}}</span>
        </a>
    </li>
</template>

<script type="text/ecmascript-6">
    export default {
        props:["OrderShopcartEasyBuyListli"],
    }
</script>

<style scoped>
    #order_shopcart_easybuy {
        background-color: #ffffff;
        margin-top: 0.25rem; }
    #order_shopcart_easybuy ul li a {
        display: block;
        height: 1.5rem;
        box-sizing: border-box;
        padding: 0.5rem 0.66rem;
        background: url("../../public/imgs/triangle.png") no-repeat 95% 50%;
        background-size: 5% 45%; }
    #order_shopcart_easybuy ul li a img {
        float: left;
        height: 0.48rem;
        width: 0.48rem; }
    #order_shopcart_easybuy ul li a span {
        margin-left: 0.7rem;
        font: 700 0.34rem/0.48rem ""; }
</style>