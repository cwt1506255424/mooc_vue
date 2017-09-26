<template>
    <header>
        <div id="head">
            <router-link to="/index"><a  class="back" ></a></router-link>
            <span>实战课程</span>
            <router-link to="/shopcarts"><i class="shopcart"></i></router-link>
        </div>
    </header>
</template>

<script type="text/ecmascript-6">
    export default{
    }
</script>

<style scoped>
    header {
        background-color: #333949;
        color: #ffffff;
        height: 1.65rem;
        box-sizing: border-box;
        padding: 0.46rem 0.74rem 0.64rem;
        position: fixed;
        top: 0;
        width: 100%;
        z-index: 100; }

    header #head a.back {
        float: left;
        display: block;
        margin-top: 0.14rem;
        height: 0.54rem;
        width: 0.54rem;
        background: url("../../public/imgs/image_selector_btn_back.png") no-repeat center;
        background-size: 100% 100%; }
    header #head span {
        float: left;
        margin-left: 0.2rem;
        background: #333949;
        margin-top: 0.2rem;
        font: 0.38rem/0.38rem '';
        padding-left: 3rem;}
    header #head .shopcart {
        float: right;
        height: 0.54rem;
        width: 0.54rem;
        background: url("../../public/imgs/regular_members_icon2.png") no-repeat center bottom;
        background-size: 70% 70%;
        margin-left: 0.9rem; }
</style>