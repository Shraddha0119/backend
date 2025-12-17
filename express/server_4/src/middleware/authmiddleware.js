import JWT from "jsonwebtoken";


const authMiddleware = (req,res,next)=>{

  try{
const token = req.headers.authorization;

if(!token) return res.status(401).send(" token not provided");

const decoded = JWT.verify(token, "mysecretkey123");

req.userId = decoded.Id;

next();
  }catch (error) {
    res.status(401).send("invalid token")

  }





    
}

export default authMiddleware;