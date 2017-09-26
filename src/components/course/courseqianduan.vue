<template>
    <div>
        <section id="qianduan">
            <h3 class="pattern">前端开发</h3>
            <ul class="pattern">
            <courseqianduanli key="index" :pro="n" v-for="(n,index) in Patterns1"></courseqianduanli>
            </ul>
        </section>
    </div>
</template>

<script type='text/ecmascript-6'>
    import courseqianduanli from "./courseqianduanli.vue";
    export default {
        props:["Patterns1"],
        components:{
            courseqianduanli
        }
    }

</script>

<style scoped>
    #qianduan {
        margin-top: 1.65rem;
        background-color: #ffffff; }
    #qianduan h3 {
        font: 700 0.38rem/1.4rem "";
        box-sizing: border-box;
        padding-left: 0.5rem;
        color: #6e757b; }
    #qianduan ul {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        box-sizing: border-box; }

</style>