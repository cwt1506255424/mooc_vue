<template>
        <li>{{givetoli.content}}</li>
</template>

<script type='text/ecmascript-6'>

    export default {
        props:["givetoli"],
        components:{

        },
        mounted:function () {

        }
    }

</script>

<style scoped>

    #project ul a li {
        padding-left: 0.5rem;
        font: 700  0.32rem/0.72rem "";
        margin-left: 0.5rem; }
    #project ul a li .title {
        color: #000000;
        background: url("../../public/imgs/get_code_button_highlighted.9.png") no-repeat left;
        background-size: 4% 50%; }
    #project ul a li .content {
        color: #6b7074;
        margin-left: 1rem;
        background: url("../../public/imgs/tra.png") no-repeat left;
        background-size: 4% 45%; }
</style>