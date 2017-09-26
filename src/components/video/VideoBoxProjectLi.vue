<template>
    <!--<a href="#"><li class="title">课程介绍</li></a>-->
    <a href="#"><li class="content"><b>{{pro.content}}</b><b>{{pro.time}}</b></li></a>
    <!--<a href="#"><li class="content"><b>1-2案例展示</b><b>12：03</b></li></a>-->
</template>


<script type='text/ecmascript-6'>
    export default {
		props:["pro"]
    }
</script>

<style scoped>
    #box {
        background-color: #ffffff;
        padding-top: 7.64rem; }
    #box .rongqi .baozhuang #project {
        padding: 0.72rem;
        margin-bottom: 1.43rem; }
    #box .rongqi .baozhuang #project h2 {
        font: 700 0.24rem/0.72rem "";
        color: #000; }
    #box .rongqi .baozhuang #project ul li {
        padding-left: 0.5rem;
        font: 700  0.32rem/0.72rem "";
        margin-left: 0.5rem; }
    #box .rongqi .baozhuang #project ul .title {
        color: #000000;
        background: url("../../public/imgs/get_code_button_highlighted.9.png") no-repeat left;
        background-size: 4% 50%; }
    #box .rongqi .baozhuang #project ul .content {
        color: #6b7074;
        padding-right: 1.2rem;
        margin-left: 1rem;
        background: url("../../public/imgs/tra.png") no-repeat left;
        background-size: 4% 45%;
        display: flex;
        justify-content: space-between; }
    #box .rongqi .baozhuang #project ul .content:hover {
        color: #fe2f4d; }
</style>