import mongoose from "mongoose";
import dotenv from "dotenv"

dotenv.config()


const connectDB = async () => {
  try {
    await mongoose.connect(
     process.env.Mongo
    );
    console.log("Db Connected");
  } catch (error) {
    console.log(error);
  }
};

export default connectDB;