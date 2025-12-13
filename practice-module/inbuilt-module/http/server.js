// import http from "http"

//  const server = http.createServer((req,res)=>{
//     res.write("Hello server is on")
//     res.end()
// })

// Server.listen(4000,()=>{
//     console.log(`server is running http://localhost:${4000}`);
    
// })

import http from "http";

const server = http.createServer((req, res) => {
  res.write("Hello Node! is");
  res.end();
});
const port = 4000;
server.listen(port, () => {
  console.log(`Server running http://localhost:${port}`);
});
