<template>
    <ul class="pattern">
        <IndexGessyouLi :key="index" :pro="n" v-for="(n,index) in GuessyoulikeUlLists"></IndexGessyouLi>
     </ul>
</template>


<script type='text/ecmascript-6'>
    import IndexGessyouLi from "./IndexGessyouLi.vue";
    export default {
        props:["GuessyoulikeUlLists"],
		components: {
            IndexGessyouLi
        }
    }
</script>

<style scoped>
    #gessyou ul {
        padding: 0.33rem 0.57rem 0;margin-bottom:1.5rem;
        justify-content: space-between;
        display: flex;background: #f1f5f6;
        flex-wrap: wrap; }

</style>