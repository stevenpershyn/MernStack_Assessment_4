let mongooseObj = require("mongoose");
schemaObj = mongooseObj.Schema;

mongooseObj.connect("mongodb://127.0.0.1/mernstack16");

let productSchema = new schemaObj({
    name : {type: String, required : true},
    price : {type: String, required : true},
    description : String,
    rating : String
});

let ProductModel = mongooseObj.model("product",productSchema);

module.exports = ProductModel;