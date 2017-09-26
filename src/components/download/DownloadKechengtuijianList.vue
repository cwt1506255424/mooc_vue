<template>
    <li>
        <a href="#">
            <div class="four">
                <img :src="pro.img" alt="">
                <div class="fourdown">
                    <h5>{{ pro.name}}</h5>
                    <span>{{ pro.Price}}</span>
                </div>
            </div>
        </a>
    </li>
</template>
<script type="text/ecmascript-6">
    export default {
        props:["pro"],
    }
</script>
<style scoped>

    #kechengtuijian ul li {
        width: 4.62rem;
        background-color: #ffffff;
        margin-bottom: 0.33rem; }
    #kechengtuijian ul li a .four img {
        height: 1.68rem;
        width: 4.62rem; }
    #kechengtuijian ul li a .four .fourdown {
        overflow: hidden; }
    #kechengtuijian ul li a .four .fourdown h5 {
        box-sizing: border-box;
        padding: 0.18rem 0.65rem 0.18rem 0.32rem;
        font: 500 0.28rem/0.76rem ""; }
    #kechengtuijian ul li a .four .fourdown span {
        padding-bottom: 0.24rem;
        padding-left: 0.3rem;
        font: 500 0.22rem/0.32rem "";
        color: #707579; }
</style>