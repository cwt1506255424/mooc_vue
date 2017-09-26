<template>
    <section id="rules" class="pattern">
        <i id="nocheck" class="nocheck"></i>
        <input type="radio">
        <span>我已阅读并同意</span>
        <a href="#">《用户付费协议》</a>
    </section>
</template>

<script type="text/ecmascript-6">
    export default{
        mounted:function(){
            $("#rules i").toggle(
                    function () {
                        $("#rules i").removeClass("nocheck");
                        $("#rules input").attr("checked","checked");

                    },
                    function () {
                        $("#rules i").addClass("nocheck");
                        $("#rules input").removeAttr("checked");
                    }
                );
        }
    }
</script>

<style scoped>
    #rules {
      background-color: #ffffff;
      margin-bottom: 0.5rem;
      padding: 0 0.52rem;
      height: 1.5rem;
      display: flex;
      font: 700 0.36rem/1.5rem ""; }
      #rules i {
        display: block;
        margin: 0.5rem 0 0 0.5rem;
        height: 0.5rem;
        width: 0.5rem;
        background: url("../../public/imgs/inputradio.gif") no-repeat 5% 0%;
        background-size: 240% 100%; }
      #rules .nocheck {
        background-position: -0.66rem  0rem; }
      #rules input {
        display: none; }
      #rules span {
        color: #6b7074; }
      #rules a {
        color: #029fe6;
        margin-left: 0.3rem; }
</style>