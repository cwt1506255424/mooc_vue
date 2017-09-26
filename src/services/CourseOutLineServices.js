"use strict"
import CourseOutLineConstants from "../constants/CourseOutLineConstants.js";
export default {
    getCourseOutLinelist: function(cb){
        fetch(CourseOutLineConstants.CourseoutlineFetchURL).then((res)=>{
            res.json().then((data)=>{
                cb(data);
            })
        })
    }
}