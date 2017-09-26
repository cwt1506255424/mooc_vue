<template>
    <div>
        <div class="linear">
            <shoujidenglulineariconf></shoujidenglulineariconf>
            <shoujidenglulinearhhh></shoujidenglulinearhhh>
            <shoujidenglulinearinput1></shoujidenglulinearinput1>
            <shoujidenglulinearinput3></shoujidenglulinearinput3>
            <shoujidenglulinearinput2></shoujidenglulinearinput2>
            <shoujidenglulinearzhuce></shoujidenglulinearzhuce>
            <shoujidenglulinearshouji></shoujidenglulinearshouji>
           <shoujidenglulinearqudenglu></shoujidenglulinearqudenglu>
        </div>
    </div>
</template>

<script type='text/ecmascript-6'>
    import shoujidenglulineariconf from "./shoujidenglulineariconf.vue";
    import shoujidenglulinearhhh from "./shoujidenglulinearhhh.vue";
    import shoujidenglulinearinput1 from "./shoujidenglulinearinput1.vue";
    import shoujidenglulinearinput3 from "./shoujidenglulinearinput3.vue";
    import shoujidenglulinearinput2 from "./shoujidenglulinearinput2.vue";
    import shoujidenglulinearzhuce from "./shoujidenglulinearzhuce.vue";
    import shoujidenglulinearshouji from "./shoujidenglulinearshouji.vue";
    import shoujidenglulinearqudenglu from "./shoujidenglulinearqudenglu.vue";
    export default {
        components:{
            shoujidenglulineariconf,
            shoujidenglulinearhhh,
            shoujidenglulinearinput1,
            shoujidenglulinearinput3,
            shoujidenglulinearinput2,
            shoujidenglulinearzhuce,
            shoujidenglulinearshouji,
            shoujidenglulinearqudenglu
        },
        mounted:function () {

        }
    }

</script>

<style scoped>
    .linear{
        width:100%;
        height:19.2rem;
        background:-webkit-gradient(linear, 0% 0%, 0% 100%,from(#5c6069), to(#0a141d));
    }
</style>