import * as ActionTypes from "../actionTypes"
import axios from "axios";

export const AddProductToStore = (newProduct)=>{
    return {
        type : ActionTypes.AddProductToStore,
        payload : newProduct
    }
}

export const saveProductToDb = (product)=>{
    return(dispatch)=>{
        axios.post("http://localhost:9000/product/api/", product)
        .then((savedProduct)=>{
            let signedProduct = savedProduct.data;

            dispatch(AddProductToStore(signedProduct))
        })
        .catch((err)=>{
            console.log(err)
        })
    }
}