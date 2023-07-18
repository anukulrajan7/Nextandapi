import { connect } from '@/dbconfig/dbconfig';
import { NextRequest, NextResponse } from 'next/server';
import User from '@/models/usermodel';
import bcryptjs from 'bcryptjs';

connect();

export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();
    const { token, password, email } = reqBody;
    console.log(token);
    const user = await User.findOne({
      forgotPasswordToken: token,
      forgotPasswordExpiry: { $gt: Date.now() },
    });
    console.log(user);
    if (!user) {
      return NextResponse.json({ error: "Invalid token" }, { status: 400 });
    }
    const hashPassword = await bcryptjs.hash(password, 10);
    console.log(user);
    try {
      user.password = hashPassword;
      user.forgotPasswordExpiry = undefined;
      user.forgotPasswordToken = undefined;
      await user.save();
      return NextResponse.json({ success: true, status: 200 }, { status: 200 });
    } catch (error) {
      console.log(error);
    }
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
