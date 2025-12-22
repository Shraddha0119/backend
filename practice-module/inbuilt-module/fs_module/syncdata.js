import fs from "fs"

// asyanc
// fs.readFile("data.txt","utf-8",(err,data)=>{
//     if(err) console.log(err);
//     else console.log(data);
    
    
// })


// syanc

fs.writeFile("data.txt","bye-bye",(err)=>{
    if(err) console.log(err);
    else console.log("file created");
    
    
})
