import userModel from "../models/UserModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const register = async (req, res) => {
  const { name, email, password, role } = req.body;
  const hashpass = await bcrypt.hash(password, 10);

  const user = await userModel.create({
    name,
    email,
    password: hashpass,
    role
  });

  res.status(201).json({massage:"User created", user})
};


const login = async(req,res)=>{
    const {email,password}= req.body;
    const user = await userModel.findOne({email})
    if(!user) return res.status(404).json({massage:"User not found"})

    const isMatch = await bcrypt.compare(password,user.password);
    if(!isMatch) return res.status(401).json({massage:"Wrong password"});

    const token = jwt.sign({ id: user._id, role:user.role }, process.env.secretkey,{expiresIn:"1h"});

    res.json({massage:"Login", token})

}

const getAllUser = async(req,res)=>{
 
  try {
     let Alluser = await userModel.find();
     res.status(200).send(Alluser)
  } catch (error) {
    res.send(error)
    
  }
}

export {register,login,getAllUser};