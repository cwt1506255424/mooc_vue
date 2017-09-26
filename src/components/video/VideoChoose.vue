<template>
    <section id="choose">
        <ul class="pattern">
            <li class="choose">章节</li>
            <li>详情</li>
            <li>评论</li>
            <li>问答</li>
        </ul>
    </section>
</template>


<script type='text/ecmascript-6'>
    export default {
    }
</script>

<style scoped>
    #choose {
        margin-top: 6rem;
        position: fixed;
        width: 100%;
        z-index: 100; }
    #choose ul {
        display: flex;
        width: 100%;
        justify-content: space-between;
        background-color: #ffffff; }
    #choose ul li {
        flex: 1;
        text-align: center;
        color: #4f5563;
        font: 800 0.4rem/1.24rem "";
        border-top: 0.1rem solid #ffffff; }
    #choose ul .choose {
        border-bottom: 0.1rem solid #fe2f4d;
        color: #fe2f4d; }
</style>