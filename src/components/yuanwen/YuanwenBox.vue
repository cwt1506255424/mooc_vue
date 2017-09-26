<template>
    <section id="box">
        <div class="swiper-container rongqi">
            <div class="swiper-wrapper baozhuang">
                <YuanwenBoxSlide :YuanwenUlLists="YuanwenLists"></YuanwenBoxSlide>
                <YuanwenBoxSlide :YuanwenUlLists="YuanwenLists"></YuanwenBoxSlide>
                <YuanwenBoxSlide :YuanwenUlLists="YuanwenLists"></YuanwenBoxSlide>
                
            </div>
        </div>

    </section>
</template>


<script type='text/ecmascript-6'>
    import YuanwenBoxSlide from "./YuanwenBoxSlide.vue";
    export default {
        props:["YuanwenLists"],
		components:{
            YuanwenBoxSlide
        },
		 mounted:function () {
            var mySwiper =new Swiper ('.rongqi', {
                slidesPerView: 'auto',
                paginationClickable: true,
                observer:true,
                observeParents:true,
                autoHeight:true,
                onSlideChangeStart: function(swiper){
                    var childli=$('#choose ul li');
                    for (var i=0;i<childli.length;i++){
                        childli[i].setAttribute("class", " ");
                    }
                    childli[swiper.activeIndex].setAttribute("class", "red");
                }
            })
            $('#choose ul li').on('click',function(e){
                e.preventDefault();
                mySwiper.slideTo($(this).index())
            })
        }

    }
</script>


<style scoped>
    #box {
        margin-top: 3.09rem; }
    #box .rongqi .baozhuang .kuai ul {
        padding: 0 0.6rem;
        background-color: #ffffff; }
    #box .rongqi .baozhuang .kuai ul li a {
        display: block;
        padding: 0.6rem 0;
        border-bottom: 1px solid #ededed; }
    #box .rongqi .baozhuang .kuai ul li a .come {
        font: 600  0.3rem/1rem "";
        color: #b7bbbc; }
    #box .rongqi .baozhuang .kuai ul li a h5 {
        font: 600  0.44rem/0.5rem ""; }
    #box .rongqi .baozhuang .kuai ul li a .answer {
        margin-top: 0.25rem;
        height: 0.7rem; }
    #box .rongqi .baozhuang .kuai ul li a .answer b {
        display: block;
        height: 0.7rem;
        width: 1.98rem;
        border-radius: 8%;
        color: #10b5ff;
        box-sizing: border-box;
        padding-left: 0.35rem;
        text-align: center;
        float: left;
        font: 700  0.24rem/0.7rem "";
        background: #e5f8ff url("../../public/imgs/answer_edit_icon.png") no-repeat 3% 50%;
        background-size: 20% 50%; }
    #box .rongqi .baozhuang .kuai ul li a .answer span {
        float: left;
        display: block;
        font: 700  0.32rem/0.7rem "";
        color: #6d747a;
        margin-left: 0.25rem; }
    #box .rongqi .baozhuang .kuai ul li a .answer span i {
        color: #ff9d21; }
</style>