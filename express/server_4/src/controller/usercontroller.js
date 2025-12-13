import UserModel from "../models/usermodel.js";

const CreateUser = async(req,res)=>{
    try {
        const user = await UserModel.Create(req,body)
        res.send({message:"user created",user});
    } catch (error) {
        console.log(error);
        
        
    }
}

export default CreateUser;