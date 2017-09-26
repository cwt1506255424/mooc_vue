import Vue from "vue";
import VueRouter from "vue-router";
import Videopage from "../src/components/video/Videopage.vue"
import index from "../src/components/index/index.vue"
import course from "../src/components/course/course.vue"
import download from "../src/components/download/download.vue"
import mine from "../src/components/mine/mine.vue"
import Productlist from "../src/components/productlist/Productlist.vue"
import Yuanwen from "../src/components/yuanwen/Yuanwen.vue"
import ShiZhanKeTang from "../src/components/shizhanketang/ShiZhanKeTang.vue"
import CommenFooter from "../src/components/commonfooter/CommenFooter.vue"
import shopcarts from "../src/components/shopcarts/shopcarts.vue"
import Pay from "../src/components/pay/Pay.vue"
import shoujidenglu from "../src/components/shoujidenglu/shoujidenglu.vue"
import youxiang from "../src/components/youxiang/youxiang.vue"
import courseoutline from "../src/components/courseoutline/courseoutline.vue"
import career from "../src/components/career/career.vue"

Vue.use(VueRouter);

let router = new VueRouter({
  routes:[
    //{path:"/",redirect:"/index"},
    {path:"/index",component:index},
    {path:"/",component:index},
    {path:"/course",component:course},
    {path:"/download",component:download},
    {path:"/mine",component:mine},
    {path:"/Productlist",component:Productlist},
    {path:"/ShiZhanKeTang",component:ShiZhanKeTang},
    {path:"/shopcarts",component:shopcarts},
    {path:"/Pay",component:Pay},
    {path:"/Pay",component:Pay},
    {path:"/Yuanwen",component:Yuanwen},
    {path:"/video",component:Videopage},
    {path:"/shoujidenglu",component:shoujidenglu},
    {path:"/youxiang",component:youxiang},
    {path:"/courseoutline",component:courseoutline},
    {path:"/career",component:career},
  ]
})

export default router;
