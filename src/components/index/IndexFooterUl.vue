<template>
    <ul>
        <IndexFooterLi></IndexFooterLi>
        <IndexFooterLi></IndexFooterLi>
        <IndexFooterLi></IndexFooterLi>
        <IndexFooterLi></IndexFooterLi>
    </ul>
</template>


<script type='text/ecmascript-6'>
    import IndexFooterLi from "./IndexFooterLi.vue";
    export default {
        components:{
            IndexFooterLi
        }
    }


</script>

<style scoped>
    footer ul {
        height: 1.5rem;
        background-color: #ffffff;
        padding: 0.2rem 1.02rem 0.15rem;
        box-sizing: border-box;
        display: flex;
        justify-content: space-between;
        box-shadow: 0 0px 5px #a1a1a1;
        position: fixed;
        width: 100%;
        bottom: 0;
        z-index: 100; }
</style>