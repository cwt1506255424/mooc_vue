"use strict"
import ShiZhanKeTangConstants from "../constants/ShiZhanKeTangConstants.js";

export default{

    getShiZhanKeTang: function(cb){
        fetch(ShiZhanKeTangConstants.ShiZhanKeTangFetchURL).then((res)=>{
            res.json().then((data)=>{
                cb(data);
            })
        })
    }
}