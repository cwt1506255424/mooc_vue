<template>
    <section id="willbuy">
        <h3 class="pattern">商品信息</h3>
        <ul>
            <PayWillBuyList :key="index" :pro="n" v-for="(n,index) in Head"></PayWillBuyList>
        </ul>
    </section>
</template>

<script type="text/ecmascript-6">
    import PayWillBuyList from "./PayWillBuyList.vue"

    export default{
        props:["Head"],
        components:{
            PayWillBuyList
        }
    }
</script>

<style scoped>
    #willbuy {
      margin: 1.65rem 0  0.5rem  0; }
      #willbuy h3 {
        font: 0.32rem/1.2rem "";
        color: #6b7074;
        padding: 0 0.48rem;
        background-color: #ffffff;
        border-bottom: 1px solid #ededed; }
</style>