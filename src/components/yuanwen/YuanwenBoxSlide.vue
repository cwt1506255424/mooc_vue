<template>
        <div class="swiper-slide kuai">
            
			 <YuanwenBoxSlideUl :YuanwenLiLists="YuanwenUlLists"></YuanwenBoxSlideUl>
			 <YuanwenBoxSlideUl :YuanwenLiLists="YuanwenUlLists"></YuanwenBoxSlideUl>
			 <YuanwenBoxSlideUl :YuanwenLiLists="YuanwenUlLists"></YuanwenBoxSlideUl>
               
        </div>
</template>


<script type='text/ecmascript-6'>
    import YuanwenBoxSlideUl from "./YuanwenBoxSlideUl.vue";
    export default {
        props:["YuanwenUlLists"],
		components:{
            YuanwenBoxSlideUl
        }

    }
</script>



<style scoped>
    #box {
        margin-top: 3.09rem; }

</style>