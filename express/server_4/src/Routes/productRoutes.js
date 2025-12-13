import express from "express";

import  {createproduct,GetData,updateProduct,deleteProduct} from "../controller/productcontroller.js"


const productRouter =express.Router();

productRouter.post("/",createproduct)
productRouter.get("/",GetData)
productRouter.put("/:id",updateProduct)
productRouter.delete("/:id",deleteProduct)

export default productRouter;