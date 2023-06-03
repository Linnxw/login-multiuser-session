import Products from "../models/produkModels.js";
import User from "../models/userModels.js";
import {Op} from "sequelize";
export const getProducts = async(req,res) => {
  try{
    let response;
    if(req.role === "admin"){
      response = await Products.findAll({
        attributes:['uuid','name','price'],
        include:[{
          attributes:['name','email'],
          model:User
        }]
      })
    }else{
      response = await Products.findAll({
        where:{
          userId:req.userId
        },
        attributes:['uuid','name','price'],
        include:[{
         attributes:['name','email'],
         model:User
        }]
      })
    }
    res.status(200).json(response)
  }catch(err){
    res.status(500).json({msg:err.message})
  }
}
export const getProductById =async(req,res)=>{
  try{
    const product = await Products.findOne({
      where:{
        uuid:req.params.id
      }
    });
    
    if(!product)
    return res.status(404).json({msg:"product tidak ditemukan"});
    
    let response;
    if(req.role === "admin"){
      response=await Products.findOne({
        where:{
          id:product.id
        },
        attributes:['uuid','name','price'],
        include:[{
          attributes:['name','email'],
          model:User
        }]
      })
    }else{
      response= await Products.findOne({
        where:{
          [Op.and]:[{id:product.id},{userId:req.userId}]
        },
        attributes:['uuid','name','price'],
        include:[{
          model:User,
          attributes:['name','email']
        }]
      })
    }
    if(!response)
    return res.status(403).json({msg:"akses di tolak"})
    res.status(200).json(response)
  }catch(err){
    res.status(500).json({msg:err.message})
  }
}
export const createProduct = async(req,res) => {
  try{
   
    await Products.create({
      name:req.body.name,
      price:req.body.price,
      userId:req.userId
    })
    res.status(201).json({msg:"berhasil menambah product"})
  }catch(err){
    res.status(400).json({msg:err.message})
  }

}
export const updateProduct = async(req,res) => {
   const product = await Products.findOne({
     where:{
       uuid:req.params.id
     }
   });
   
   if(!product)
   return res.status(200).json({msg:"product tidak ditemukan"});
   try{
   if(req.role === "admin"){
     await Products.update({
       name:req.body.name,
       price:req.body.price
     },{
       where:{
         id:product.id
       }
     });
   }else{
    
      if(req.userId !== product.userId)
      return res.status(403).json({msg:"akses ditolak"})
     await Products.update({
       name:req.body.name,
       price:req.body.price
     },{
       where:{
         [Op.and]:[{id:product.id},{userId:req.userId}]
       }
     })
   }
   res.status(200).json({msg:"product terupdate"})
 }catch(err){
   res.status(500).json({msg:err.message})
 }
}
export const deleteProduct = async(req,res) => {
  const product = await Products.findOne({
    where:{
      uuid:req.params.id
    }
  });
  
  if(!product)
  return res.status(404).json({msg:"product tidak ditemukan"});
  try{
    if(req.role === "admin"){
      await Products.destroy({
        where:{
          id:product.id
        }
      })
    }else{
      if(req.userId !== product.userId)
      return res.status(403).json({msg:"akses di tolak"})
      await Products.destroy({
        where:{
          [Op.and]:[{id:product.id},{userId:req.userId}]
        }
      });
    }
    res.status(200).json({msg:"berhasil menghapus product"});
  }catch(err){
    res.status(500).json({msg:err.message})
  }
}