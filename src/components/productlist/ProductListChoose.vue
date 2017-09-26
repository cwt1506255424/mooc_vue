<template>
    <section id="choose">
        <div class="test">
            <ul>
                <li>全部</li>
                <li>基础</li>
                <li>案例</li>
            </ul>
        </div>
    </section>
</template>

<script type="text/ecmascript-6">
    export default{
        mounted: function () {
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

    .choosete {
        position: fixed;
        z-index: 99;
        top: 1.68rem; }

    #choose {
        width: 100%;
        height: 1.68rem;
        background-color: #79bef5; }
    #choose ul {
        display: flex;
        width: 100%;
        display: flex;
        justify-content: space-between; }
    #choose ul li {
        flex: 1;
        text-align: center;
        color: #ffffff;
        font: 700 0.4rem/1.6rem ""; }
    #choose ul .bor {
        border-bottom: 0.3rem solid #ffffff; }

</style>