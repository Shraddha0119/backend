import mongoose from "mongoose";


const UserSchema = new mongoose.Schema({
    name:String,
    price:Number,
    email:{
        type: String,
        required: true,
        unique: true,
    },
    password: String,
     mobile:{
        type: String,
        required: true,
        unique: true,
    },

   
});

const Usermodel = mongoose.model("User", UserSchema);

export default Usermodel;
