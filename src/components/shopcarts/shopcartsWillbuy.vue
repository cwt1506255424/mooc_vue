<template>
    <div>
        <section id="willbuy">
            <ul>
                <shop-carts-willbuy-li :key="index" :ShopCartsWillbuyLi="n" v-for="(n,index) in ShopCartsWillbuyUl"></shop-carts-willbuy-li>
            </ul>
        </section>
    </div>
</template>


<script type='text/ecmascript-6'>
 
    import ShopCartsWillbuyLi from "./ShopCartsWillbuyList.vue"
    export default{
        props:["ShopCartsWillbuyUl"],
        components:{
            ShopCartsWillbuyLi
        },
        mounted:function () {

        }
    }

</script>

<style scoped>
    #willbuy ul {
        margin: 1.65rem 0 1.44rem 0; }
    #willbuy ul li {
        height: 3rem;
        box-sizing: border-box;
        padding: 0.48rem;
        background-color: #ffffff;
        display: flex; }
    #willbuy ul li i {
        display: block;
        width: 0.6rem;
        height: 100%;
        background: url("../../public/imgs/inputradio.gif") no-repeat 0% 50%;
        background-size: 200% 20%; }
    #willbuy ul li .nocheck {
        background-position: 90% 50%; }
    #willbuy ul li input {
        display: none; }
    #willbuy ul li img {
        margin-left: 0.2rem;
        height: 100%;
        width: 3.6rem; }
    #willbuy ul li .will_r {
        padding: 0 0.45rem; }
    #willbuy ul li .will_r p {
        font: 700 0.3rem/0.6rem "";
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 1;
        overflow: hidden;
        margin-bottom: 1rem; }
    #willbuy ul li .will_r b {
        font: 700 0.3rem/0.6rem "";
        color: #cb3340; }
    #willbuy ul li .will_r span {
        font: 700 0.3rem/0.6rem "";
        color: #cb3340; }
</style>
