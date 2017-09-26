<template>
<div>
    <shopcarts-head></shopcarts-head>
    <shopcarts-willbuy :ShopCartsWillbuyUl="ShopCartsWillbuy"></shopcarts-willbuy>
    <shopcarts-foot></shopcarts-foot>
</div>
</template>

<script type="text/ecmascript-6">
    import ShopcartsService from "../../services/ShopcartsService.js";
    import shopcartsHead from "./shopcartsHead.vue"
    import  shopcartsWillbuy from "./shopcartsWillbuy.vue"
    import shopcartsFoot from "./shopcartsFoot.vue"

    export default {
        data(){
            return{
                ShopCartsWillbuy:[]
            }

        },
        components:{
            shopcartsHead,
            shopcartsWillbuy,
            shopcartsFoot
        },
        created:function(){
            this.initialData();
        },

        methods:{
            initialData:function(){
                ShopcartsService.getShopcartsWiilbuy((data)=>{
                    this.ShopCartsWillbuy = data.ShopCartsWillbuy;

                });
            }
        },
        mounted:function(){
                $(function() {
                    $("#willbuy ul li i").toggle(
                        function () {
                            $(this).removeClass("nocheck");
                            $(this).siblings("input").attr("checked","checked");
                            MonrysSum()
                        },
                        function () {
                            $(this).addClass("nocheck");
                            $(this).siblings("input").removeAttr("checked");
                            MonrysSum()
                        }
                    );
                })
                $(".choooseall i").toggle(
                    function(){
                        $(this).removeClass("nochecked");
                        $(".choooseall input").attr("checked","checked");
                        $("#willbuy ul li input[name=lession]").each(
                            function () {
                                $(this).attr("checked","checked").siblings("i").removeClass("nocheck");
                            }
                        )
                        MonrysSum()
                    },
                    function(){
                        $(this).addClass("nochecked");
                        $(".choooseall input").removeAttr("checked");
                        $("#willbuy ul li input[name=lession]").each(
                            function () {
                                $(this).removeAttr("checked").siblings("i").addClass("nocheck");
                            }
                        )
                        MonrysSum()
                    }
                )
                //计算总金额
                function MonrysSum() {
                    var sum = 0;
                    $("#willbuy ul li input[name=lession]").each(function () {
                        if($(this).attr("checked")=="checked"){
                            for( var i=0; i<$(this).length; i++){
                                console.log($(this).siblings(".will_r").children("span").text())
                                var aaa=parseFloat($(this).siblings(".will_r").children("span").text());
                                console.log( aaa)
                                sum +=aaa;
                            }
                        }
                    })
                    $(".num").text(sum);
                }
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