<template>
    <section id="memory" class="pattern">
        <div class="memory_left">
            剩余36.0GB
        </div>
        <div class="memory_centre pattern">
            <div class="wall"></div>
        </div>
        <div class="memory_right" @click="hideImg">
            <img src="../../public/imgs/xiala.png"/>
        </div>
    </section>
</template>
<script type="text/ecmascript-6">
    export default {
      methods:{
          hideImg:function(){
              var memory_hide = $("#memory_hide").eq(0);
              if(memory_hide.css("display")=="none"){
                  memory_hide.css("display","block");
              }else{
                  memory_hide.css("display","none");
              }
          }
      }
    }
</script>
<style scoped>
    #memory {
        margin-top: 1.65rem;
        position: relative;
        font-size: 0.32rem;
        box-shadow: 0 0 0.05rem #000;
        display: flex;
        justify-content: space-between;
        padding: 0.56rem 0.52rem;
        align-items: center;
        color: #666; }
    #memory .memory_centre {
        height: 0.12rem;
        background: #d7dcdf;
        border-radius: 0.4rem;
        width: 6.28rem;
        align-items: center; }
    #memory .memory_centre .wall {
        width: 2.02rem;
        height: 100%;
        background: #10b3f4;
        border-radius: 0.4rem; }
    #memory .memory_right img {
        width: 0.6rem;
        height: 0.16rem; }
</style>