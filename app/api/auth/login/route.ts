import { connectToDB } from "@/lib/config/db";
import User from "@/lib/models/User";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from 'bcryptjs'
import JWT from 'jsonwebtoken';
import { sendLoginVerificationCode } from "@/functions/Mail";

function generateVerificationCode() {
  return Math.floor(100000 + Math.random() * 900000).toString();
}


export async function POST(req: NextRequest) {
    const { email, password } = await req.json()
    
    if (!email || !password) {
        return NextResponse.json({ error: "All fields are required (email, password)"}, { status: 400 })
    }

    try {
        await connectToDB()
        const user = await User.findOne({ email: email })
        if (!user) {
            return NextResponse.json({ error: "User doesn't exist"}, { status: 404 })
        }

        const isPasswordCorrect = await bcrypt.compare(password, user.password)
        if (!isPasswordCorrect) {
            return NextResponse.json(
              { error: "Incorrect Password" },
              { status: 400 }
            );
        }

        const code = generateVerificationCode()
        user.loginVerificationCode = code 
        await user.save()

        const sendLoginCode = await sendLoginVerificationCode(user.email, code)

        return NextResponse.json({ success: true, message: "verification email sent", emailSent: sendLoginCode.response }, { status: 200 })
    } catch (error) {
         console.error(error);
         return NextResponse.json({ error: error }.error, { status: 500 });
    }
}