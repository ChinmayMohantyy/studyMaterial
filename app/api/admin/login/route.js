'use server'
import { connect } from "../../../dbConfig/dbconfig";
import Admin from "../../../models/adminModel";
import { NextApiRequest, NextApiResponse } from "next";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";
import { cookies } from "next/headers";

connect();

export async function POST(req, res) {
    try {
        const reqBody = await req.json();
        const { email, password } = reqBody;

        //check user exist or not 

        const admin = await Admin.findOne({ email });
        if (!admin) {
            return Response.json("Admin Doesn't exist", { status: 400 })
        }

        //check password
        const validPasword = await bcryptjs.compare(password, admin.password);

        if (!validPasword) {
            return Response.json("password incorrect please check", { status: 400 })
        }

        console.log(admin,"/",validPasword);

        // create a token data
        const tokenData = {
            id:admin._id,
            firstname:admin.firstName,
            email:admin.email
        }

        //create a token
        
        const token = await jwt.sign(tokenData,process.env.TOKEN_SECRET,{expiresIn:"1d"});
        const oneDay = 24 * 60 * 60 * 1000
        const response = Response.json({
            message:"Login successful",
            success: true,
        })
        cookies().set("token",token,{
            httpOnly:true,
            expires: Date.now() - oneDay 
        })
        return response;
    } catch (error) {
        console.log(error, "error");
        return Response.json({
            error: error.message
        },
            { status: 500 })
    }
}