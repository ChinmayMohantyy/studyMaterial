import { Email } from "@mui/icons-material";
import mongoose from "mongoose";

const adminSchema = new mongoose.Schema({
        firstName:{
            type:String,
            required:[true,"Please Provide FirstName"],
        },
        lastName:{
            type:String,
            required:[true,"Please Provide lastName"],
        },
        email:{
            type:String,
            required:[true,"Please Provide Email"],
            unique:true,
        },
        password:{
            type:String,
            required:[true,"Please Provide Password"],
        },
        isVerified:{
            type:Boolean,
            default:false
        },
        isAdmin:{
            type:Boolean,
            default:false
        },
        forgotPasswordToken : String,
        forgotPasswordTokenExpire : Date,
        verifyToken:String,
        verifyTokenExpire:Date
});

const Admin = mongoose.models.admin || mongoose.model("admin",adminSchema);
export default Admin;