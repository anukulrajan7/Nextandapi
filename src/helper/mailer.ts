import nodemailer from 'nodemailer';
import User from "@/models/usermodel";
import bcryptjs from 'bcryptjs';


export const sendEmail = async({email, emailType, userId}:any) => {
    try {
        // create a hased token
        const hashedToken = await bcryptjs.hash(email.toString(), 10)

        if (emailType === "VERIFY") {
            await User.findByIdAndUpdate(userId, 
                {verifyToken: hashedToken, verifyTokenExpiry: Date.now() + 3600000})
        } else if (emailType === "RESET"){
            await User.findByIdAndUpdate(userId, 
                {forgotPasswordToken: hashedToken, forgotPasswordExpiry: Date.now() + 3600000})
        }

        var transport = nodemailer.createTransport({
            service: "gmail",
        
            auth: {
              user: "anukulraj2004@gmail.com",
              pass: "kouogctoprievlbd"
            }
          });

        const mailOptions = {
            from: 'signup@gmail.com',
            to: email,
            subject: emailType === "VERIFY" ? "Verify your email" : "Reset your password",
            html: `<p>Click <a href="${process.env.Domain}/${emailType==="VERIFY"?"verifyemail":"resetupdate"}?token=${hashedToken}">here</a> to ${emailType === "VERIFY" ? "verify your email" : "reset your password"}
            or copy and paste the link below in your browser. <br> ${process.env.Domain}/${emailType==="VERIFY"?"verifyemail":"resetupdate"}?token=${hashedToken}
            </p>`
        }

        const mailresponse = await transport.sendMail(mailOptions);
        return mailresponse;

    } catch (error:any) {
        throw new Error(error.message);
    }
}