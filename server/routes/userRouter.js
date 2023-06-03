import {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser
} from "../controler/userControler.js";
import {verifyUser,adminOnly} from "../middleware/AuthUser.js"
import express from "express";

const userRouter=express.Router()

userRouter.get("/users",verifyUser,adminOnly,getUsers)
userRouter.get("/users/:id",verifyUser,adminOnly,getUserById)
userRouter.post("/users",verifyUser,adminOnly,createUser)
userRouter.patch("/users/:id",verifyUser,adminOnly,updateUser)
userRouter.delete("/users/:id",verifyUser,adminOnly,deleteUser)

export default userRouter;
