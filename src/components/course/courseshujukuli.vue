<template>

            <li>
                <a href="#">
                    <img :src="pro.userimgd" alt="">
                    <span>{{pro.userspand}}</span>
                </a>
            </li>

</template>

<script type='text/ecmascript-6'>
    export default {
        props:["pro"]
    }

</script>

<style scoped>

    #shujuku ul li {
        width: 3.6rem;
        box-sizing: border-box; }
    #shujuku ul li a {
        display: block;
        width: 3.6rem;
        height: 2rem;
        text-align: center;
        margin: 0.3rem 0; }
    #shujuku ul li a img {
        height: 1.08rem;
        width: 1.08rem; }
    #shujuku ul li a span {
        margin-top: 0.3rem;
        text-align: center;
        display: block;
        font: 700 0.24rem/0.24rem "";
        color: #282f35; }
</style>












