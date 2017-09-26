<template>
    <div>
        <mine-head></mine-head>
        <mine-persinfo :PersinfoList="PersinfoList"></mine-persinfo>
        <mine-mine :MineList="MineList"></mine-mine>
        <mine-history :HistoryPathClassList="HistoryPathClassList"></mine-history>
        <mine-order :OrderShopcartEasyBuyList="OrderShopcartEasyBuyList"></mine-order>
        <mine-night :NightSettingList="NightSettingList"></mine-night>
        <CommenFooter></CommenFooter>
    </div>
</template>

<script type="text/ecmascript-6">
    import  mineServices from "../../services/mineServices"
    import mineHead from "./mineHead.vue"
    import minePersinfo from "./minePersinfo.vue"

    import  mineMine from "./mineMine.vue"
    import  mineHistory from "./mineHistory.vue"
    import  mineOrder from "./mineOrder.vue"
    import  mineNight from "./mineNight.vue"
    import  CommenFooter from "../commonfooter/CommenFooter.vue";

    export default {
        data(){
            return{
                PersinfoList:[],
                MineList:[],
                HistoryPathClassList:[],
                OrderShopcartEasyBuyList:[],
                NightSettingList:[]
            }

        },
        components:{
            mineHead,
            minePersinfo,
            mineMine,
            mineHistory,
            mineOrder,
            mineNight,
            CommenFooter
        },
        created:function(){
            this.initialData();
        },
        methods:{
            initialData:function(){
                mineServices.getmineList((data)=>{
                    this.PersinfoList = data.PersinfoList;
                    this.MineList = data.MineList;
                    this.HistoryPathClassList = data.HistoryPathClassList;
                    this.OrderShopcartEasyBuyList = data.OrderShopcartEasyBuyList;
                    this.NightSettingList = data.NightSettingList;
                });
            }
        }
    }
</script>

<style scoped>

</style>