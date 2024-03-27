import mongoose from "mongoose";
const UserSchema= new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
        
    },
    profilePhoto:{
        type:String,
        default:"https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg"
    }
},
{timestamps:true})

const User= mongoose.model("User",UserSchema);
export default User;