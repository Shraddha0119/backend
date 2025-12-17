import express from "express";

import  {createproduct,GetData,updateProduct,deleteProduct} from "../controller/productcontroller.js"
import authMiddleware from "../middleware/authmiddleware.js";

const productRouter =express.Router();

productRouter.post("/",authMiddleware,createproduct)
productRouter.get("/",authMiddleware, GetData)
productRouter.put("/:id",updateProduct)
productRouter.delete("/:id",deleteProduct)

export default productRouter;