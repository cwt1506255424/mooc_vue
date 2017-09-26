<template>
    <section id="gessyou" class="pattern">
        <IndexTitle></IndexTitle>
        <IndexGessyouUl :GuessyoulikeUlLists="GuessyoulikeLists"></IndexGessyouUl>

    </section>
</template>


<script type='text/ecmascript-6'>
    import IndexTitle from "./IndexTitle.vue";
    import IndexGessyouUl from "./IndexGessyouUl.vue";
    export default {
        props:["GuessyoulikeLists"],
		components: {
            IndexTitle,
            IndexGessyouUl
        }
    }
</script>

<style scoped>
    #gessyou {background: #f1f5f6;}
</style>