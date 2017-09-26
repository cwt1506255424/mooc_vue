<template>
    <section id="noname">
        <img class="logo" src="../../public/imgs/HTML_CSS2.png" alt="">
        <span class="title">HTML/CSS</span>
    </section>
</template>

<script type="text/ecmascript-6">
export default{
    mounted:function(){
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
    #noname {
        height: 3.75rem;
        background-color: #79bef5;
        color: #ffffff;
        text-align: center;
        z-index: 99; }
    #noname .logo {
        height: 0.9rem;
        width: 1.3rem;
        margin-top: 1rem; }
    #noname .title {
        position: absolute;
        font: 600 0.36rem/0.36rem "";
        left: 4.3rem;
        top: 2.8rem; }

    .nonamete {
        position: fixed;
        width: 100%;
        top: -2.05rem; }
</style>