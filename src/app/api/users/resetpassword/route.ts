import { connect } from '@/dbconfig/dbconfig';
import User from '@/models/usermodel';
import { NextResponse, NextRequest } from 'next/server';
import { sendEmail } from '@/helper/mailer';
connect()
export async function POST(request: NextRequest) {

    try {
        const requBody = await request.json();
        const { email } = requBody;
        console.log(email);
        const user = await User.findOne({ email });
        if (!user) {
            return NextResponse.json({ error: "user not found" }, { status: 404 });
        }
        const data = await sendEmail({ email, emailType: "RESET", userId: user._id });
        return NextResponse.json({ successs: true, message: "check email" }, { status: 200 });




    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 400 })
    }

}