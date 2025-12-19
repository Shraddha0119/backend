import jwt from "jsonwebtoken";

const verify = (req,res,next)=>{
    const token = req.headers.authorization;

    if(!token) return res.status(401).json({massage:"Login required"})

    try {
        const decoded = jwt.verify(token, process.env.secretkey);   
        req.user = decoded;
        next()
    } catch (error) {
        res.status(401).json({massage:"Invalid token"})
    }
}

export default verify;