let fs = require('fs');

const productModels = require('../models/products.js');
const Product = productModels.Product;

exports.addProduct = async (req, res) => {
    const product = new Product(req.body)
    await product.save()
        .then(addProduct => {
            res.status(202).json(addProduct)
        })
        .catch(err => {
            res.status(400).json(err)
        })
}
exports.getALLProducts = (req, res) => {
    const products = Product.find()
        .then(findProduct => {
            res.status(202).json(findProduct)
        })
        .catch(err => {
            res.status(400).json(err)
        })
}
exports.getOneProduct = async (req, res) => {
    const id = req.params.id;
    const product = await Product.findById({_id:id})
        .then(productId => {
            res.status(202).json(productId)
        })
        .catch(err => {
            res.status(400).json(err)
        })
}

exports.updateProduct =async (req, res) => {
    const id = req.params.id
    try{
        const doc= await Product.findOneAndReplace({_id:id},req.body,{new:true})
        res.status(202).json(doc)
    }
    catch(err){
        console.log(err)
       res.status(400).json(err)
    }
}

exports.updateWholeProduct = async (req, res) => {
    const id = req.params.id
    try{
        const doc= await Product.findOneAndUpdate({_id:id},req.body,{new:true})
        res.status(202).json(doc)
    }
    catch(err){
        console.log(err)     
          res.status(400).json(err)
    }
}

exports.deleteProduct = async (req, res) => {
    const id = req.params.id
    try{
        const doc= await Product.findOneAndDelete({_id:id})
        res.status(202).json(doc)
    }
    catch(err){
        console.log(err)
       res.status(400).json(err)
    }
}