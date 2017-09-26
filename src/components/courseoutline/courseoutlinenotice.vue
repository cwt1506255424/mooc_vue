<template>
    <div>
        <section id="notice">
            <ul>
                <courseoutlinenoticeli :key="index" :pro="n" v-for="(n,index) in notice"></courseoutlinenoticeli>
            </ul>
        </section>
    </div>
</template>

<script type='text/ecmascript-6'>
    import courseoutlinenoticeli from "./courseoutlinenoticeli.vue";
    export default {
        props:["notice"],
        components:{
            courseoutlinenoticeli
        },
        mounted:function () {

        }
    }

</script>

<style scoped>
    #notice {
        padding: 0.72rem;
        border-bottom: 1px solid #cbcbcb; }
    #notice ul li h3 {
        font: 700 0.24rem/0.72rem "";
        color: #000; }
    #notice ul li p {
        padding-left: 0.72rem;
        font: 700 0.34rem/0.68rem "";
        color: #b6bcbc; }
</style>