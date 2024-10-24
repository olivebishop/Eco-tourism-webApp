import { connectToDB } from "@/lib/config/db";
import User from "@/lib/models/User";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from 'bcryptjs'
import { sendEmailVerificationCode } from "@/functions/Mail";


function generateVerificationCode() {
  return Math.floor(100000 + Math.random() * 900000).toString();
}

export async function POST(req: NextRequest) {
    const { firstname, lastname, email, password } = await req.json()
    if (!firstname || !lastname || !email || !password) {
        return NextResponse.json({ error: "All fields are required (firstname, lastname, email, password)"}, {status: 400})
    }
    
    try {
        await connectToDB()
        const existingUser = await User.findOne({ email: email })
        if (existingUser) {
            return NextResponse.json({ error: "User Exists"}, { status: 400})
        }
        
        const hash = await bcrypt.hash(password, 10)
        const code = generateVerificationCode()

        const newUser = await User.create({ 
            firstname: firstname, lastname: lastname, email: email, password: hash, emailVerificationCode: code
        })
        
        
        const sendEmail = await sendEmailVerificationCode(newUser.email, code)
        return NextResponse.json({ newUser, mailsent: sendEmail.response})
    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: error}.error, { status: 500})
    }
}