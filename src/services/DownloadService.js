"use strict"
import DownloadConstants from "../constants/DownloadConstants.js";

export default {
    getDownloadList: function(cb){
        fetch(DownloadConstants.DownloadFetchURL).then((res)=>{
            res.json().then((data)=>{
                cb(data);
            })
        })
    }
}
