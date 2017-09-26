<template>
    <div>
        <Shi-zhan-ke-tang-head></Shi-zhan-ke-tang-head>
        <Shi-zhan-ke-tang-img></Shi-zhan-ke-tang-img>
        <Shi-zhan-ke-tang-choose></Shi-zhan-ke-tang-choose>
        <Shi-zhan-ke-tang-box :BoxList1="BoxList1" :BoxList2="BoxList2" :BoxList3="BoxList3" :BoxList4="BoxList4" :BoxList5="BoxList5" :BoxList6="BoxList6"></Shi-zhan-ke-tang-box>
    </div>
</template>

<script type="text/ecmascript-6">
    import ShiZhanKeTangHead     from "./ShiZhanKeTangHead.vue"
    import ShiZhanKeTangImg   from "./ShiZhanKeTangImg.vue"
    import ShiZhanKeTangChoose    from "./ShiZhanKeTangChoose.vue"
    import ShiZhanKeTangBox      from "./ShiZhanKeTangBox.vue"
    import ShiZhanKeTangService from "../../services/ShiZhanKeTangService"
    export default{
        data(){
            return{
                BoxList1:[],
                BoxList2:[],
                BoxList3:[],
                BoxList4:[],
                BoxList5:[],
                BoxList6:[]
            }
        },
        components:{
            ShiZhanKeTangHead,
            ShiZhanKeTangImg,
            ShiZhanKeTangChoose,
            ShiZhanKeTangBox
        },
        created:function(){
            this.initialData();
        },
        methods:{
            initialData:function(){
                ShiZhanKeTangService.getShiZhanKeTang((data)=>{
                    this.BoxList1=data.BoxList1;
                    this.BoxList2=data.BoxList2;
                    this.BoxList3=data.BoxList3;
                    this.BoxList4=data.BoxList4;
                    this.BoxList5=data.BoxList5;
                    this.BoxList6=data.BoxList6;
                });
            }
        }
 }

</script>

<style scoped>
    body {
        background-color: #ffffff; }
</style>