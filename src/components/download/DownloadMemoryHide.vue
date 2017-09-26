<template>
    <div id="memory_hide" style="display: none">
        <div class="hide_start">
            <img src="../../public/imgs/download.png"/><span>全部开始</span>
        </div>
        <div class="hide_stop">
            <img src="../../public/imgs/suspend.png"/><span>全部暂停</span>
        </div>
        <div class="hide_delet">
            <img src="../../public/imgs/delete.png"/><span>删除</span>
        </div>
    </div>
</template>
<script type="text/ecmascript-6">
    export default{
    }
</script>
<style scoped>
    #memory_hide {
        padding: 0.5rem 0.8rem;
        background: #323949;
        color: #fff;
        border-radius: 0.1rem;
        font-size: 0.4rem;
        position: absolute;
        top: 2.88rem;
        right: 0.48rem; }
    #memory_hide .hide_start img {
        width: 0.56rem;
        height: 0.56rem;
        padding-right: 0.32rem; }
    #memory_hide .hide_stop img {
        width: 0.56rem;
        height: 0.56rem;
        padding: 0.9rem 0.32rem 0.9rem 0; }
    #memory_hide .hide_delet img {
        width: 0.56rem;
        height: 0.56rem;
        padding-right: 0.32rem; }
</style>