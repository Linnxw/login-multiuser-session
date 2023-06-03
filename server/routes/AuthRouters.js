import {login,logout,Me} from "../controler/Auth.js";
import express from "express";

const router=express.Router()

router.get("/me",Me)
router.post("/login",login)
router.delete("/logout",logout)

export default router