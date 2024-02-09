const express=require('express');

const router=express.Router();

const productControllers=require('../Controllers/products.js');


router.get('/products',productControllers.getALLProducts)
.get('/products/:id',productControllers.getOneProduct)
.post('/products',productControllers.addProduct)
.put('/products/:id',productControllers.updateProduct)
.patch('/products/:id',productControllers.updateWholeProduct)
.delete('/products/:id',productControllers.deleteProduct)

exports.router=router;