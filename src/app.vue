<template>
   <div>
       <keep-alive><router-view></router-view></keep-alive>
    </div>
</template>


<script type='text/ecmascript-6'>
    import  "./public/js/common.js";
    import "./public/js/jquery-1.8.3.js";
	import "./public/js/isYe"
	import "../node_modules/swiper/dist/js/swiper.js";
    import "./public/css/swiper.css";
    import "./public/css/public.css";


    import Index from "./components/index/Index.vue";
    import Videopage from "./components/video/Videopage.vue";
    import Yuanwen from "./components/yuanwen/Yuanwen.vue";
	import shopcarts from "./components/shopcarts/shopcarts.vue";
	import mine from "./components/mine/mine.vue";
    import CommenFooter from "./components/commonfooter/CommenFooter.vue";


    import career from "./components/career/career.vue";
    import course from "./components/course/course.vue";
    import shoujidenglu from "./components/shoujidenglu/shoujidenglu.vue";
    import youxiang from "./components/youxiang/youxiang.vue";

    import Pay from "./components/pay/Pay.vue";
    import ProductList from "./components/productlist/ProductList.vue";
    import ShiZhanKeTang from "./components/shizhanketang/ShiZhanKeTang.vue";
    import Download from "./components/download/Download.vue";
    import courseoutline from "./components/courseoutline/courseoutline.vue";
    export default{
        components:{
            Index,
            Videopage,
            Yuanwen,
			shopcarts,
			mine,
            career,
            course,
			shoujidenglu,
            youxiang,
            Pay,
            ProductList,
            ShiZhanKeTang,
            Download,
            courseoutline,
            CommenFooter
        }
    }
</script>

<style scoped>

</style>