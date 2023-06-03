import Users from "../models/userModels.js";
import passwordHash from 'password-hash';

export const getUsers = async(req,res) => {
  try{
    const response = await Users.findAll({
      attributes:['uuid','name','email','role']
    });
    res.status(200).json(response);
  }catch (err){
    res.status(500).json({msg:err.message});
  }
}
export const getUserById = async(req,res) => {
  
  try{
    const response = await Users.findOne({
     attributes:['uuid','name','email','role'],
      where:{
        uuid:req.params.id
      }
    });
    if(!response) return res.status(404).json({msg:"User tidak terdaftar"});
    res.status(200).json(response);
  } catch(err){
  res.status(500).json({msg:err.message});
  }
}
export const createUser=async(req,res)=>{
 
const {name,email,password,confPassword,role}=req.body;
    if(password !== confPassword){
    return res.status(400).json({msg:"password dan confirm password tidak cocok"})
    }
 try{
   const hashPassword=passwordHash.generate(password)
   await Users.create({
     name:name,
     email:email,
     password:hashPassword,
     role:role
   })
   res.status(200).json({msg:"register berhasil"})
  }catch(err){
    res.status(400).json({msg:err.message})
  }
}
export const updateUser=async(req,res) =>{
  const user = await Users.findOne({
    where:{
      uuid:req.params.id
    }
  })

   if(!user) 
   return res.status(404).json({msg:"user tidak ditemukan"});
 
   const {name,email,password,confPassword,role}=req.body;

  let newPassword;
  if(password == "" || password == null){
    newPassword=user.password
  }else{
    newPassword=passwordHash.generate(password);
  }
  
  if(password !== confPassword)
    return res.status(400).json({msg:"password dan confirm password tidak cocok"})
    
  try{
   await Users.update({
     name:name,
     email:email,
     password:newPassword,
     role:role
   },{
     where:{
       id:user.id
     }
   });
   res.status(200).json({msg:"berhasil update data"})
  }catch(err){
    res.status(400).json({msg:err.message})
  }
}
export const deleteUser=async(req,res)=>{
  const user=await Users.findOne({
    where:{
      uuid:req.params.id
    }
  })
  if(!user)
  return res.status(200).json({msg:"user tidak ditemukan"});
  try{
  await Users.destroy({
    where:{
      id:user.id
    }
  })
  res.status(200).json({msg:"berhasil menghapus user"})
  }catch(err){
    res.status(500).json({msg:err.message})
  }
}