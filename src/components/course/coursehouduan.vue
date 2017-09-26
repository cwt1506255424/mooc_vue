<template>
    <div>
        <section id="houduan">
            <h3 class="pattern">后端开发</h3>
            <ul class="pattern">
                <coursehouduanli key="index" :pro="n" v-for="(n,index) in Patterns2"></coursehouduanli>
            </ul>
        </section>
    </div>
</template>

<script type='text/ecmascript-6'>
    import coursehouduanli from "./coursehouduanli.vue";
    export default {
        props:["Patterns2"],
        components:{
            coursehouduanli
        }
    }

</script>

<style scoped>
    #houduan {
        margin-top: 0.2rem;
        background-color: #ffffff; }
    #houduan h3 {
        font: 700 0.38rem/1.4rem "";
        box-sizing: border-box;
        padding-left: 0.5rem;
        color: #6e7176; }
    #houduan ul {
        display: flex;
        justify-content: flex-start;
        flex-wrap: wrap;
        box-sizing: border-box; }

</style>