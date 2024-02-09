let fs=require('fs');
const env=require('dotenv').config()
const express=require('express');
const mongoose=require('mongoose');
const cors=require('cors');


const productRouter=require('./Routes/products.js');
const userController=require('./Routes/user.js');
const path=require('path');

const server=express();

server.use(cors());
server.use(express.json());
server.use(express.static(path.resolve(__dirname,process.env.PUBLIC_DIR)));
server.use('/api',productRouter.router);
server.use('/man',userController.router);
server.use('*',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'build','index.html'));
})


main().catch((err)=>console.log(err));

async function main(){
     await mongoose.connect(process.env.MONGO_URI);
     console.log('Database connected');
}

server.listen(process.env.PORT_NUMBER,()=>{
    console.log('Server has started');
})


