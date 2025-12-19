import express from "express"
import {getProduct,postProduct} from "../controllers/productcontroller.js";
import loginverify from "../middleware/auth.middle.js";
import checkrole from "../middleware/role.middleware.js";

const productrouter = express.Router();


productrouter.get("/getdata",loginverify,getProduct )
productrouter.post("/postdata",checkrole("admin"), postProduct )

export default productrouter;