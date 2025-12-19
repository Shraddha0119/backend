
import productModel from "../models/ProductModel.js";

const getProduct = async(req,res)=>{
   try {
    const product = await productModel.find()
    res.status(200).send(product)
   } catch (error) {
   res.status(500).send(error)
   }
}

const postProduct = async(req,res)=>{
    try {
        
        const product = await productModel.create(req.body)
        res.status(201).json({massage:"Product added",product})
    } catch (error) {
        res.status(500).send(error);
    }
}


export {getProduct,postProduct};
