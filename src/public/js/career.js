$(function () {
    $(window).scroll(function(){
        var header=$("#head").height();//职业路径
        var bac=$("#bac").innerHeight();//banne图
        var nonametop=$(".noname").scrollTop();

        var cha=bac-header;
        console.log(cha)
        var obj_height = document.documentElement.scrollTop || document.body.scrollTop;
        if(obj_height>50){
            $("#bac").addClass("bac");
        }else if(obj_height="60"){
            $("#bac").removeClass("bac");
        }
    })
});

//下面是touch代码
//
// touch.on("body","drag",function (ev) {
//     var handY=ev.distanceY/100;
//     // console.log(handY)
//     if (handY<0){
//     }else if(handY<0.5){
//         var useimg=$(".userimg");
//         // useimg[0].style.width=useimg[0].style.width+handY+'px';
//         usimgSC=handY+1;
//         useimg[0].style.WebkitTransform='scale('+usimgSC+','+usimgSC+')';
//         var mine_setting =$("#mine_setting");
//         var mine_settingY=parseInt(mine_setting.css("top"));
//
//         // var hhhh=parseInt($("#mine_t").height())
//         // console.log(hhhh);
//         // $("#mine_t").css("height",hhhh+(handY*5));
//
//         $("#mine_setting").css("top",mine_settingY+(handY*5))
//         // console.log(mine_settingY+(handY*5));
//     }else if(handY>0.5){
//         window.location.href="report.html"
//     }
// })
//
























// $(function () {
//     $(".news").click(
//         function () {
//             $(".news").css({backgroundImage:"url('./imgs/jiaohu.png')",
//                             backgroundPosition:"left",
//                             backgroundRepeat:"no-repeat",
//                             backgroundSize:"25% 100%"}),
//             $(".hot").css("background","none")
//         }
//     );
//     $(".hot").click(
//         function () {
//             $(".hot").css({backgroundImage:"url('./imgs/jiaohu.png')",
//             backgroundPosition:"left",
//             backgroundRepeat:"no-repeat",
//             backgroundSize:"25% 100%"}),
//             $(".news").css("background","none")
//         }
//     );
//     var mySwiper =new Swiper ('.rongqi', {
//         slidesPerView: 'auto',
//         paginationClickable: true,
//         observer:true,
//         observeParents:true,
//         autoHeight:true,
//         onSlideChangeStart: function(swiper){
//             var childli=$('.test ul li');
//             for (var i=0;i<childli.length;i++){
//                 childli[i].setAttribute("class", " ");
//             }
//             childli[swiper.activeIndex].setAttribute("class", "bor");
//         }
//     })
//     $('.test ul li').on('click',function(e){
//         e.preventDefault();
//         mySwiper.slideTo($(this).index())
//     })
// });
//
//     //顶部悬浮
//     $(window).scroll(function(){
//         let header=$("#head").height();
//
//         let noname=$("#noname").height();
//
//         let choose=$("#choose").height();
//         let cha=noname-choose;
//         let obj_height = document.documentElement.scrollTop || document.body.scrollTop;
//         if(obj_height>=cha){
//             $("#noname").addClass("nonamete");
//             $("#choose").addClass("choosete");
//         }else if(obj_height="0px"){
//                 $("#noname").removeClass("nonamete");
//                 $("#choose").removeClass("choosete");
//         }
//     })
//
//




