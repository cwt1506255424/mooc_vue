<template>
    <router-link to="/video">
    <li>
        <a href="#">
            <img :src="pro.img" alt="">
            <div class="zhiyeright">
                <h6>{{pro.course}}</h6>
                <p>{{pro.description}}</p>
                <div>
                    <span>{{pro.num}}</span>
                    <b>￥{{pro.price}}</b>
                </div>
            </div>
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
    #zhiyelujing ul li a {
        display: block;
        box-sizing: border-box;
        padding: 0 0.48rem;
        height: 2.4rem;
        margin-bottom: 0.5rem; }
    #zhiyelujing ul li a img {
        float: left;
        display: block;
        height: 2.4rem;
        width: 2.7rem; }
    #zhiyelujing ul li a .zhiyeright {
        height: 2.4rem;
        width: 6.76rem;
        padding-right: 0.25rem;
        float: right;
        position: relative; }
    #zhiyelujing ul li a .zhiyeright h6 {
        font: 600 0.34rem/0.34rem "";
        margin-top: 0.23rem; }
    #zhiyelujing ul li a .zhiyeright p {
        margin-top: 0.2rem;
        font: 600 0.22rem/0.32rem "";
        color: #b8bcbd; }
    #zhiyelujing ul li a .zhiyeright div {
        font: 600 0.22rem/0.24rem "";
        position: absolute;
        bottom: 0.25rem; }
    #zhiyelujing ul li a .zhiyeright div span {
        color: #74797c; }
    #zhiyelujing ul li a .zhiyeright div b {
        color: #ff2b53;
        font-weight: 800; }
</style>