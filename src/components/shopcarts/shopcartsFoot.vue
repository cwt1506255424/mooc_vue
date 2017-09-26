<template>
    <section id="foot">
        <div class="choooseall">
            <i id="test" class="nochecked"></i>
            <input type="checkbox">
            <span>全选</span>
        </div>
        <b class="heji">合计：￥</b>
        <b class="num">0.00</b>
        <router-link to="/Pay"><a class="willPay">去结算</a></router-link>
    </section>
</template>

<script type="text/ecmascript-6">
    export default {
        mounted:function () {
            $("#foot a.willPay").click(
                    function () {
                        if($(".choooseall input").attr("checked")=="checked" ){
                            alert("即将支付");
                        }else {
                            alert("请选择所要购买课程");
                        }
                    }
            );
        }
    }
</script>

<style scoped>
    #foot {
        height: 1.44rem;
        border-top: 1px solid #cbcbcb;
        background-color: #ffffff;
        position: fixed;
        bottom: 0;
        width: 100%;
        text-align: center; }
    #foot .choooseall {
        float: left;
        color: #b5babd;
        font: 800 0.34rem/1.44rem ""; }
    #foot .choooseall i {
        float: left;
        margin: 0.46rem 0 0 0.46rem;
        width: 0.5rem;
        height: 0.5rem;
        display: block;
        background: url("../../public/imgs/inputradio.gif") no-repeat 0% 50%;
        background-size: 200% 75%; }
    #foot .choooseall .nochecked {
        background-position: 90% 50%; }
    #foot .choooseall input {
        float: left;
        display: none; }
    #foot .choooseall span {
        float: left; }
    #foot b {
        float: left;
        font: 800 0.48rem/1.44rem "";
        display: block;
        color: #000000; }
    #foot .heji {
        margin-left: 1.3rem; }
    #foot a {
        float: right;
        background-color: #ff2d50;
        display: block;
        font: 800 0.48rem/1.44rem "";
        width: 3.6rem;
        color: #ffffff; }
</style>