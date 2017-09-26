<template>
    <div id="shujuku" class="sec">
        <ul>
            <router-link to="/video"><ShiZhanKeTangBoxFourList :key="index" :pro="n" v-for="(n,index) in BoxList4"></ShiZhanKeTangBoxFourList></router-link>
        </ul>
    </div>
</template>

<script type="text/ecmascript-6">
    import ShiZhanKeTangBoxFourList from "./ShiZhanKeTangBoxFourList.vue"
    export default{
        props:["BoxList4"],
        components:{
            ShiZhanKeTangBoxFourList
        }
    }
</script>

<style scoped>

</style>