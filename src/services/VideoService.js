
"use strict"
import VideoConstants from "../constants/VideoConstants.js";
export default{
    getVideo:function(cb){
        fetch(VideoConstants.VideoFetchURL).then((res)=>{
            res.json().then((data)=>{
                cb(data);
            })
        })
    }
}