import { connect } from "../../../dbConfig/dbconfig";
import Admin from "../../../models/adminModel";
import { NextApiRequest, NextApiResponse } from "next";
import bcryptjs from "bcryptjs";
import {sendEmail} from "../../../helpers/mailer"


connect()

export async function POST(req,res) {
    try {
        const reqBody = await req.json();
        const { firstName, lastName, email, password } = reqBody
        //check use exist or not
        const admin = await Admin.findOne({ email });
        if (admin) {
            return Response.json("already exist",{status:400})
        }

        //hashpassword

        const salt = await bcryptjs.genSalt(10);
        const hashedPassword = await bcryptjs.hash(password, salt);
        const newAdmin = new Admin({
            firstName,
            lastName,
            email,
            password: hashedPassword
        });

        const saveAdmin = await newAdmin.save();

        //verify email
        await sendEmail({email,emailType:"VERIFY",userId:saveAdmin._id});

        return Response.json({
            message: "Admin Created successfully",
            success: true,
            saveAdmin
        });
    } catch (error) {
        console.log(error, "error");
        return Response.json({
            error: error.message
        },
            { status: 500 })
    }
}