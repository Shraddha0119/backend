import productmodel from "../models/productmodel.js";


// create product 

let createproduct = async(req,res)=>{
  const {name,price,mobile} = req.body;
  const product = await productmodel.create({name,price,mobile})
  res.send("product added")
};


let GetData = async(req,res)=>{
  let products = await productmodel.find();
  res.send(products)
};


let updateProduct = async(req,res)=>{
  const {id} = req.params;
 const products = await productmodel.findByIdAndUpdate(id,req.body,{new:true})
 res.send(products)
 
};


let deleteProduct = async(req,res)=>{
  const {id} = req.params;
 const products = await productmodel.findByIdAndDelete(id)
 res.json({message:"Deleted",products})
 
};

export {createproduct,GetData,updateProduct,deleteProduct}

