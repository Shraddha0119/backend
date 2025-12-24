import express from "express"
import connectDB from "./config/db.js"
import productrouter from "./routes/prodcutRoute.js"
import userrouter from "./routes/userRoute.js"
import dotenv from "dotenv"
import contactRouter from "./routes/contactRoute.js"
dotenv.config()

const app = express();
app.use(express.json())
connectDB()


app.get("/",(req,res)=>{
    res.send("Welcome to our server")
})

app.use("/api/product", productrouter)
app.use("/api/user", userrouter)
app.use("/api", contactRouter)

const PORT = process.env.PORT || 8085;


app.listen(PORT,()=>{
    console.log(`server is running https://localhost:${PORT} `)
})