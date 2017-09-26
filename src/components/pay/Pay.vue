<template>
    <div>
        <pay-header></pay-header>
        <pay-will-buy :Head="Head"></pay-will-buy>
        <pay-pay-way></pay-pay-way>
        <pay-sale></pay-sale>
        <pay-calculate></pay-calculate>
        <pay-rules></pay-rules>
        <pay-foot></pay-foot>

    </div>
</template>

<script type='text/ecmascript-6'>
    	import PayHeader     from "./PayHeader.vue"
    	import PayWillBuy    from "./PayWillBuy.vue"
    	import PayPayWay     from "./PayPayWay.vue"
    	import PaySale       from "./PaySale.vue"
    	import PayCalculate  from "./PayCalculate.vue"
    	import PayRules      from "./PayRules.vue"
    	import PayFoot       from "./PayFoot.vue"
        import PatService    from "../../services/ProService"
        export default{
            components:{
                PayHeader,
                PayWillBuy,
                PayPayWay,
                PaySale,
                PayCalculate,
                PayRules,
                PayFoot,
                PatService
            },
            data(){
                return{
                    Head:[]
                }
            },

            created:function(){
                this.initialData();
            },
            methods:{
                initialData:function(){
                    PatService.getPay((data)=>{
                        this.Head=data.Head;
                    })
                }
            },
            mounted:function(){
                $("#nocheck").toggle(
                        function () {
                            $(".num").html("￥"+$("#money").html());
                        },
                        function () {
                            $(".num").html("￥0.00");
                        }
                );

            }

        }
</script>

<style scoped>
    body{background-color: #f1f5f6;}
</style>