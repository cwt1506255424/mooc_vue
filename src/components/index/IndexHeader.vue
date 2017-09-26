<template>
    <header class="pattern">
        <div id="head">
            <span>首页</span>
            <i class="search"></i>
            <router-link to="/shoujidenglu"><i class="message"></i></router-link>
            <router-link to="/shopcarts"><i class="shopcart"></i></router-link>
        </div>
    </header>
</template>


<script type='text/ecmascript-6'>
    export default {

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
    header #head span {
        float: left;
        margin-top: 0.2rem;
        font: 0.38rem/0.38rem ''; }
    header #head i {
        float: left;
        display: block;
        height: 0.54rem;
        width: 0.54rem; }
    header #head .search {
        background: url("../../public/imgs/searchresults48.png") no-repeat center bottom;
        background-size: 85% 85%;
        margin-left: 5.05rem; }
    header #head .message {
        background: url("../../public/imgs/img_head_no_msg.png") no-repeat center bottom;
        background-size: 75% 75%;
        margin-left: 0.9rem; }
    header #head .shopcart {
        background: url("../../public/imgs/regular_members_icon2.png") no-repeat center bottom;
        background-size: 70% 70%;
        margin-left: 0.9rem; }
</style>