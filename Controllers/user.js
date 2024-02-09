let fs=require('fs');
const data=JSON.parse(fs.readFileSync('data.json','utf-8'));
const users=data.users;

exports.getALLusers=(req,res)=>{
    res.status(202).json(users);
}
exports.getOneuser=(req,res)=>{
    const id=+(req.params.id);
    const user=users.find((e)=>e.id===id)
    res.status(202).json(user)
}
exports.adduser=(req,res)=>{
    users.push(req.body)
    res.status(202).json(users)
}
exports.updateuser=(req,res)=>{
    const id=+(req.params.id);
    const userIndex=users.findIndex((e)=>e.id===id);
    users.splice(userIndex,1,{...req.body,id:id})
    res.status(202).json(users)
}
exports.updateWholeuser=(req,res)=>{
    const id=+(req.params.id);
    const userIndex=users.findIndex((e)=>e.id===id);
    const user=users[userIndex]
    users.splice(userIndex,1,{...user,...req.body})
    res.status(202).json(users);
}

exports.deleteuser=(req,res)=>{
    const id=+(req.params.id);
    const userIndex=users.findIndex((e)=>e.id===id);
    users.splice(userIndex,1)
    res.status(202).json(users)
}