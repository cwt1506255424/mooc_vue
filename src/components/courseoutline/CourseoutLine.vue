<template>
    <div>
        <courseoutlineheader></courseoutlineheader>
        <courseoutlinenoname :titles="titles"></courseoutlinenoname>
        <courseoutlineshare></courseoutlineshare>
        <courseoutlineintroduce :introduces="introduces"></courseoutlineintroduce>
        <courseoutlineteacher :pro="teacher"></courseoutlineteacher>
        <courseoutlinenotice :notice="notice"></courseoutlinenotice>
        <courseoutlineproject :courseOutlineProject="courseOutlineProject"></courseoutlineproject>
        <courseoutlinestratlearn></courseoutlinestratlearn>
    </div>
</template>

<script type='text/ecmascript-6'>
    import CourseOutLineServices from  "../../services/CourseOutLineServices"
    import courseoutlineheader from "./courseoutlineheader.vue";
    import courseoutlinenoname from "./courseoutlinenoname.vue";
    import courseoutlineshare from "./courseoutlineshare.vue";
    import courseoutlineintroduce from "./courseoutlineintroduce.vue";
    import courseoutlineteacher from "./courseoutlineteacher.vue";
    import courseoutlinenotice from "./courseoutlinenotice.vue";
    import courseoutlineproject from "./courseoutlineproject.vue";
    import courseoutlinestratlearn from "./courseoutlinestratlearn.vue";
    export default {
        data(){
            return{
                titles:[],
                introduces:[],
                teacher:[],
                notice:[],
                courseOutlineProject:[]
            }
        },
        components:{
            courseoutlineheader,
            courseoutlinenoname,
            courseoutlineshare,
            courseoutlineintroduce,
            courseoutlineteacher,
            courseoutlinenotice,
            courseoutlineproject,
            courseoutlinestratlearn
        },
        created:function(){
            this.initialData();
        },
        methods:{
            initialData:function(){
                CourseOutLineServices.getCourseOutLinelist((data)=>{
                    this.titles = data.titles;
                    this.introduces = data.introduces;
                    this.teacher = data.teacher;
                    this.notice = data.notice;
                    this.courseOutlineProject = data.CourseOutlineProject;

                });
            }
        }
    }

</script>

<style scoped>

</style>