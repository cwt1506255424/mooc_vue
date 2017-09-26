<template>
    <div>
        <section id="yidong">
            <h3 class="pattern">移动开发</h3>
            <ul class="pattern">
                <courseyidongli key="index" :pro="n" v-for="(n,index) in Patterns3"></courseyidongli>
            </ul>
        </section>
    </div>
</template>

<script type='text/ecmascript-6'>
    import courseyidongli from "./courseyidongli.vue";
    export default {
        props:["Patterns3"],
        components:{
            courseyidongli
        }
    }

</script>

<style scoped>
    #yidong {
        margin-top: 0.2rem;
        background-color: #ffffff; }
    #yidong h3 {
        font: 700 0.38rem/1.4rem "";
        box-sizing: border-box;
        padding-left: 0.5rem;
        color: #6e7176; }
    #yidong ul {
        display: flex;
        justify-content: flex-start;
        flex-wrap: wrap;
        box-sizing: border-box; }
</style>