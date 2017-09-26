<template>
    <section id="history_path_class" class="pattern">
        <ul>
            <mine-history-list key="index" :HistoryPathClassListli="n" v-for="(n,index) in HistoryPathClassList"></mine-history-list>
        </ul>
    </section>
</template>

<script type="text/ecmascript-6">
    import mineHistoryList from "./mineHistoryList.vue"
    export default {
        props:["HistoryPathClassList"],
        components:{
            mineHistoryList
        }
    }
</script>

<style scoped>
    #history_path_class {
        background-color: #ffffff;
        margin-top: 0.25rem; }
    #history_path_class ul li a {
        display: block;
        height: 1.5rem;
        box-sizing: border-box;
        padding: 0.5rem 0.66rem;
        background: url("../../public/imgs/triangle.png") no-repeat 95% 50%;
        background-size: 5% 45%; }
    #history_path_class ul li a img {
        float: left;
        height: 0.48rem;
        width: 0.48rem; }
    #history_path_class ul li a span {
        margin-left: 0.7rem;
        font: 700 0.34rem/0.48rem ""; }
</style>