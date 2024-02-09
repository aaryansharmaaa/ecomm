const mongoose = require('mongoose');
const { Schema } = mongoose;

const productSchema = new Schema({
    title: {type:String,required:true,unique:true},
    description: {type:String},
    price: {type:Number,min:[0,'Wrong minimum price'],required:true},
    discountPercentage: {type:Number,required:true,min:[0,'Discount percentage is 0'],max:[50,'Discount percentage is maximum'],required:true},
    rating: {type:Number,min:[0,'Wrong minimum rating'],max:[5,'Wrong maximum rating'],default:0},
    brand: {type:String,required:true},
    category: {type:String,required:true},
    thumbnail: {type:String,required:true},
    images: [String]
})

exports.Product = mongoose.model('Product', productSchema);