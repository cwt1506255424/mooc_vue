<template>
    <header  id="head">
        <router-link to="/course">
            <img src="../../public/imgs/image_selector_btn_back.png" alt="">
        </router-link>
        <span class="news">最新</span>
        <span class="hot">最热</span>
    </header>
</template>

<script type="text/ecmascript-6">
    export default{
        mounted: function () {
            $(".news").click(
                    function () {
                        $(".news").css({
                            backgroundImage: "url('./src/public/imgs/jiaohu.png')",
                            backgroundPosition: "left",
                            backgroundRepeat: "no-repeat",
                            backgroundSize: "25% 100%"
                        }),
                         $(".hot").css("background", "none")
                    }
            );
            $(".hot").click(
                    function () {
                        $(".hot").css({
                            backgroundImage: "url('./src/public/imgs/jiaohu.png')",
                            backgroundPosition: "left",
                            backgroundRepeat: "no-repeat",
                            backgroundSize: "25% 100%"
                        }),
                        $(".news").css("background", "none")
                    }
            );
			//顶部悬浮
			$(window).scroll(function(){
				let header=$("#head").height();
				let noname=$("#noname").height();
				let choose=$("#choose").height();
				let cha=noname-choose;
				let obj_height = document.documentElement.scrollTop || document.body.scrollTop;
				if(obj_height>=cha){
					$("#noname").addClass("nonamete");
					$("#choose").addClass("choosete");
				}else if(obj_height="0px"){
					$("#noname").removeClass("nonamete");
					$("#choose").removeClass("choosete");
				}
			});
        }
    }
</script>

<style scoped>
    #head {
        color: #ffffff;
        height: 1.68rem;
        box-sizing: border-box;
        padding: 0.6rem  0.4rem;
        position: fixed;
        top: 0;
        width: 100%;
        z-index: 100; }
    #head a {
        display: block;
        float: left; }
    #head a img {
        height: 0.48rem;
        width: 0.48rem; }
    #head span {
        color: #ffffff;
        float: left;
        background: url("../../public/imgs/jiaohu.png") no-repeat left;
        background-size: 25% 100%;
        font: 700 0.48rem/0.48rem "";
        padding-left: 0.5rem; }
    #head .news {
        margin-left: 6.2rem; }
    #head .hot {
        margin-left: 0.3rem;
        background: none; }
</style>