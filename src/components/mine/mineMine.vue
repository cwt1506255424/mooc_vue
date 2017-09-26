<template>
    <section id="mine" class="pattern">
        <ul>
            <mine-mine-list key="index" :MineListli="n" v-for="(n,index) in MineList"></mine-mine-list>
        </ul>
    </section>
</template>

<script type="text/ecmascript-6">
    import  mineMineList from "./mineMineList.vue"
    export default {
        props:["MineList"],
        components:{
            mineMineList
        }
    }
</script>

<style scoped>
    #mine {
        background-color: #ffffff;
        margin-top: 0.25rem; }
    #mine ul {
        display: flex;
        justify-content: space-between; }
    #mine ul li {
        flex: 25%; }
    #mine ul li a {
        display: block;
        text-align: center;
        padding: 0.7rem 0 0 0.3rem; }
    #mine ul li a img {
        width: 0.6rem;
        height: 0.6rem; }
    #mine ul li a span {
        display: block;
        font: 700 0.3rem/1.1rem ""; }
</style>