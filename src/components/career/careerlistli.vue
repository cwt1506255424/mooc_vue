<template>
<div>
    <li>
        <a href="#">
            <img :src="pro.userimg" alt="">
            <div class="fourdown">
                <h5>{{pro.userh5}}</h5>
                <span>{{pro.userspan}}</span>
                <p>{{pro.userp}}</p>
                <i>{{pro.useri}}</i>
            </div>
        </a>
    </li>
</div>
</template>

<script type='text/ecmascript-6'>
    export default {
        props:["pro"]
    }
</script>

<style scoped>
    #list ul li {
        margin-bottom: 0.35rem;
        background-color: #ffffff;
        box-shadow: 0 0 0.03rem #a1a1a1; }
    #list ul li a {
        display: block; }
    #list ul li a img {
        height: 2.25rem;
        width: 100%; }
    #list ul li a .fourdown {
        overflow: hidden;
        position: relative;
        padding: 0 0.32rem; }
    #list ul li a .fourdown h5 {
        box-sizing: border-box;
        padding: 0.18rem 0.65rem 0.18rem 0;
        font: 700 0.36rem/0.38rem "";
        color: #273035; }
    #list ul li a .fourdown span {
        margin-top: 0.15rem;
        margin-bottom: 0.25rem;
        display: block;
        font: 700 0.28rem/0.36rem "";
        color: #b3b7ba; }
    #list ul li a .fourdown p {
        margin-top: 0.15rem;
        font: 0.28rem/0.36rem "";
        color: #b6babb; }
    #list ul li a .fourdown i {
        margin: 0.3rem 0;
        display: block;
        font: 0.2rem/0.24rem "";
        color: #fe2e4e; }
</style>
