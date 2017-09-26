<template>
	<div class="backgroundcolor pattern" >
		<IndexHeader></IndexHeader>
		<div class="swiper-container swipey pattern">
				<div class="swiper-wrapper w">
					<div class="swiper-slide d">
						<div class="init-loading pattern list-group-item text-center" style="display: none;padding-top:1.65rem;margin-bottom: -1.65rem">下拉可以刷新</div>
						<div class="swiper-container2">
							<div class="swiper-wrapper">
								<div id="thelist" class="swiper-slide list-group">
									<IndexBanner :BannerLists="BannerLists"></IndexBanner>
									<IndexNav></IndexNav>
									<IndexKechengtuijian :KechengtuijianLists="KechengtuijianLists"></IndexKechengtuijian>
									<IndexZhiyelujing :occupationLists="occupationLists"></IndexZhiyelujing>
									<IndexOneadv></IndexOneadv>
									<IndexShizhantuijian :recommendLists="recommendLists"></IndexShizhantuijian>
									<IndexFamousteacher :FamousteacherLists="FamousteacherLists"></IndexFamousteacher>
									<IndexGessyou :GuessyoulikeLists="GuessyoulikeLists"></IndexGessyou>
								</div>
								<div class="loadtip">上拉加载更多</div>
								<div class="swiper-scrollbar"></div>
							</div>
						</div>
					</div>
				</div>
			</div>
		<CommenFooter></CommenFooter>
	</div>	
