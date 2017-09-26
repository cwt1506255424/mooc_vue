<template>
    <div>
        <header class="pattern">
            <div id="head">
                <span>课程</span>
                <i class="search"></i>
                <router-link to="/shoujidenglu">
                <i class="message">
                    <div class="messag"></div>
                </i>
                </router-link>
                <router-link to="/shopcarts">
                <i class="shopcart">
                    <div class="messag">1</div>
                </i>
                </router-link>
            </div>
        </header>
    </div>
</template>

<script type='text/ecmascript-6'>


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
        font: 0.44rem/0.38rem ''; }
    header #head i {
        float: left;
        display: block;
        height: 0.54rem;
        width: 0.54rem; }
    header #head .search {
        background: url("../../public/imgs/searchresults48.png") no-repeat center bottom;
        background-size: 85% 85%;
        margin-left: 5rem; }
    header #head .message {
        background: url("../../public/imgs/img_head_no_msg.png") no-repeat center bottom;
        background-size: 85% 85%;
        margin-left: 0.9rem;
        position: relative; }
    header #head .message .messag {
        width: 0.26rem;
        height: 0.26rem;
        background: #ff2e4d;
        border-radius: 50%;
        position: absolute;
        top: -0.05rem;
        right: -0.06rem; }
    header #head .shopcart {
        background: url("../../public/imgs/regular_members_icon2.png") no-repeat center bottom;
        background-size: 85% 85%;
        margin-left: 0.9rem;
        position: relative; }
    header #head .shopcart .messag {
        width: 0.36rem;
        height: 0.36rem;
        background: #ff2e4d;
        border-radius: 50%;
        text-align: center;
        position: absolute;
        top: -0.13rem;
        right: -0.15rem;
        font-size: 0.1rem;
        color: #fff;
        line-height: 0.36rem; }

</style>