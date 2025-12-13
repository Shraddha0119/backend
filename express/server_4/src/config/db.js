import mongoose from "mongoose";



const connectDB = async()=>{
try{
  await mongoose.connect("mongodb+srv://gunjkar_123:shradha@cluster0.wnvacxh.mongodb.net/?appName=Cluster0")
  console.log("Db connect");
  
}catch(error){
  console.log(error);
  
}
}

connectDB();

export default connectDB