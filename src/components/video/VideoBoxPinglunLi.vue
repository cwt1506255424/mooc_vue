<template>
    <li>
        <img :src="pro.img" alt="">
        <div class="mid">
            <b>{{pro.username}}</b>
            <i>{{pro.time}}</i>
            <span>{{pro.title}}</span>
        </div>
        <div class="zan">
            <span>{{pro.praise}}</span>
        </div>
    </li>
</template>


<script type='text/ecmascript-6'>
	export default{
		props:["pro"]
	}
</script>

<style scoped>
    #box .rongqi .baozhuang #pinglun ul li {
        height: 1.6rem;
        padding: 0.4rem 0.7rem;
        border-bottom: 1px solid #ededed; }
    #box .rongqi .baozhuang #pinglun ul li img {
        float: left;
        height: 1.08rem;
        width: 1.08rem;
        border-radius: 50%;
        display: block; }
    #box .rongqi .baozhuang #pinglun ul li .mid {
        display: block;
        float: left;
        margin-left: 0.5rem; }
    #box .rongqi .baozhuang #pinglun ul li .mid b {
        font: 800 0.34rem/0.5rem "";
        color: #6a7378;
        display: block; }
    #box .rongqi .baozhuang #pinglun ul li .mid i {
        font: 800 0.22rem/0.3rem "";
        color: #71767a;
        display: block;
        margin: 0.3rem 0; }
    #box .rongqi .baozhuang #pinglun ul li .mid span {
        font: 800 0.3rem/0.5rem "";
        color: #000;
        display: block; }
    #box .rongqi .baozhuang #pinglun ul li .zan {
        display: block;
        width: 1rem;
        float: right;
        background: url("../../public/imgs/ic_no_praise.png") no-repeat right 60%;
        background-size: 68% 200%; }
    #box .rongqi .baozhuang #pinglun ul li .zan span {
        font: 0.2rem/0.2rem "";
        color: #cb3340; }
</style>