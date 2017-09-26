"use strict"
import YuanwenConstants from "../constants/YuanwenConstants.js";
export default{
    getYuanwen:function(cb){
        fetch(YuanwenConstants.YuanwenFetchURL).then((res)=>{
            res.json().then((data)=>{
                cb(data);
            })
        })
    }
}
