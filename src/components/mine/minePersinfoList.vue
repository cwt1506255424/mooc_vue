<template>
    <li class="te">
        <span>{{PersinfoListli.classify}}</span>
        <b>{{PersinfoListli.num}}</b>
    </li>
</template>

<script type="text/ecmascript-6">
    export default {
        props:["PersinfoListli"],
    }
</script>

<style scoped>
    #persinfo .persinfo_b ul li {
        border-right: 1px solid #6c757a;
        text-align: center;
        padding: 0 1rem;
        box-sizing: border-box;
        flex: 1; }
    #persinfo .persinfo_b ul li span {
        font: 900 0.4rem/0.4rem "";
        color: #666; }
    #persinfo .persinfo_b ul li b {
        font: 900 0.4rem/0.4rem ""; }
    #persinfo .persinfo_b ul .te {
        border: none; }
</style>