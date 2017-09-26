<template>
    <div id="houduankaifa" class="sec">
        <ul>
            <router-link to="/video"><ShiZhanKeTangBoxTwoList :key="index" :pro="n" v-for="(n,index) in BoxList2"></ShiZhanKeTangBoxTwoList></router-link>
        </ul>
    </div>
</template>

<script type="text/ecmascript-6">
    import ShiZhanKeTangBoxTwoList from "./ShiZhanKeTangBoxTwoList.vue"

    export default{
        props:["BoxList2"],
        components:{
            ShiZhanKeTangBoxTwoList,

        }
    }
</script>

<style scoped>

</style>