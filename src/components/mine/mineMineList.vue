<template>
    <li>
        <a href="#">
            <img :src="MineListli.img" alt="">
            <span>{{ MineListli.kecheng1 }}</span>
        </a>
    </li>
</template>

<script type="text/ecmascript-6">
    export default {
        props:["MineListli"],
    }
</script>

<style scoped>
    #mine ul li {
        flex: 25%; }
    #mine ul li a {
        display: block;
        text-align: center;
        padding: 0.7rem 0 0 0.3rem; }
    #mine ul li a img {
        width: 0.6rem;
        height: 0.6rem; }
    #mine ul li a span {
        display: block;
        font: 700 0.3rem/1.1rem ""; }
</style>