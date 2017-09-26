<template>
    <div>
        <header>
        <div id="head">
            <router-link to="/index"><a ></a></router-link>
            <span>职业路径</span>
        </div>
     </header>
        <section id="bac"></section>
    </div>


</template>

<script type='text/ecmascript-6'>

    export default {

        mounted:function () {
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
        }
    }

</script>

<style scoped>
    header {
        color: #ffffff;
        height: 1.65rem;
        box-sizing: border-box;
        position: fixed;
        top: 0;
        width: 100%;
        z-index: 100; }
    header #head a {
        float: left;
        display: block;
        height: 1.65rem;
        width: 1.65rem;
        background: url("../../public/imgs/back.png") no-repeat center;
        background-size: 50% 50%; }
    header #head span {
        margin-left: 0.3rem;
        float: left;
        font: 700 0.38rem/1.65rem "";
        color: #ffffff;
        display: block; }

    #bac {
        width: 100%;
        height: 4.62rem;
        background: #000 url(../../public/imgs/tou.png) no-repeat center;
        background-size: 100% 100%; }

    .bac {
        top: -2.97rem;
        position: fixed;
        z-index: 99;
        background: #333949 !important; }
</style>