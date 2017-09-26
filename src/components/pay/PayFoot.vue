<template>
    <section id="foot" class="pattern">
        <b class="heji">实付</b>
        <b class="num">￥0.00</b>
        <a href="">提交订单</a>
    </section>
</template>

<script type="text/ecmascript-6">
    export default{
        mounted:function () {
                    $("#foot a").click(
                            function () {
                                if($("#rules input").attr("checked")=="checked" ){
                                    alert("即将支付");
                                }else {
                                    alert("请确定用户协议");
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
      bottom: 0;
      width: 100%;
      text-align: center; }
      #foot b {
        float: left;
        font: 800 0.48rem/1.44rem "";
        display: block; }
      #foot .heji {
        margin-left: 3rem;
        color: #6c7175; }
      #foot .num {
        color: #cb3340; }
      #foot a {
        float: right;
        background-color: #ff2d50;
        display: block;
        font: 800 0.48rem/1.44rem "";
        width: 4.4rem;
        color: #ffffff; }
</style>