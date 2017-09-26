<template>
    <div>
        <download-header></download-header>
        <download-memory></download-memory>
        <download-memory-hide></download-memory-hide>
        <download-nodownload></download-nodownload>
        <download-kechengtuijian :kechengtuijian="kechengtuijian"></download-kechengtuijian>
        <CommenFooter></CommenFooter>
    </div>
</template>
<script type="text/ecmascript-6">
    import DownloadService from "../../services/DownloadService";
    import DownloadHeader from "./DownloadHeader.vue";
    import DownloadMemory from "./DownloadMemory.vue";
    import DownloadMemoryHide from "./DownloadMemoryHide.vue";
    import DownloadNodownload from "./DownloadNodownload.vue";
    import DownloadKechengtuijian from "./DownloadKechengtuijian.vue";
    import DownloadKechengtuijianList from "./DownloadKechengtuijianList.vue";
    import  CommenFooter from "../commonfooter/CommenFooter.vue";

    import "../../public/js/jquery-1.8.3.min.js";
    export default{
        data(){
            return{
                kechengtuijian:[]
            }
        },
        components:{
            DownloadHeader,
            DownloadMemory,
            DownloadMemoryHide,
            DownloadNodownload,
            DownloadKechengtuijianList,
            DownloadKechengtuijian,
            CommenFooter
        },
        created:function(){
            this.initialData();
        },
        methods:{
            initialData:function(){
                DownloadService.getDownloadList((data)=> {
                    this.kechengtuijian = data.Kechengtuijian;
                });
            }
        }
    }
</script>
<style scoped>

</style>