<template>
    <div>
        <product-list-head></product-list-head>
        <product-list-noname></product-list-noname>
        <product-list-choose></product-list-choose>
        <product-list-box :BoxList="BoxList"></product-list-box>
    </div>
</template>

<script type="text/ecmascript-6">
    import ProductListService from "../../services/ProductListService"
    import ProductListHead  from "./ProductListHead.vue"
    import ProductListNoname from "./ProductListNoname.vue"
    import ProductListChoose  from "./ProductListChoose.vue"
    import ProductListBox  from "./ProductListBox.vue"

    export default{
        data(){
            return{
               BoxList:[]
            }
        },
        components:{
            ProductListHead,
            ProductListNoname,
            ProductListChoose,
            ProductListBox
        },
        created:function(){
            this.initialData();
        },
        methods:{
            initialData:function(){
                ProductListService.getProductListList((data)=>{
                    this.BoxList=data;
                });
            }
        },
        mounted:function(){
            var mySwiper =new Swiper ('.rongqi', {
                slidesPerView: 'auto',
                paginationClickable: true,
                observer:true,
                observeParents:true,
                autoHeight:true,
                onSlideChangeStart: function(swiper){
                    var childli=$('.test ul li');
                    for (var i=0;i<childli.length;i++){
                        childli[i].setAttribute("class", " ");
                    }
                    childli[swiper.activeIndex].setAttribute("class", "bor");
                }
            })
            $('.test ul li').on('click',function(e){
                e.preventDefault();
                mySwiper.slideTo($(this).index())
            });
            //顶部悬浮
            $(window).scroll(function(){
                let header=$("#head").height();
                let noname=$("#noname").height();
                let choose=$("#choose").height();
                let cha=noname-choose;
                let obj_height = document.documentElement.scrollTop || document.body.scrollTop;
                if(obj_height>=cha){
                    $("#noname").addClass("nonamete");
                    $("#choose").addClass("choosete");
                }else if(obj_height="0px"){
                    $("#noname").removeClass("nonamete");
                    $("#choose").removeClass("choosete");
                }
            });
        }
  }
</script>

<style scoped>

</style>