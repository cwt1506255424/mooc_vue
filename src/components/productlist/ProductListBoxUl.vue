<template>
    <ul>
        <ProductListBoxList :key="index" :pro="n" v-for="(n,index) in BoxList"></ProductListBoxList>
    </ul>

</template>

<script type="text/ecmascript-6">


    import ProductListBoxList from "./ProductListBoxList.vue"
    export default{
        props:["BoxList"],
        components:{
            ProductListBoxList

        }
    }
</script>

<style scoped>

    #box .rongqi .baozhuang .kuai ul li a {
        display: block;
        padding: 0.48rem;
        height: 2.8rem;
        border-bottom: 1px solid #dbdcde; }
    #box .rongqi .baozhuang .kuai ul li a img {
        float: left;
        display: block;
        height: 2.8rem;
        width: 2.7rem; }
    #box .rongqi .baozhuang .kuai ul li a .zhiyeright {
        height: 2.8rem;
        width: 6.76rem;
        padding-right: 0.25rem;
        float: right;
        position: relative; }
    #box .rongqi .baozhuang .kuai ul li a .zhiyeright h6 {
        font: 600 0.34rem/0.34rem "";
        margin-top: 0.23rem; }
    #box .rongqi .baozhuang .kuai ul li a .zhiyeright p {
        margin-top: 0.2rem;
        font: 600 0.22rem/0.52rem "";
        color: #b8bcbd;
        overflow: hidden;height:1rem;  }
    #box .rongqi .baozhuang .kuai ul li a .zhiyeright div {
        font: 600 0.22rem/0.24rem "";
        position: absolute;
        bottom: 0.25rem; }
    #box .rongqi .baozhuang .kuai ul li a .zhiyeright div span {
        color: #74797c; }
    #box .rongqi .baozhuang .kuai ul li a .zhiyeright div b {
        color: #ff2b53;
        font-weight: 800; }
</style>