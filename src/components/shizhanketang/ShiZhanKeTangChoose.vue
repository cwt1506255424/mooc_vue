<template>
    <section id="choose">
        <ul>
            <li class="nosame">全部</li>
            <li class="same">前端开发</li>
            <li class="same">后端开放</li>
            <li class="same">移动开发</li>
            <li class="same">数据库</li>
            <li class="same">云计算&大数据</li>
            <li class="same">运维&测试</li>
        </ul>
    </section>
</template>

<script type="text/ecmascript-6">
    export default{
        mounted: function () {
            $("#choose ul li").click(
                    function () {
                        $(this).css({
                            backgroundColor: "#cb3340",
                            color: "#fff"
                        }).siblings().css({backgroundColor: "#fff", color: "#000"});

                        var indexnum = $("#choose ul li").index(this);
                        if (indexnum == 0) {
                            $("#box .sec").show();
                        } else {
                            $("#box .sec").eq(indexnum - 1).show().siblings().hide();
                        }

                    }
            )
        }
    }
</script>

<style scoped>
    #choose{
        background:#fff;
        height: 4.2rem;
    }
    #choose ul {
        width:91%;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        padding: 0.45rem;}
    #choose ul li {
        text-align: center;
        color: #000;
        flex: 0 0 28%;
        box-sizing: border-box;
        font: 700 0.32rem/0.9rem "";
        height: 0.9rem;
        border: 1px solid #cbcbcb;
        border-radius: 0.45rem;
        margin: 0.1rem; }
    #choose ul .nosame {
        background-color: #cb3340;
        color: #ffffff; }
</style>