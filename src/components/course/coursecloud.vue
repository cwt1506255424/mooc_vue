<template>
    <div>
        <section id="cloud">
            <h3 class="pattern">云计算&大数据</h3>
            <ul class="pattern">
                <coursecloudli key="index" :pro="n" v-for="(n,index) in Patterns5"></coursecloudli>
            </ul>
        </section>
    </div>
</template>

<script type='text/ecmascript-6'>
    import coursecloudli from "./coursecloudli.vue";
    export default {
        props:["Patterns5"],
        components:{
            coursecloudli
        }
    }

</script>

<style scoped>
    #cloud {
        margin-top: 0.2rem;
        background-color: #ffffff; }
    #cloud h3 {
        font: 700 0.38rem/1.4rem "";
        box-sizing: border-box;
        padding-left: 0.5rem;
        color: #6e7176; }
     #cloud ul {
         display: flex;
         justify-content: flex-start;
         flex-wrap: wrap;
         box-sizing: border-box; }

</style>

