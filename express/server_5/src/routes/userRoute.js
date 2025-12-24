import express from "express";
import { register, login, getAllUser } from "../controllers/authcontroller.js";
import loginverify from "../middleware/auth.middle.js";
import checkrole from "../middleware/role.middleware.js";

const userrouter = express.Router();

userrouter.post("/register",register)
userrouter.post("/login",login)
userrouter.get("/getall",loginverify,checkrole("admin"),getAllUser)

export default userrouter;