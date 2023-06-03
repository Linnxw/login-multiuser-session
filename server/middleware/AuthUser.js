import Users from "../models/userModels.js";

export const verifyUser= async(req,res,next) =>{
  if(!req.session.userId)
  return res.status(401).json({msg:"harap login terlebih dahulu"})
  
  const user = await Users.findOne({
    where:{
      uuid:req.session.userId
    }
  })
  
  if(!user)
  return res.status(404).json({msg:"user tidak terdaftar"})
  
  const userId=user.id
  const role=user.role
  req.userId=userId
  req.role=role
  next()
}

export const adminOnly=async(req,res,next)=>{
  
  const user = await Users.findOne({
    where:{
      uuid:req.session.userId
    }
  });
  
  if(!user)
  return res.status(404).json({msg:"user tidak terdaftar"});
  
  if(user.role !== "admin")
  return res.status(403).json({msg:"akses ditolak"});
  next();
}