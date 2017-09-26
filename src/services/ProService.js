"use strict"
import PayConstants from "../constants/PayConstants.js";


export default{

    getPay:function(cb){
        fetch(PayConstants.PayFetchURL).then((res)=>{
            res.json().then((data)=>{
                cb(data);
            })
        })
    }
}