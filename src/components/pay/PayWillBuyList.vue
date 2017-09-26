<template>
   <li class="pattern">
               <img :src="pro.img" alt="">
               <div class="will_r">
                   <p>{{ pro.ming }}</p>
                   <b>￥</b><span>{{ pro.pri }}</span>
               </div>
   </li>
</template>

<script type="text/ecmascript-6">
    export default{
        props:["pro"]
    }
</script>

<style scoped>
    #willbuy ul li {
        height: 3rem;
        box-sizing: border-box;
        padding: 0.48rem;
        background-color: #ffffff;
        display: flex; }
        #willbuy ul li img {
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