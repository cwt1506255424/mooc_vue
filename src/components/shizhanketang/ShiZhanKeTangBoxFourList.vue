<template>
    <li>
        <a href="#">
            <img :src="pro.img" alt="">
            <div class="zhiyeright">
                <h6>{{ pro.kecheng }}</h6>
                <p></p>
                <div>
                    <span>￥{{ pro.pri }}</span>&nbsp;&nbsp;&nbsp;&nbsp;
                    <b>{{ pro.renshu }}人学习</b>
                </div>
            </div>
        </a>
    </li>
</template>

<script type="text/ecmascript-6">
    export default{
        props:["pro"]
    }
</script>

<style scoped>
    #box .sec ul li a {
        display: block;
        box-sizing: border-box;
        padding: 0 0.48rem;
        height: 2.8rem;
        margin-bottom: 0.5rem; }
    #box .sec ul li a img {
        float: left;
        display: block;
        height: 2.4rem;
        width: 2.7rem; }
    #box .sec ul li a .zhiyeright {
        height: 2.6rem;
        width: 6.76rem;
        padding-right: 0.25rem;
        float: right;
        position: relative; }
    #box .sec ul li a .zhiyeright h6 {
        font: 600 0.34rem/0.34rem "";
        margin-top: 0.23rem; }
    #box .sec ul li a .zhiyeright p {
        margin-top: 0.2rem;
        font: 500 0.2rem/0.5rem "";
        color: #b8bcbd; }
    #box .sec ul li a .zhiyeright div {
        font: 600 0.22rem/0.23rem "";
        position: absolute;
        bottom: 0.25rem; }
    #box .sec ul li a .zhiyeright div span {

        color: #ff2b53;}
    #box .sec ul li a .zhiyeright div b {
        color: #74797c;
        font-weight: 800; }
</style>