<template>
    <router-link to="/productlist">
        <li>
            <a href="#">
                <img :src="pro.userimg" alt="">
                <span>{{pro.userspan}}</span>
            </a>
        </li>
    </router-link>
</template>

<script type='text/ecmascript-6'>
    export default {
        props:["pro"]
    }

</script>

<style scoped>

    #qianduan ul li {
        width: 3.6rem;
        box-sizing: border-box; }
    #qianduan ul li a {
        display: block;
        width: 3.6rem;
        height: 2rem;
        text-align: center;
        margin: 0.3rem 0; }
    #qianduan ul li a img {
        height: 1.08rem;
        width: 1.08rem; }
    #qianduan ul li a span {
        margin-top: 0.3rem;
        text-align: center;
        display: block;
        font: 700 0.24rem/0.24rem "";
        color: #282f35; }

</style>












