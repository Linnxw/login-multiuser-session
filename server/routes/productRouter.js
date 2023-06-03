import {
  getProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct
} from "../controler/productControler.js";
import {verifyUser} from "../middleware/AuthUser.js"
import express from "express";

const productRouter=express.Router()

productRouter.get("/products",verifyUser,getProducts)
productRouter.get("/product/:id",verifyUser,getProductById)
productRouter.post("/product",verifyUser,createProduct)
productRouter.patch("/product/:id",verifyUser,updateProduct)
productRouter.delete("/product/:id",verifyUser,deleteProduct)

export default productRouter;
