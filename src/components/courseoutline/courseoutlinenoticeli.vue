<template>
    <div>
        <li>
            <h3>{{pro.userh3}}</h3>
            <p>{{pro.userp}}</p>
        </li>
    </div>
</template>

<script type='text/ecmascript-6'>
    export default {
        props:["pro"]
    }
</script>

<style scoped>
    #notice ul li h3 {
        font: 700 0.24rem/0.72rem "";
        color: #000; }
    #notice ul li p {
        padding-left: 0.72rem;
        font: 700 0.34rem/0.68rem "";
        color: #b6bcbc; }
</style>