import fs, { unlink } from "fs";
// import os from "os";




// console.log(os.hostname());


// freemem()
// hostname()
// cpus

// fs.readFile("data.txt","utf-8",(err,data)=>{
//     if(err){
//         console.log(err);
//     }else{
//         console.log(data);
        
//     }
// })

// // let json_obj = {
// //     "name":"shri",
// //     "age":34
// // }




// // for create file

// fs.writeFile("note.text","hello rahul",(err,data)=>{
//     if(err){
//         console.log(err);
        
//     }else{
//         console.log("file created");
        
//     }

// })

// fs.appendFile("note.text","\nwhy are you reading",(err)=>{
//     if(err) console.log(err);
//     else console.log("data created");
    
    
// })


// fs.rename("note.text","note.txt",(err)=>{
//     if(err) console.log(err);
//      else console.log("file rename");
     
    
// })

// fs.unlink("myfolder",(err)=>{
//     if(err) console.log(err);
//     else console.log("file deleted"); 

// })

fs.mkdir("myfolder",(err)=>{
    if(err) console.log(err);
     else console.log("foldercraeted");
     
    
})
