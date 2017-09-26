<template>
    <div>
        <section id="teacher">
            <a href="#">
                <img :src="pro.userimg" alt="">
                <div class="teach_r">
                    <h4>{{pro.userh4}}</h4>
                    <span>{{pro.userspan}}</span>
                </div>
            </a>
        </section>
    </div>
</template>

<script type='text/ecmascript-6'>
    export default {
        props:["pro"],
        components:{

        },
        mounted:function () {

        }
    }

</script>

<style scoped>
    #teacher {
        border-bottom: 1px solid #cbcbcb; }
    #teacher a {
        display: block;
        height: 1.2rem;
        padding: 0.72rem;
        background: url("../../public/imgs/triangle.png") no-repeat 95% 50%;
        background-size: 5% 25%; }
    #teacher a img {
        width: 1.2rem;
        height: 1.2rem;
        float: left;
        border-radius: 50%; }
    #teacher a .teach_r {
        float: left;
        font: 700 0.28rem/0.6rem "";
        margin-left: 0.24rem; }
    #teacher a .teach_r h4 {
        color: #000000; }
    #teacher a .teach_r span {
        color: #6d747c; }
</style>