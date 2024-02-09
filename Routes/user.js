const express=require('express');

const router=express.Router();

const userControllers=require('../Controllers/user.js');

router.get('/users',userControllers.getALLusers)
.get('/users/:id',userControllers.getOneuser)
.post('/users',userControllers.adduser)
.put('/users/:id',userControllers.updateuser)
.patch('/users/:id',userControllers.updateWholeuser)
.delete('/users/:id',userControllers.deleteuser)

exports.router=router;