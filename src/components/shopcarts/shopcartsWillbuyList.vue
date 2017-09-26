<template>
    <li>
        <i  class="nocheck"></i>
        <input type="checkbox" name="lession">
        <img :src="ShopCartsWillbuyLi.img" alt="">
        <div class="will_r">
            <p>{{ShopCartsWillbuyLi.pp}}</p>
            <b>￥</b><span>{{ShopCartsWillbuyLi.money}}</span>
        </div>
    </li>
</template>


<script type='text/ecmascript-6'>
    export default{
     props:["ShopCartsWillbuyLi"],
        components:{

        },
        mounted:function () {
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
            });
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
        },

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
