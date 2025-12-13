import express from "express"
import {login,signup} from "../controllers/user_controller.js";


let router = express.Router()


router.get("/logout",(req,res) => {
    res.send("logout")
})


router.post("/login",login)
router.post("/signup",signup)

export default router;