</template>
<script type='text/ecmascript-6'>
	import  IndexService from "../../services/IndexService"

	import IndexHeader from "./IndexHeader.vue";
    import IScroll from "../../../node_modules/iscroll/build/iscroll-probe.js";
	import IndexBanner from "./IndexBanner.vue";
	import IndexNav from "./IndexNav.vue";
	import IndexKechengtuijian from "./IndexKechengtuijian.vue";
	import IndexZhiyelujing from "./IndexZhiyelujing.vue";
	import IndexOneadv from "./IndexOneadv.vue";
	import IndexShizhantuijian from "./IndexShizhantuijian.vue";
	import IndexFamousteacher from "./IndexFamousteacher.vue";
	import IndexGessyou from "./IndexGessyou.vue";
	import  CommenFooter from "../commonfooter/CommenFooter.vue";

	export default {
		data(){
			return{
				BannerLists:[],
				KechengtuijianLists:[],
				occupationLists:[],
				recommendLists:[],
				FamousteacherLists:[],
				GuessyoulikeLists:[],
				newdata:[]
			}
		},
		components:{
			IndexHeader,
			IndexBanner,
			IndexNav,
			IndexKechengtuijian,
			IndexZhiyelujing,
			IndexOneadv,
			IndexShizhantuijian,
			IndexFamousteacher,
			IndexGessyou,
			CommenFooter
		},
		created:function(){
			this.initialData();
		},
		methods:{
			initialData:function(){
				IndexService.getIndex((data)=>{
					this.BannerLists=data.BannerLists;
					this.KechengtuijianLists=data.KechengtuijianLists;
					this.occupationLists=data.occupationLists;
					this.recommendLists=data.recommendLists;
					this.FamousteacherLists=data.FamousteacherLists;
					this.GuessyoulikeLists=data.GuessyoulikeLists;
				})
			},
			getnewdata:function(){
				IndexService.getIndex((data)=>{
					var newdata=data.KechengtuijianLists;
					this.GuessyoulikeLists=this.GuessyoulikeLists.concat(newdata);
				})
			},
			changeKechengData:function(){
				IndexService.getIndex((data)=>{
					var newdata=data.GuessyoulikeLists;
					this.KechengtuijianLists=[];
					this.KechengtuijianLists=newdata;
				})
			},
			changeShizhanData:function(){
				IndexService.getIndex((data)=>{
					var newdata=data.KechengtuijianLists;
					this.recommendLists=[];
					this.recommendLists=newdata;
				})
			},
			changeGuessData:function(){
				IndexService.getIndex((data)=>{
					var newdata=data.recommendLists;
					this.GuessyoulikeLists=[];
					this.GuessyoulikeLists=newdata;
				})
			},
		},
		mounted:function () {
			var _this= this;
			var mySwiper = new Swiper ('.five', {
				slidesPerView: 'auto',
				paginationClickable: true,
				spaceBetween: 30,
				observer:true,
				observeParents:true
			});
			$("#kechengtuijian").children(".title").children(".changeKecheng").click(
					function () {_this.changeKechengData();}
			);
			$("#shizhantuijian").children(".title").children(".changeKecheng").click(
					function () {_this.changeShizhanData();}
			);
			$("#gessyou").children(".title").children(".changeKecheng").click(
					function () {_this.changeGuessData();}
			);
			var loadFlag = true;
            var oi = 0;
            var mySwiper = new Swiper('.swipey',{
                direction: 'vertical',
                scrollbar: '.swiper-scrollbar',
                slidesPerView: 'auto',
                mousewheelControl: true,
                freeMode: true,
                onTouchMove: function(swiper){		//手动滑动中触发
                    var _viewHeight = document.getElementsByClassName('swiper-wrapper')[0].offsetHeight;
                    var _contentHeight = document.getElementsByClassName('swiper-slide')[0].offsetHeight;
                    if(mySwiper.translate < 50 && mySwiper.translate > 0) {
                        $(".init-loading").html('下拉刷新...').show();
                    }else if(mySwiper.translate > 50 ){
                        $(".init-loading").html('释放刷新...').show();
                    }
                },
                onTouchEnd: function(swiper) {
                    var _viewHeight = document.getElementsByClassName('swiper-wrapper')[0].offsetHeight;
                    var _contentHeight = document.getElementsByClassName('swiper-slide')[0].offsetHeight;
                    // 上拉加载
                    if(mySwiper.translate <= _viewHeight - _contentHeight - 30 && mySwiper.translate < 0) {
                        if(loadFlag){
                            $(".loadtip").html('玩命加载中...');
                            $(".loadtip").css({'bottom':'0.5rem'});
                        }else{
                            $(".loadtip").html('没有更多啦！');
                        }
                        setTimeout(
							function () {
								_this.getnewdata();
							}, 800);
                    }
                    // 下拉刷新
                    if(mySwiper.translate >= 30) {
                        $(".init-loading").html('正在刷新...').show();
                        $(".loadtip").html('上拉加载更多');
                        loadFlag = true;
                        setTimeout(function() {
                            $(".refreshtip").show(0);
                            $(".init-loading").html('刷新成功！');
                            setTimeout(function(){
                                $(".init-loading").html('').hide();
                            },800);
                            $(".loadtip").show(0);
                            //刷新操作
                            mySwiper.update(); // 重新计算高度;
                        }, 1000);
                    }else if(mySwiper.translate >= 0 && mySwiper.translate < 50){
                        $(".init-loading").html('').hide();
                    }
                    return false;
                }
            });
            var mySwiper2 = new Swiper('.swiper-container2',{
                onTransitionEnd: function(swiper){
                    $('.w').css('transform', 'translate3d(0px, 0px, 0px)')
                    $('.swiper-container2 .swiper-slide-active').css('height','auto').siblings('.swiper-slide').css('height','0px');
                    mySwiper.update();
                    $('.tab span').eq(mySwiper2.activeIndex).addClass('active').siblings('span').removeClass('active');
                }
            });
            $('.tab span').click(function(){
                $(this).addClass('active').siblings('span').removeClass('active');
                mySwiper2.slideTo($(this).index(), 500, false)
                $('.w').css('transform', 'translate3d(0px, 0px, 0px)')
                $('.swiper-container2 .swiper-slide-active').css('height','auto').siblings('.swiper-slide').css('height','0px');
                mySwiper.update();
            });
		}
	}
</script>
<style scoped>
	.refreshtip {position: absolute;left: 0;width: 100%;text-align: center;color: #999;}
	.swiper-container{overflow: visible;color: #999;}
	.loadtip { position:absolute;bottom:1rem;width: 100%;font: 0.4rem/1rem "";text-align: center;color: #999;}
	.init-loading{color: #999;font: 0.4rem/1rem "";}
	.swiper-slide{height: auto;}
	.text-center{text-align: center;}
	.list-group-item{position: relative; display: block;margin-bottom: -1px;background: #f1f5f6;}
	.backgroundcolor{background: #f1f5f6!important;}
	html{background: #f1f5f6!important;}
	.swiper-scrollbar{background: #f1f5f6!important;}

</style>