<template>
        <div id="qianduankaifa" class="sec">
            <ul>
                <router-link to="/video"><ShiZhanKeTangBoxOneList :key="index" :pro="n" v-for="(n,index) in BoxList1"></ShiZhanKeTangBoxOneList></router-link>
            </ul>
        </div>
</template>

<script type="text/ecmascript-6">
    import ShiZhanKeTangBoxOneList from "./ShiZhanKeTangBoxOneList.vue"

    export default{
        props:["BoxList1"],
        components:{
            ShiZhanKeTangBoxOneList,

        }
    }
</script>

<style scoped>
    #box .sec {
        background-color: #ffffff;
        overflow: hidden; }
</style>