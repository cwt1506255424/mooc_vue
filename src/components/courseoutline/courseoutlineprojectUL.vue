<template>
    <ul>
        <courseoutlineproject-li :key="index" :givetoli="n" v-for="(n,index) in givetoul"></courseoutlineproject-li>
    </ul>
</template>

<script type='text/ecmascript-6'>
    import courseoutlineprojectLi from "./courseoutlineprojectLi.vue"

    export default {
        props:["givetoul"],
        components:{
            courseoutlineprojectLi
        },
        mounted:function () {

        }

    }

</script>

<style scoped>

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