import { sendPasswordResetLink } from "@/functions/Mail";
import { connectToDB } from "@/lib/config/db";
import User from "@/lib/models/User";
import { NextRequest, NextResponse } from "next/server";

const clientURL = "https://ecotourism-webapp.vercel.app";

export async function POST(req: NextRequest) {
    const { email } = await req.json()
    if (!email) {
        return NextResponse.json({ error: "email not provided in the request body"}, { status: 400})
    }

    try {
        await connectToDB()
        const user = await User.findOne({ email: email })
        if (!user) {
            return NextResponse.json({ error: "email not found"}, { status: 400})
        }

        user.generateResetPasswordToken()
        await user.save();

        const resetLink = `${clientURL}/reset-password?token=${user.resetPasswordToken}`;

        const sendMail = await sendPasswordResetLink(email, resetLink)
        return NextResponse.json({
            message: "Password reset link sent to your email",
            emailStatus: sendMail.response
        }, { status: 200});

    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: error }, { status: 500})
    }
}