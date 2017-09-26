"use strict"
import IndexConstants from "../constants/IndexConstants.js";
export default{
    getIndex:function(cb){
        fetch(IndexConstants.IndexFetchURL).then((res)=>{
            res.json().then((data)=>{
                cb(data);
            })
        })
    }
}