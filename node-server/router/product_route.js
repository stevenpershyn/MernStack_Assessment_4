let express = require("express");
let productRoute = express.Router();
const productDataModel = require("../data-model/productDataModel");

productRoute.post("/api/signinup", (req, res)=>{
    let product = req.body

    productDataModel.findOne({name:req.body.name}).then((existingProduct)=>{
        if(existingProduct) {
            res.send(existingProduct)
        } else {
            let newProduct = new productDataModel(product)
            newProduct.save().then((newProduct)=>{
                res.send(newProduct)
            }).catch((err1)=>{
                res.send("error while sending")
            })
        }
    }).catch((err)=>{
        res.send("Error while sending")
    })
})

productRoute.get("/api/getproduct",(req, res)=>{
    productDataModel.find()
    .then((allusers)=>{
        res.send(allusers)
    })
    .catch(()=>{
        res.send("error while fetching users")
    })
})

module.exports = productRoute;
