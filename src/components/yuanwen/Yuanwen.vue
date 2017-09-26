<template>
    <div>
        <YuanWenHeader></YuanWenHeader>
        <YuanWenChoose></YuanWenChoose>
        <YuanwenBox :YuanwenLists="YuanwenLists"></YuanwenBox>
    </div>
</template>


<script type='text/ecmascript-6'>
    import YuanwenService from "../../services/YuanwenService"

    import YuanWenHeader from "./YuanwenHeader.vue";
    import YuanWenChoose from "./YuanwenChoose.vue";
    import YuanwenBox from "./YuanwenBox.vue";
    export default {
        data(){
            return{
                YuanwenLists:[]
			}
        },
        components:{
            YuanWenHeader,
            YuanWenChoose,
            YuanwenBox
        },
        created:function(){
            this.initialData();
        },
        methods:{
            initialData:function(){
                YuanwenService.getYuanwen((data)=>{
                    this.YuanwenLists=data;

                })
            }
        },
       mounted:function(){

       }

    }
</script>

<style scoped>
    .backgroundcolor{
        background-color: #f1f5f6;
    }
</style>