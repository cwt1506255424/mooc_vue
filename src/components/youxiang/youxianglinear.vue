<template>
    <div>
        <div class="linear">
            <youxianglineariconf></youxianglineariconf>
            <youxianglinearhhh></youxianglinearhhh>
            <youxianglinearinput1></youxianglinearinput1>
            <youxianglinearinput2></youxianglinearinput2>
            <youxianglinearzhuce></youxianglinearzhuce>
            <youxianglinearshouji></youxianglinearshouji>
            <youxianglinearqudenglu></youxianglinearqudenglu>
        </div>
    </div>
</template>

<script type='text/ecmascript-6'>
    import youxianglineariconf from "./youxianglineariconf.vue";
    import youxianglinearhhh from "./youxianglinearhhh.vue";
    import youxianglinearinput1 from "./youxianglinearinput1.vue";
    import youxianglinearinput2 from "./youxianglinearinput2.vue";
    import youxianglinearzhuce from "./youxianglinearzhuce.vue";
    import youxianglinearshouji from "./youxianglinearshouji.vue";
    import youxianglinearqudenglu from "./youxianglinearqudenglu.vue";
    export default {

        components:{
            youxianglineariconf,
            youxianglinearhhh,
            youxianglinearinput1,
            youxianglinearinput2,
            youxianglinearzhuce,
            youxianglinearshouji,
            youxianglinearqudenglu
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