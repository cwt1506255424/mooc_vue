<template>
    <li>
        <h3>{{pro.title}}</h3>
        <p>{{pro.content}}</p>
    </li>
</template>


<script type='text/ecmascript-6'>
    export default {
		props:["pro"]
    }
</script>

<style scoped>

    #box .rongqi .baozhuang #xiangqing #notice ul li h3 {
        font: 700 0.24rem/0.72rem "";
        color: #000; }
    #box .rongqi .baozhuang #xiangqing #notice ul li p {
        padding-left: 0.72rem;
        font: 700 0.34rem/0.68rem "";
        color: #b6bcbc; }
</style>