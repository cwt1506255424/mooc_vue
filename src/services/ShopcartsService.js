"use strict"
import ShopcartsContants from"../constants/ShopcartsContants.js"



export  default {
    getShopcartsWiilbuy:function (cb) {
        fetch(ShopcartsContants.ShopcartsFetchURL).then((res)=>{
            res.json().then((data)=>{
                cb(data);
            })
        })
    }
}
