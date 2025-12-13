import express from "express"


const app = express()

app.get('/',(req,res)=>{
res.send("i am coming")
})

app.get('/data',(req,res)=>{
res.send("i am datamaster")
})

app.listen(4000,()=>{
    console.log(`server is running http://localhost:${4000}`);
    
})