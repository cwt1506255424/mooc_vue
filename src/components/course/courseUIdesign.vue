<template>
    <div>
        <section id="UIdesign">
            <h3 class="pattern">UI设计</h3>
            <ul class="pattern">
                <course-u-idesignli key="index" :pro="n" v-for="(n,index) in Patterns7"></course-u-idesignli>
            </ul>
        </section>
    </div>
</template>

<script type='text/ecmascript-6'>
    import courseUIdesignli from "./courseUIdesignli.vue";
    export default {
        props:["Patterns7"],
        components:{
            courseUIdesignli
        }
    }

</script>

<style scoped>
    #UIdesign {
        margin-top: 0.2rem;
        margin-bottom: 1.65rem;
        background-color: #ffffff; }
    #UIdesign h3 {
        font: 700 0.38rem/1.4rem "";
        box-sizing: border-box;
        padding-left: 0.5rem;
        color: #6e7176; }
    #UIdesign ul {
        display: flex;
        justify-content: flex-start;
        flex-wrap: wrap;
        box-sizing: border-box; }
</style>