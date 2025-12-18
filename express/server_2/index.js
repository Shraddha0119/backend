// import express from "express"
// import fs from  "fs"

// const app = express()
// let port = 4000



// // middleware to parse jason body
//  app.use(express.json());




// app.get("/getdata",(req,res)=>{
//     fs.readFile("data.json","utf-8",(err,data)=>{
//         if(err) res.send(err)
//         else    res.send(JSON.parse(data))
//     })
// })


// app.post("/postdata",(req,res)=>{
// // let data;
//     fs.readFile("data.json","utf-8",(err,data)=>{
//     if(err) res.send(err)
//     let jasondata = JSON.parse(data)
//     jasondata.users.push(req.body);
   
//    fs.writeFile("data.json",JSON.stringify(jasondata),(err,data)=>{
//     if(err)res.send(err)
//     else res.send("data posted done")
//   })
// });

// //     let x = req.body;
// //   fs.writeFile("data.json",JSON.stringify(x),(err,data)=>{
// //     if(err)res.send(err)
// //     else res.send("data post done")
// //   })
// })











// // app.get('/',(req,res)=>{
// // res.send("i am coming")
// // })

// // app.get('/data',(req,res)=>{
// // res.send("i am datamaster")
// // })

// app.listen(port,()=>{
//     console.log(`server is running http://localhost:${port}`);
    
// })

import express from "express";
import fs from "fs";

const app = express();
let port = 4000;

app.use(express.json());

// GET DATA
app.get("/getdata", (req, res) => {
    fs.readFile("data.json", "utf-8", (err, data) => {
        if (err) return res.send(err);

        res.send(JSON.parse(data));
    });
});

// POST DATA
app.post("/postdata", (req, res) => {
    fs.readFile("data.json", "utf-8", (err, data) => {
        if (err) return res.send(err);

        let jasondata = JSON.parse(data);

        jasondata.users.push(req.body);

        fs.writeFile("data.json", JSON.stringify(jasondata,  2), (err) => {
            if (err) return res.send(err);

            res.send("data post done");
        });
    });
});

app.listen(port, () => {
    console.log(`server is running http://localhost:${port}`);
});
