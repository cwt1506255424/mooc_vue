<template>
    <div>
        <section id="shujuku">
            <h3 class="pattern">数据库</h3>
            <ul class="pattern">
            <courseshujukuli key="index" :pro="n" v-for="(n,index) in Patterns4"></courseshujukuli>
            </ul>
        </section>
    </div>
</template>

<script type='text/ecmascript-6'>
    import courseshujukuli from "./courseshujukuli.vue";
    export default {
        props:["Patterns4"],
        components:{
            courseshujukuli
        }
    }

</script>

<style scoped>
    #shujuku {
        margin-top: 0.2rem;
        background-color: #ffffff; }
    #shujuku h3 {
        font: 700 0.38rem/1.4rem "";
        box-sizing: border-box;
        padding-left: 0.5rem;
        color: #6e7176; }
    #shujuku ul {
        display: flex;
        justify-content: flex-start;
        flex-wrap: wrap;
        box-sizing: border-box; }
</style>