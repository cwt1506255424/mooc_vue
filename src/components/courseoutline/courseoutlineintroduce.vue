<template>
    <div>
        <section id="introduce">
            <span>{{introduces.userspan}}</span>
            <p>{{introduces.userp}}</p>
        </section>
    </div>
</template>

<script type='text/ecmascript-6'>

    export default {
        props:["introduces"],
        components:{

        },
        mounted:function () {

        }
    }

</script>

<style scoped>
    #introduce {
        padding: 0.48rem 0.72rem;
        border-bottom: 1px solid #cbcbcb; }
    #introduce span {
        display: block;
        height: 0.48rem;
        width: 0.96rem;
        background-color: #ff9f1c;
        font: 700 0.24rem/0.48rem "";
        color: #ffffff;
        text-align: center;
        border-radius: 12%; }
    #introduce p {
        font: 700 0.34rem/0.5rem "";
        color: #b6bcbc; }
</style>