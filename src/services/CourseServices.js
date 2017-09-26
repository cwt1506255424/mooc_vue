"use strict"
import CourseConstants from "../constants/CourseConstants.js";
export default {
    getcourselist: function(cb){
        fetch(CourseConstants.CareerFetchURL).then((res)=>{
            res.json().then((data)=>{
                cb(data);
            })
        })
    }
}