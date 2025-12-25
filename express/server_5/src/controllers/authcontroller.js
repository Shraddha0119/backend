import userModel from "../models/UserModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const register = async (req, res) => {
  try {
    const { name, email, password, role } = req.body;

    const existingUser = await userModel.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "Email already exists" });
    }

    const hashpass = await bcrypt.hash(password, 10);

    const user = await userModel.create({
      name,
      email,
      password: hashpass,
      role,
      profile: req.file ? `uploads/${req.file.filename}` : ""
    });

    res.status(201).json({
      message: "User created",
      user,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
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
    let Alluser = await userModel.find().select("-password");
     res.status(200).send(Alluser)
  } catch (error) {
    res.send(error)
  }

}


export {register,login,getAllUser};