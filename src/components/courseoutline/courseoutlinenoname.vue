<template>
    <div>
        <section class="noname">
            <span>{{titles.title}}</span>
            <i class="collect"></i>
            <i class="sharebtn"></i>
        </section>
    </div>
</template>

<script type='text/ecmascript-6'>

        export default {
            props:["titles"],
            components:{

            },
             mounted:function () {
                 $(function () {
                     $(".sharebtn").click(
                         function () {
                             var  srcheight=($(window).height())/100;
                             var topheight=($(window).height())/100-1.3;
                             console.log(srcheight);
                             $("#share").show();
                             $("body").css({overflow:"hidden",position:"fixed"});
                         }
                     );
                     $(".cancel").click(
                         function () {
                             $("#share").hide();
                             $("body").css({position:"relative"});
                         }
                     );
                     $(".collect").toggle(
                         function () {
                             $(".collect").css({backgroundImage:"url('./imgs/star_selected.png')"});
                         },
                         function () {
                             $(".collect").css({backgroundImage:"url('./imgs/star_normal.png')"});
                         }
                     );
                     $(window).scroll(function(){
                         let header=$("#head").innerHeight();
                         let noname=$(".noname").innerHeight();
                         let nonametop=$(".noname").scrollTop();
                         //console.log(nonametop)
                         let cha=noname-header;
                         let obj_height = document.documentElement.scrollTop || document.body.scrollTop;
                         if(obj_height>=cha){
                             $(".noname").addClass("namameeee");
                             $(".collect").fadeOut("fast");
                             $(".sharebtn").fadeOut("fast");
                         }else if(obj_height="0px"){
                             $(".noname").removeClass("namameeee");
                             $(".collect").fadeIn("fast");
                             $(".sharebtn").fadeIn("fast");
                         }
                     })
                 });

             }
        }

</script>

<style scoped>
    .noname {
        height: 3.84rem;
        background-color: #ff2d50;
        position: relative; }
    .noname span {
        font:900 0.44rem/1.68rem "";
        color: #ffffff;
        display: block;
        position: absolute;
        bottom: 0rem;
        left: 1.2rem; }
    .noname i {
        height: 1.44rem;
        width: 1.44rem;
        display: block;
        position: absolute;
        bottom: -0.7rem;
        border-radius: 50%;
        box-shadow: 0 0 3px #cbcbcb; }
    .noname .collect {
        background: url("../../public/imgs/star_normal.png") no-repeat center;
        background-color: #fff;
        background-size: 100%;
        right: 2.3rem; }
    .noname .sharebtn {
        background: url("../../public/imgs/circle_share.png") no-repeat center;
        background-color: #c0c0c0;
        background-size: 100%;
        right: 0.35rem; }

    .namameeee {
        width: 100%;
        position: fixed;
        top: -2.16rem; }
</style>