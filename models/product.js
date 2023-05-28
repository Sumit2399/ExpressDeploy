//schema
const mongoose=require('mongoose')

const productSchema=new mongoose.Schema({
    title: {
        type:String,
        required:true,
            unique:true},
    description:String,
    price:Number,
    discountPercentage:{type: Number,
        min:0,max:50
    },
    rating:
    {type: Number,
        min:0,max:5
    },
    brand:{
        type:String,
        },
    category:{
        type:String,
    },
    thumbnail:{
        type:String,
        required:true},
    images:[String]


})

exports.Product=mongoose.model("Product",productSchema)