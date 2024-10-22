import { sendEmail } from "@/functions/Mail";
import { connectToDB } from "@/lib/config/db";
import Booking from "@/lib/models/Booking";
import { NextRequest, NextResponse } from "next/server";


export async function POST(req: NextRequest) {
    const body = await req.json()
    const { firstname, lastname, email, phone, country } = body
    if (!firstname || !lastname || !email || !phone) {
        return NextResponse.json({ error: "firstname, lastname, email, phone fields are required"}, { status: 400 })
    }
    try {
        await connectToDB()
        const newBooking = await Booking.create({ firstname: firstname, lastname: lastname, email: email, phone: phone, country: country || '' })
        const mail = await sendEmail({fullname:`${firstname} ${lastname}`, email: email, phone: phone})
        return NextResponse.json({ newBooking }, { status: 200 })
    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: error }.error, { status: 500 })
    }
}


export async function GET(req: NextRequest) {
    try {
        await connectToDB()
        const bookings = await Booking.find()
        return NextResponse.json({ bookings}, { status: 200})
    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: error }.error, { status: 500 })
    }
}