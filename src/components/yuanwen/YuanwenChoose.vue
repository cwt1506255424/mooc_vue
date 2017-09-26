<template>
    <section id="choose" class="pattern">
        <ul>
            <li class="red">
                <span>推荐</span>
            </li>
            <li>
                <span>最新</span>
            </li>
            <li>
                <span>等待回答</span>
            </li>
        </ul>
    </section>
</template>


<script type='text/ecmascript-6'>
    export default {

    }
</script>

<style scoped>
    #choose {
        z-index: 100;
        position: fixed;
        top: 0;
        width: 100%;
        background-color: #ffffff;
        margin-top: 1.65rem;
        box-shadow: 0 0 0.3rem #a1a1a1; }
    #choose ul {
        display: flex;
        justify-content: space-between; }
    #choose ul li {
        flex: 1;
        text-align: center;
        font: 700 0.32rem/1.44rem "";
        color: #73787b; }
    #choose ul .red {
        color: #cb3340;
        border-bottom: 0.03rem solid #cb3340; }
</style>