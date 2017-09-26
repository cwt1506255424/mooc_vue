<template>
    <section id="famousteacher" class="pattern">
        <h3>慕课精英名师推荐</h3>
        <div class="swiper-container five">
            <IndexFamousteacherUl :FamousteacherUlLists="FamousteacherLists"></IndexFamousteacherUl>
        </div>
    </section>
</template>


<script type='text/ecmascript-6'>
    import IndexFamousteacherUl from "./IndexFamousteacherUl.vue";
    export default {
        props:["FamousteacherLists"],
		components: {
            IndexFamousteacherUl
        }
    }
</script>

<style scoped>
    #famousteacher {background: #f1f5f6;}
    #famousteacher h3 {
        text-align: center;
        font: 800 0.36rem/1.5rem "";
        color: #717777; }

</style>