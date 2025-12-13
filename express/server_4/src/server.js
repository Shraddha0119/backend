import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import productRouter from "./Routes/productRoutes.js";
import UserRouter from "./Routes/userRoutes.js";

dotenv.config();


const app = express();

app.use(express.json());

const PORT= process.env.PORT || 4000;
connectDB();

app.use("/api/product", productRouter);
app.use("/api/user", UserRouter);





app.listen(PORT,()=>{
    console.log(`srver is running on http://localhost:${PORT}`);
    
})