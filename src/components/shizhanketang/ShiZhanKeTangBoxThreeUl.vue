<template>
    <div id="yidomgkaifa" class="sec">
        <ul>
            <router-link to="/video"><ShiZhanKeTangBoxThreeList :key="index" :pro="n" v-for="(n,index) in BoxList3"></ShiZhanKeTangBoxThreeList></router-link>
        </ul>
    </div>
</template>

<script type="text/ecmascript-6">
    import ShiZhanKeTangBoxThreeList from "./ShiZhanKeTangBoxThreeList.vue"

    export default{
        props:["BoxList3"],
        components:{
            ShiZhanKeTangBoxThreeList,

        }
    }
</script>

<style scoped>

</style>