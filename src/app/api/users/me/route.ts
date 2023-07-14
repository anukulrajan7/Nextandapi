import { getDataFromToken } from "@/helper/getDataFromToken";
import User from "@/models/usermodel";
import { NextRequest, NextResponse } from "next/server";
import { connect } from "@/dbconfig/dbconfig";
connect()

export async function GET(request: NextRequest) {
    try {
        const userId = await getDataFromToken(request);
        const user: any = await User.findOne({ _id: userId }).select("-password");
        console.log(user);
      
        return NextResponse.json({
            message: "user find ",
            data: user});

    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 400 });

    }
}