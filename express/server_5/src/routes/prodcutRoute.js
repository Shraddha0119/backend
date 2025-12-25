import express from "express"
import {getProduct,postProduct} from "../controllers/productcontroller.js";
import loginverify from "../middleware/auth.middle.js";
import checkrole from "../middleware/role.middleware.js";
import upload from "../middleware/userupload.middleware.js";

const productrouter = express.Router();

                            //  loginverify
productrouter.get("/getdata",getProduct )
productrouter.post("/postdata",upload.array("images"),postProduct )
                        //  loginverify,checkrole("admin")

export default productrouter;