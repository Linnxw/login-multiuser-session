import Users from "../models/userModels.js";
import passwordHash from "password-hash";

export const login = async(req,res) =>{
  if(req.session.userId)
  return res.status(403).json({msg:"Anda masih dalam keadaan login"})
  const user=await Users.findOne({
    where:{
      email:req.body.email
    }
  });
  if(!user)
  return res.status(404).json({msg:"user tidak terdaftar"});
  const match=passwordHash.verify(req.body.password,user.password)
  
  if(!match)
  return res.status(400).json({msg:"password salah"});
  req.session.userId = user.uuid
  const id=user.uuid
  const name=user.name
  const email=user.email
  const role=user.role
  res.status(200).json({id,name,email,role});
}

export const logout=async(req,res)=>{
  if(!req.session.userId)
  return res.status(403).json({msg:"Anda belum login"})
  req.session.destroy((err)=>{
    if(err)
    return res.status(400).json({msg:"gagal logout"});
    res.status(200).json({msg:"berhasil logout"})
  })
}

export const Me=async(req,res)=>{
  if(!req.session.userId)
  return res.status(403).json({msg:"harap login terlebibih dahulu"});
  const user=await Users.findOne({
    attributes:['uuid','name','email','role'],
    where:{
      uuid:req.session.userId
    }
  });
 
  if(!user)
   return res.status(404).json({msg:"user tidak ditemukan"});
   
   res.status(200).json(user)
}