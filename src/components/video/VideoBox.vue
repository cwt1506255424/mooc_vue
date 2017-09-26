<template>
    <section id="box" class="pattern">
        <div class="swiper-container rongqi">
            <div class="swiper-wrapper baozhuang">
                <VideoBoxProject :VideoProject="VideoProject"></VideoBoxProject>
                <VideoBoxXiangqing :videoDetailGrade="videoDetailGrade" :videoDetailNotice="videoDetailNotice" :videoTeacher="videoTeacher" :VideoGrade="VideoGrade"></VideoBoxXiangqing>
                <VideoBoxPinglun :VideoPinglun="VideoPinglun"></VideoBoxPinglun>
                <VideoBoxWenda :VideoWenda="VideoWenda"></VideoBoxWenda>
             </div>
        </div>
    </section>
</template>


<script type='text/ecmascript-6'>
    import VideoService from "../../services/VideoService"

    	
	import VideoBoxProject from "./VideoBoxProject.vue"
    import VideoBoxXiangqing from "./VideoBoxXiangqing.vue"
    import VideoBoxPinglun from "./VideoBoxPinglun.vue"
    import VideoBoxWenda from "./VideoBoxWenda.vue"
    export default {
        data(){
            return{
                VideoProject:[],
                videoDetailGrade:[],
				videoDetailNotice:[],
				videoTeacher:[],
				VideoGrade:[],
				VideoPinglun:[],
				VideoWenda:[]
            }
        },
		components:{
            VideoBoxProject,
            VideoBoxXiangqing,
            VideoBoxPinglun,
            VideoBoxWenda
        },
		created:function(){
            this.initialData();
        },
        methods:{
            initialData:function(){
                VideoService.getVideo((data)=>{
                    this.VideoProject=data.VideoProject;
                    this.videoDetailGrade=data.videoDetailGrade;
                    this.videoDetailNotice=data.videoDetailNotice;
                    this.videoTeacher=data.videoTeacher;
                    this.VideoGrade=data.VideoGrade;
                    this.VideoPinglun=data.VideoPinglun;
                    this.VideoWenda=data.VideoWenda;
                });
            }
        },
        /*beforeMount:function () {
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
                    childli[swiper.activeIndex].setAttribute("class", "choose");
                }
            })
            $('#choose ul li').on('click',function(e){
                e.preventDefault();
                mySwiper.slideTo($(this).index())
            })
        },*/
        mounted:function(){
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
                    childli[swiper.activeIndex].setAttribute("class", "choose");
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
        background-color: #ffffff;
        padding-top: 7.64rem; }
    #box .rongqi .baozhuang #project {
        padding: 0.72rem;
        margin-bottom: 1.43rem; }
</style>