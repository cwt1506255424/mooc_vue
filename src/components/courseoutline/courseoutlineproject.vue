<template>
    <div>
        <section id="project">
            <h2>课程大纲</h2>
            <courseoutlineproject-ul :key="index" :givetoul="n" v-for="(n,index) in courseOutlineProject"></courseoutlineproject-ul>
        </section>
    </div>
</template>

<script type='text/ecmascript-6'>
    import courseoutlineprojectUl from "./courseoutlineprojectUL.vue"
    export default {
        props:["courseOutlineProject"],
        components:{
            courseoutlineprojectUl

        },
        mounted:function () {

        }

    }

</script>

<style scoped>
    #project {
        padding: 0.72rem;
        margin-bottom: 1.43rem; }
    #project h2 {
        font: 700 0.24rem/0.72rem "";
        color: #000; }
    #project ul li {
        padding-left: 0.5rem;
        font: 700  0.32rem/0.72rem "";
        margin-left: 0.5rem; }
    #project ul .title {
        color: #000000;
        background: url("../../public/imgs/get_code_button_highlighted.9.png") no-repeat left;
        background-size: 4% 50%; }
    #project ul .content {
        color: #6b7074;
        margin-left: 1rem;
        background: url("../../public/imgs/tra.png") no-repeat left;
        background-size: 4% 45%; }
</style>