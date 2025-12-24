const checkrole = (role)=>{
    return (req,res,next)=>{
        if(req.user.role !== role){
            console.log(req.user.role);
            
            return res.send("not a admin")
        }
        next()
    }
}

export default checkrole;