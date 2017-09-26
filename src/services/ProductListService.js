"use strict"
import ProductListConstants from "../constants/ProductListConstants.js";

export default{

        getProductListList: function(cb){
            fetch(ProductListConstants.ProductListFetchURL).then((res)=>{
                res.json().then((data)=>{
                    cb(data);
                })
            })
        }
}
