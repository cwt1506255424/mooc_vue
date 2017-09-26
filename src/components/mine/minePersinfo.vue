<template>
    <div>
        <section id="persinfo" class="pattern">
            <div class="persinfo_t">
                <img src="../../public/imgs/messi.png" alt="">
                <div class="perinfo_t_r">
                    <h3>慕粉0219422173</h3>
                    <span>学习时长</span>
                    <span>0</span>
                    <span class="jingyan">经验</span>
                    <span>0</span>
                </div>
            </div>

            <div class="persinfo_b">
                <ul>
                    <mine-persinfo-list key="index" :PersinfoListli="n" v-for="(n,index) in PersinfoList"></mine-persinfo-list>
                </ul>
            </div>
        </section>
    </div>
</template>

<script type="text/ecmascript-6">
    import  minePersinfoList from "./minePersinfoList.vue"
    export default {
        props:["PersinfoList"],
        components:{
            minePersinfoList
        }
    }
</script>

<style scoped>
    #persinfo {
        background-color: #ffffff;
        padding: 0.5rem 0;
        margin-top: 1.65rem; }
    #persinfo .persinfo_t {
        height: 2.6rem;
        padding: 0 0.7rem;
        box-sizing: border-box; }
    #persinfo .persinfo_t img {
        height: 2.6rem;
        width: 2.6rem;
        border-radius: 50%;
        float: left; }
    #persinfo .persinfo_t .perinfo_t_r {
        float: left;
        height: 2.6rem;
        padding-left: 0.5rem; }
    #persinfo .persinfo_t .perinfo_t_r h3 {
        font: 900 0.4rem/0.4rem "";
        color: #666;
        margin: 0.75rem  0; }
    #persinfo .persinfo_t .perinfo_t_r span {
        font: 700 0.3rem/0.3rem "";
        color: #6c757a;
        margin-right: 0.4rem; }
    #persinfo .persinfo_t .perinfo_t_r .jingyan {
        border-left: 1px solid #6c757a;
        padding-left: 0.4rem; }
    #persinfo .persinfo_b {
        margin-top: 1.05rem; }
    #persinfo .persinfo_b ul {
        display: flex;
        justify-content: space-between; }
    #persinfo .persinfo_b ul li {
        border-right: 1px solid #6c757a;
        text-align: center;
        padding: 0 1rem;
        box-sizing: border-box;
        flex: 1; }
    #persinfo .persinfo_b ul li span {
        font: 900 0.4rem/0.4rem "";
        color: #666; }
    #persinfo .persinfo_b ul li b {
        font: 900 0.4rem/0.4rem ""; }
    #persinfo .persinfo_b ul .te {
        border: none; }

</style>