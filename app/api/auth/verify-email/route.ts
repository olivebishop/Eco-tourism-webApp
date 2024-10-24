import { connectToDB } from "@/lib/config/db";
import User from "@/lib/models/User";
import { NextRequest, NextResponse } from "next/server";
import JWT from "jsonwebtoken";

export async function POST(req: NextRequest) {
  const { code } = await req.json();
  if (!code) {
    return NextResponse.json(
      { error: "All fields are required (code)" },
      { status: 400 }
    );
  }

  try {
    await connectToDB();
    const codeIsValid = await User.findOne({ emailVerificationCode: code });
    if (!codeIsValid) {
      return NextResponse.json(
        { error: "Code is invalid or expired" },
        { status: 400 }
      );
    }

      codeIsValid.emailVerificationCode = "";
      codeIsValid.verified = true
    await codeIsValid.save();

    const tokenData = { id: codeIsValid.id, password: codeIsValid.password };

    const token = JWT.sign(tokenData, process.env.JWT_SECRET || "", { expiresIn: '30d'});

    const response = NextResponse.json({
      message: "Successfully logged in",
      success: true,
    });

    response.cookies.set("token", token, { httpOnly: true });
    return response;
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: error }.error, { status: 500 });
  }
}
