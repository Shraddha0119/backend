import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  title: String,
  price:Number,
 description:String,
  images:{
  type: [String],  // multiple images
  default:[]
 }
  
});

const productModel = mongoose.model("Product", productSchema)

export default productModel;