<template>
   <div>
        <VideoHeader></VideoHeader>
        <VideoChoose></VideoChoose>
        <VideoBox></VideoBox>
        <VideoAdd></VideoAdd>
        <VideoShare ></VideoShare>
    </div>
</template>


<script type='text/ecmascript-6'>
    import VideoService from "../../services/VideoService"

    import VideoHeader from "./VideoHeader.vue";
    import VideoChoose from "./VideoChoose.vue";
    import VideoBox from "./VideoBox.vue";
    import VideoAdd from "./VideoAdd.vue";
    import VideoShare from "./VideoShare.vue";
    export default{
        data(){
            return{

            }
        },
        components:{
            VideoHeader,
            VideoChoose,
            VideoBox,
            VideoAdd,
            VideoShare
        },
        mounted:function () {
            var i = 0;
            var vdplay = document.querySelector("#video");
            vdplay.addEventListener("touchstart",function(){
                i++;
                setTimeout(function () {
                    i = 0;
                }, 500);
                if (i > 1) {
                    if(vdplay.paused){
                        vdplay.play();
                        $("#back").addClass("hide");
                    }else{
                        vdplay.pause();
                        $("#back").removeClass("hide");
                    }
                    i = 0;
                }
            });

            }

    }
</script>

<style scoped>
    .backgroundcolor{
        background-color: #f1f5f6;
    }
</style>