<template>
    <section id="payway">
        <h3 class="pattern">支付方式</h3>
        <ul>
            <li class="payways pattern">
                <img src="../../public/imgs/pay_wxpay.png" alt="">
                <input type="radio" name="pay" checked="checked"/>
                <i></i>
            </li>

            <li class="payways pattern">
                <img src="../../public/imgs/pay_alipay.png" alt="">
                <input type="radio" name="pay"/>
                <i class="nocheck"></i>
            </li>
        </ul>
    </section>
</template>

<script type="text/ecmascript-6">
    export default{
            mounted:function(){
               $(".payways>i").on("click",function(){
                      $(this).removeClass("nocheck").parent(".payways").siblings().children('i').addClass("nocheck");
                      $(this).siblings("input").attr("checked","checked").parent(".payways").siblings().children("input").removeAttr("checked");
                  });
            }

        }

</script>

<style scoped>
    #payway {
      margin: 0 0 0.5rem 0; }
      #payway h3 {
        font: 0.32rem/1.2rem "";
        color: #6b7074;
        padding: 0 0.48rem;
        background-color: #ffffff;
        border-bottom: 1px solid #ededed; }
      #payway ul li {
        height: 2rem;
        box-sizing: border-box;
        padding: 0.48rem;
        background-color: #ffffff; }
        #payway ul li img {
          float: left;
          width: 3.5rem; }
        #payway ul li input {
          float: left;
          display: none; }
        #payway ul li i {
          float: right;
          display: block;
          margin-top: 0.26rem;
          height: 0.47rem;
          width: 0.52rem;
          background: url("../../public/imgs/inputradio.gif") no-repeat 5% 0%;
          background-size: 240% 100%; }
        #payway ul li .nocheck {
          background-position: -0.66rem  0rem; }
</style>