import User from "@/lib/models/User";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from 'bcryptjs'

export async function POST(req: NextRequest) {
    const { token, newPassword } = await req.json()
    if (!token || !newPassword) {
        return NextResponse.json({ error: "All values required (token, newPassword"}, { status: 400})
    }

    try {
         const user = await User.findOne({
           resetPasswordToken: token,
           resetPasswordExpires: { $gt: Date.now() },
         });
        
        if (!user) {
            return NextResponse.json(
              { error: "user not found" },
              { status: 400 }
            );
        }

         const hashedPassword = await bcrypt.hash(newPassword, 10);
         user.password = hashedPassword;
         user.resetPasswordToken = undefined;
         user.resetPasswordExpires = undefined;
        await user.save();
        
        return NextResponse.json({ message: "Password reset successfule"}, { status: 200})

    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: error }, { status: 500})
    }
}