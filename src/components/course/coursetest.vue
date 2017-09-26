<template>
    <div>
        <section id="test">
            <h3 class="pattern">运维&测试</h3>
            <ul class="pattern">
                <coursetestli key="index" :pro="n" v-for="(n,index) in Patterns6"></coursetestli>
            </ul>
        </section>
    </div>
</template>

<script type='text/ecmascript-6'>
    import coursetestli from "./coursetestli.vue";
    export default {
        props:["Patterns6"],
        components:{
            coursetestli
        }
    }

</script>

<style scoped>
    #test {
        margin-top: 0.2rem;
        background-color: #ffffff; }
    #test h3 {
        font: 700 0.38rem/1.4rem "";
        box-sizing: border-box;
        padding-left: 0.5rem;
        color: #6e7176; }
    #test ul {
        display: flex;
        justify-content: flex-start;
        flex-wrap: wrap;
        box-sizing: border-box; }
</style>