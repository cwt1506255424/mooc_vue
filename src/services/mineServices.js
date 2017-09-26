"use strict"
import mineConstants from "../constants/mineConstants.js";

export default {

    getmineList: function(cb){
        fetch(mineConstants.MineFetchURL).then((res)=>{
            res.json().then((data)=>{
                cb(data);
            })
        })
    }
}