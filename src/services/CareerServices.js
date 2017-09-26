"use strict"
import CareerConstants from "../constants/CareerConstants.js";
export default {
    getcareerlist: function(cb){
        fetch(CareerConstants.CareerFetchURL).then((res)=>{
            res.json().then((data)=>{
                cb(data);
            })
        })
    }
}