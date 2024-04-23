import nodemailer from "nodemailer";
import Admin from "../models/adminModel";
import bcryptjs from "bcryptjs";
import { v4 as uuidv4 } from 'uuid';


export const sendEmail = async ({ email, emailType, userId }) => {
    try {
        console.log("data come....1");
        const hashedToken = uuidv4();
        if (emailType === "VERIFY") {
            await Admin.findByIdAndUpdate(userId,
                {
                    verifyToken: hashedToken,
                    verifyTokenExpire: Date.now() + 3600000
                })
        } else if (emailType === "RESET") {
            await Admin.findByIdAndUpdate(userId,
                {
                    forgotPasswordToken: hashedToken,
                    forgotPasswordTokenExpire: Date.now() + 3600000
                })
        }

        console.log("data come....2");

        var transport = nodemailer.createTransport({
            host: "live.smtp.mailtrap.io",
            port: 587,
            auth: {
                user: "api",
                pass: "1af3add6f8d869250cbca906003aef25"
            }
        });

        console.log("data come....3");

        const mailOptions = {
            from: 'cm183838@yopmail.com', // sender address
            to: "tohit45@yopmail.com", // list of receivers
            subject: emailType === 'VERIFY' ? "Verify Your Email" : "RESET YOUR PASSWORD", // Subject line
            // text: "Hello world?", // plain text body
            html: `<table cellpadding="0" cellspacing="0" border="0" width="100%">
            <tr>
              <td align="center" bgcolor="#f0f0f0" style="padding: 40px 0;">
                <h1 style="color: #333333;">${emailType === "VERIFY"?"Verify Your Email Address":"Forgot Your password"}</h1>
                <p style="font-size: 16px; color: #666666; line-height: 24px;">Thank you for signing up. Please click the button below to verify your email address:</p>
                <a href="${process.env.DOMAIN}/verifyemail?token=${hashedToken}" style="display: inline-block; background-color: #007bff; color: #ffffff; text-decoration: none; padding: 10px 20px; border-radius: 5px;">Verify Email Address</a>
              </td>
            </tr>
          </table>`,
        }

        const mailSend = await transport.sendMail(mailOptions);
        return mailSend;

    } catch (error) {
        throw new Error(error.message);
    }
}