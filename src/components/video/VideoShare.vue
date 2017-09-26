<template>
    <section id="share">
        <VideoShareSection></VideoShareSection>
        <div id="close">×</div>
    </section>
</template>

<script type='text/ecmascript-6'>
    import VideoShareSection from "./VideoShareSection.vue";
    export default{
        components:{
            VideoShareSection
        },
        mounted:function () {
            //点击加好显示分享
            $("#add").on("touchstart", function(e) {
                $(this).css("display","none");
                $(this).siblings("#share").css("display","block");
            });
            //点击×关闭
            $("#close").on("touchstart", function(e) {
                $(this).parent().css("display","none");
                $(this).parent().siblings("#add").css("display","block");
            });
        }
    }
</script>

<style scoped>
    #share {
        display: none;
        width: 100%;
        position: fixed;
        height: 13.1rem;
        background: rgba(64, 70, 80, 0.9);
        bottom: 0;
        z-index: 101; }
    #share #close {
        position: fixed;
        bottom: 1.5rem;
        right: 1rem;
        color: #fff;
        font: 0.9rem/0.9rem ""; }
</style>