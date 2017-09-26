<template>
    <li>
        <a class="te">
            <img :src="NightSettingListli.img" alt="">
            <span>{{ NightSettingListli.setting }}</span>
            <div class="bac">
                <i></i>
            </div>
        </a>
    </li>
</template>

<script type="text/ecmascript-6">
    export default {
        props:["NightSettingListli"],
        mounted:function () {
            $(".bac").toggle(
                    function () {
                        $(".bac i").css("left","0.4rem");
                        $("body").css("background","#0f0f0f");
                        $(".pattern").css("background","#191919");
                        $(".bac i").css("background","#f92c4d");
                        $(".bac").css("background","#5d2028");
                        $("head").append('<link class="changeBg" rel="stylesheet" href="./src/public/css/newBg.css"/>')
                        localStorage.setItem('bg','0');
                    },
                    function () {
                        $(".bac i").css("left","-0.1rem");
                        $("body").css("background","");
                        $(".pattern").css("background","");
                        $("head link").remove('.changeBg');
                        $(".bac i").css("background","#ececec");
                        $(".bac").css("background","#b2b2b2");
                        localStorage.setItem('bg','1');
                    }
            )
        },
        created:function(){
            if(localStorage.getItem('bg')==0&&localStorage.getItem('bg')!=null){
                $(".bac i").css("left","0.4rem");
                $(".bac i").css("background","#f92c4d");
                $(".bac").css("background","#5d2028");
            }
            //白天
            else if(localStorage.getItem('bg')==1&&localStorage.getItem('bg')!=null){
                $(".bac i").css("left","-0.1rem");
            }
        }
    }
</script>

<style scoped>
    #night_setting {
        background-color: #ffffff;
        margin-top: 0.25rem;
        margin-bottom: 1.65rem; }
    #night_setting ul li a {
        display: block;
        height: 1.5rem;
        box-sizing: border-box;
        padding: 0.5rem 0.66rem;
        background: url("../../public/imgs/triangle.png") no-repeat 95% 50%;
        background-size: 5% 45%; }
    #night_setting ul li a img {
        float: left;
        height: 0.48rem;
        width: 0.48rem; }
    #night_setting ul li a span {
        float: left;
        display: inline-block;
        margin-left: 0.7rem;
        font: 700 0.34rem/0.48rem ""; }
    #night_setting ul li .te {
        background: none; }
    #night_setting ul li .te .bac {
        margin-left: 6rem;
        display: inline-block;
        border-radius: 0.2rem;
        float: left;
        height: 0.4rem;
        width: 0.8rem;
        background-color: #b2b2b2;
        position: relative; }
    #night_setting ul li .te .bac i {
        background-color: #ececec;
        display: block;
        height: 0.6rem;
        width: 0.6rem;
        position: absolute;
        border-radius: 50%;
        left: -0.1rem;
        top: -0.1rem; }
    #night_setting ul li:nth-child(2) .te .bac{
        display: none;
    }
</style>