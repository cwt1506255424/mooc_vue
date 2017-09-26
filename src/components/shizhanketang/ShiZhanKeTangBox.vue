<template>

    <section id="box">
        <ShiZhanKeTangBoxOneUl :BoxList1="BoxList1"></ShiZhanKeTangBoxOneUl>
        <ShiZhanKeTangBoxTwoUl :BoxList2="BoxList2"></ShiZhanKeTangBoxTwoUl>
        <ShiZhanKeTangBoxThreeUl :BoxList3="BoxList3"></ShiZhanKeTangBoxThreeUl>
        <ShiZhanKeTangBoxFourUl :BoxList4="BoxList4"></ShiZhanKeTangBoxFourUl>
        <ShiZhanKeTangBoxFiveUl :BoxList5="BoxList5"></ShiZhanKeTangBoxFiveUl>
        <ShiZhanKeTangBoxSixUl :BoxList6="BoxList6"></ShiZhanKeTangBoxSixUl>
    </section>
</template>

<script type="text/ecmascript-6">
    import ShiZhanKeTangBoxOneUl from "./ShiZhanKeTangBoxOneUl.vue"
    import ShiZhanKeTangBoxTwoUl from "./ShiZhanKeTangBoxTwoUl.vue"
    import ShiZhanKeTangBoxThreeUl from "./ShiZhanKeTangBoxThreeUl.vue"
    import ShiZhanKeTangBoxFourUl from "./ShiZhanKeTangBoxFourUl.vue"
    import ShiZhanKeTangBoxFiveUl from "./ShiZhanKeTangBoxFiveUl.vue"
    import ShiZhanKeTangBoxSixUl from "./ShiZhanKeTangBoxSixUl.vue"
    import ShiZhanKeTangService from "../../services/ShiZhanKeTangService"
    export default{
        props:["BoxList1","BoxList2","BoxList3","BoxList4","BoxList5","BoxList6"],
        components:{
            ShiZhanKeTangBoxOneUl,
            ShiZhanKeTangBoxTwoUl,
            ShiZhanKeTangBoxThreeUl,
            ShiZhanKeTangBoxFourUl,
            ShiZhanKeTangBoxFiveUl,
            ShiZhanKeTangBoxSixUl
        }
    }
</script>

<style scoped>
    #box .sec {
        background-color: #ffffff;
        overflow: hidden; }
</style>