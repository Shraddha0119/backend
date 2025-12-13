import express from "express";

import CreateUser from "../controller/usercontroller.js";


const UserRouter =express.Router();

UserRouter.post("/create",CreateUser)

export default UserRouter;