<template>
    <section id="night_setting" class="pattern">
        <ul>
            <mine-night-list key="index" :NightSettingListli="n" v-for="(n,index) in NightSettingList"></mine-night-list>
        </ul>
    </section>
</template>

<script type="text/ecmascript-6">
    import "../../public/js/jquery-1.8.3.min.js";
    import mineNightList from "./mineNightList.vue";
    export default {
        props:["NightSettingList"],
        components:{
            mineNightList
        }
    }
</script>

<style scoped>

    #night_setting {
        background-color: #ffffff;
        margin-top: 0.25rem;
        margin-bottom: 1.65rem; }
    #night_setting ul li a {
        display: block;
        height: 1.5rem;
        box-sizing: border-box;
        padding: 0.5rem 0.66rem;
        background: url("../../public/imgs/triangle.png") no-repeat 95% 50%;
        background-size: 5% 45%; }
    #night_setting ul li a img {
        float: left;
        height: 0.48rem;
        width: 0.48rem; }
    #night_setting ul li a span {
        float: left;
        display: inline-block;
        margin-left: 0.7rem;
        font: 700 0.34rem/0.48rem ""; }
    #night_setting ul li .te {
        background: none; }
    #night_setting ul li .te .bac {
        margin-left: 6rem;
        display: inline-block;
        border-radius: 0.2rem;
        float: left;
        height: 0.4rem;
        width: 0.8rem;
        background-color: #b2b2b2;
        position: relative; }
    #night_setting ul li .te .bac i {
        background-color: #ececec;
        display: block;
        height: 0.6rem;
        width: 0.6rem;
        position: absolute;
        border-radius: 50%;
        left: -0.1rem;
        top: -0.1rem; }
</style>