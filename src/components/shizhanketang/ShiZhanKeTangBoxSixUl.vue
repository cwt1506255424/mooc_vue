<template>
    <div id="ceshi" class="sec">
        <ul>
            <router-link to="/video"><ShiZhanKeTangBoxSixList :key="index" :pro="n" v-for="(n,index) in BoxList6"></ShiZhanKeTangBoxSixList></router-link>
        </ul>
    </div>
</template>

<script type="text/ecmascript-6">
    import ShiZhanKeTangBoxSixList from "./ShiZhanKeTangBoxSixList.vue"

    export default{
        props:["BoxList6"],
        components:{
            ShiZhanKeTangBoxSixList,

        }
    }
</script>

<style scoped>

</style>