<template>
<div>
    <courseheader></courseheader>
    <courseqianduan :Patterns1="Patterns1"></courseqianduan>
    <coursehouduan :Patterns2="Patterns2"></coursehouduan>
    <courseyidong :Patterns3="Patterns3"></courseyidong>
    <courseshujuku :Patterns4="Patterns4"></courseshujuku>
    <coursecloud :Patterns5="Patterns5"></coursecloud>
    <coursetest :Patterns6="Patterns6"></coursetest>
    <course-u-idesign :Patterns7="Patterns7"></course-u-idesign>
    <CommenFooter></CommenFooter>
</div>
</template>

<script type='text/ecmascript-6'>
    import CourseServices from  "../../services/CourseServices"
    import courseheader from "./courseheader.vue";
    import courseqianduan from "./courseqianduan.vue";
    import coursehouduan from "./coursehouduan.vue";
    import courseyidong from "./courseyidong.vue";
    import courseshujuku from "./courseshujuku.vue";
    import coursecloud from "./coursecloud.vue";
    import coursetest from "./coursetest.vue";
    import courseUIdesign from "./courseUIdesign.vue";
    import  CommenFooter from "../commonfooter/CommenFooter.vue";

    export default {
        data(){
            return{
                Patterns1:[],
                Patterns2:[],
                Patterns3:[],
                Patterns4:[],
                Patterns5:[],
                Patterns6:[],
                Patterns7:[],
            }
        },
        components:{
            courseheader,
            courseqianduan,
            coursehouduan,
            courseyidong,
            courseshujuku,
            coursecloud,
            coursetest,
            courseUIdesign,
            CommenFooter
        },
        created:function(){
            this.initialData();
        },
        methods:{
            initialData:function(){
                CourseServices.getcourselist((data)=>{
                    this.Patterns1 = data.Patterns1;
                    this.Patterns2 = data.Patterns2;
                    this.Patterns3 = data.Patterns3;
                    this.Patterns4 = data.Patterns4;
                    this.Patterns5 = data.Patterns5;
                    this.Patterns6 = data.Patterns6;
                    this.Patterns7 = data.Patterns7;
                });
            }
        }
    }
</script>

<style scoped>

</style>