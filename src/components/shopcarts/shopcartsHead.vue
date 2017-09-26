<template>
    <header>
        <div id="head">
            <a @click="routerBack"></a>
            <span>购物车</span>
        </div>
    </header>
</template>

<script>
    export default {
        methods:{
            routerBack(){
                this.$router.go(-1);
            }
        }
    }
</script>

<style scoped>
    header {
        color: #ffffff;
        height: 1.65rem;
        box-sizing: border-box;
        background-color: #333949;
        position: fixed;
        top: 0;
        width: 100%;
        z-index: 100; }
    header #head a {
        float: left;
        display: block;
        height: 1.65rem;
        width: 1.65rem;
        background: url("../../public/imgs/back.png") no-repeat center;
        background-size: 50% 50%; }
    header #head span {
        margin-left: 0.3rem;
        float: left;
        font: 700 0.38rem/1.65rem "";
        color: #ffffff;
        display: block; }
</style>