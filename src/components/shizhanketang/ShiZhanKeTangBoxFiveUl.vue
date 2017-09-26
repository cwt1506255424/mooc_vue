<template>
    <div id="yunjisuan" class="sec">
        <ul>
            <router-link to="/video"><ShiZhanKeTangBoxFiveList :key="index" :pro="n" v-for="(n,index) in BoxList5"></ShiZhanKeTangBoxFiveList></router-link>
        </ul>
    </div>
</template>

<script type="text/ecmascript-6">
    import ShiZhanKeTangBoxFiveList from "./ShiZhanKeTangBoxFiveList.vue"
    export default{
        props:["BoxList5"],
        components:{
            ShiZhanKeTangBoxFiveList
        }
    }

</script>

<style scoped>

</style>