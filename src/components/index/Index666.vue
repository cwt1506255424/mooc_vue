<template>
	<div class="backgroundcolor">
		<IndexHeader></IndexHeader>
		<div class="swiper-container swipey">
				<div class="swiper-wrapper w">
					<div class="swiper-slide d">
						<div class="init-loading list-group-item text-center" style="display: none;padding-top:1.65rem;margin-bottom: -1.65rem">下拉可以刷新</div>
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
			IndexGessyou

		},
		created:function(){
			this.initialData();
//			this.getnewdata();
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
				console.log('getnewData');
				IndexService.getIndex((data)=>{
					var newdata=data.KechengtuijianLists;
					this.GuessyoulikeLists=this.GuessyoulikeLists.concat(newdata);
				/*	var test= this.newdata;
					var el,ul, li, sect;
					el = document.getElementById('thelist');
					sect = document.createElement('section');
					var str="<ul>"
					for(var i in test){
						 str+=`<li><a href="#"><div class="four php"><div class="fourup"><span>${test[i].name}</span></div><div class="fourdown"><h5>test[i].qrcode</h5><p>test[i].description</p><span>test[i].number</span></div></div></a></li>`;
					}
					str+="</ul>";
					sect.innerHTML=str;
					el.appendChild(sect);*/
				})
			}
		},
		mounted:function () {
			console.log(this)
			var _this= this;
			var mySwiper = new Swiper ('.five', {
				slidesPerView: 'auto',
				paginationClickable: true,
				spaceBetween: 30,
				observer:true,
				observeParents:true
			});
			$(".change").toggle(
				function () {
					$(this).parent().siblings(".ulShow").addClass("hide").siblings(".ulHide").removeClass("hide");
				},
				function () {
					$(this).parent().siblings(".ulShow").removeClass("hide").siblings(".ulHide").addClass("hide");
				}
			)


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
                    if(mySwiper.translate <= _viewHeight - _contentHeight - 50 && mySwiper.translate < 0) {
                        // console.log("已经到达底部！");
                        if(loadFlag){
                            $(".loadtip").html('正在加载更多...');
                        }else{
                            $(".loadtip").html('没有更多啦！');
                        }
                        setTimeout(
								function () {
									/*var el, li, i;
									el = document.getElementById('thelist');
									var str = "";
									str += '<img style="width:90%;height: 2.28rem;margin:0.57rem auto;" src="./src/public/imgs/oneadv.png" alt="">';
									for (i = 0; i < 3; i++) {
										li = document.createElement('section');
										li.className = "oneadv";
										li.innerHTML = str;
										el.appendChild(li, el.childNodes[0]);
									}*/
									_this.getnewdata();
								}, 800);
						/*setTimeout(function() {
                            for(var i = 0; i <1; i++) {
                                $(".list-group").eq(mySwiper2.activeIndex).append(`<IndexOneadv></IndexOneadv>`);
                            }
                            $(".loadtip").html('上拉加载更多...');
                            mySwiper.update(); // 重新计算高度;
                        }, 800);*/
                    }
                    // 下拉刷新
                    if(mySwiper.translate >= 50) {
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
			localStorage.setItem('four','true');
		},
		updated:function(){

			if(localStorage.getItem('four')=="true"&&localStorage.getItem('four')!=null){
				$("footer").removeClass("footHide");
			}
		}
	}
</script>
<style scoped>
	.refreshtip {position: absolute;left: 0;width: 100%;text-align: center;color: #999;}
	.swiper-container{overflow: visible;color: #999;}
	.loadtip { display: block;width: 100%;text-align: center;color: #999;}
	.init-loading{color: #999;font: 0.4rem/1rem "";}
	.swiper-slide{height: auto;}
	.text-center{text-align: center;}
	.list-group-item{position: relative; display: block;margin-bottom: -1px;background: #f1f5f6;}
	.backgroundcolor{background: #f1f5f6!important;}
	html{background: #f1f5f6!important;}
	.swiper-scrollbar{background: #f1f5f6!important;}


</style>