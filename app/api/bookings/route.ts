import { sendBookingEmailNotification } from "@/functions/Mail";
import { connectToDB } from "@/lib/config/db";
import Booking from "@/lib/models/Booking";
import { connect } from "http2";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    
    const body = await req.json();
    const { name, email, people, date, specialRequirements } = body;
    if (!people || !name || !date || !email || !specialRequirements) {
      return NextResponse.json(
        { error: "(name, phone, email, phone, people) fields are required" },
        { status: 400 }
      );
    }

    try {
        await connectToDB();
        const newBooking = await Booking.create({
          name,
          people,
          email,
          specialRequirements,
          date,
        });
        // const mail = await sendBookingEmailNotification({ fullname: `${name} - ${phone}`, email, phone });
        return NextResponse.json({ newBooking }, { status: 200 });
    } catch (error) {
        console.error('Error creating booking:', error);
        return NextResponse.json({ error: 'Failed to create booking' }, { status: 500 });
    }
}

export async function GET(req: NextRequest) {
    const token = req.cookies.get("token")?.value;
    if (!token) {
        return NextResponse.json({ error: "User is not Authenticated" }, { status: 401 });
    }

    try {
        await connectToDB();
        const bookings = await Booking.find();
        return NextResponse.json({ bookings }, { status: 200 });
    } catch (error) {
        console.error('Error fetching bookings:', error);
        return NextResponse.json({ error: 'Failed to fetch bookings' }, { status: 500 });
    }
}

export async function PUT(req: NextRequest) {
    const token = req.cookies.get("token")?.value;
    if (!token) {
        return NextResponse.json({ error: "User is not Authenticated" }, { status: 401 });
    }

    const id = req.nextUrl.searchParams.get('id');
    if (!id) {
        return NextResponse.json({ error: "BOOKING ID IS REQUIRED" }, { status: 400 });
    }

    const body = await req.json();
    const { updatedData } = body;

    if (!updatedData) {
        return NextResponse.json({ error: "MISSING BOOKING UPDATED DATA" }, { status: 400 });
    }

    const allowedUpdates = ['firstname', 'lastname', 'email', 'phone', 'country', 'status'] as const;
    type AllowedUpdateKeys = typeof allowedUpdates[number];
    
    const filteredData: Partial<Record<AllowedUpdateKeys, unknown>> = {};
    Object.keys(updatedData).forEach(key => {
        if (allowedUpdates.includes(key as AllowedUpdateKeys)) {
            filteredData[key as AllowedUpdateKeys] = updatedData[key];
        }
    });

    if (Object.keys(filteredData).length === 0) {
        return NextResponse.json({ error: "NO VALID FIELDS TO UPDATE" }, { status: 400 });
    }

    try {
        await connectToDB();
        const booking = await Booking.findById(id);
        if (!booking) {
            return NextResponse.json({ success: false, message: "Booking not found" }, { status: 404 });
        }

        const updatedBooking = await Booking.findByIdAndUpdate(id, filteredData, { new: true });
        return NextResponse.json({ updatedBooking }, { status: 200 });
    } catch (error) {
        console.error('Error updating booking:', error);
        return NextResponse.json({ error: 'Failed to update booking' }, { status: 500 });
    }
}

export async function DELETE(req: NextRequest) {
    const token = req.cookies.get("token")?.value;
    if (!token) {
        return NextResponse.json({ error: "User is not Authenticated" }, { status: 401 });
    }

    const id = req.nextUrl.searchParams.get('id');
    if (!id) {
        return NextResponse.json({ error: "BOOKING ID IS REQUIRED" }, { status: 400 });
    }

    try {
        await connectToDB();
        const booking = await Booking.findById(id);
        if (!booking) {
            return NextResponse.json({ success: false, message: "Booking not found" }, { status: 404 });
        }

        await Booking.deleteOne({ _id: id });
        return NextResponse.json({ success: true, message: "Booking deleted" }, { status: 200 });
    } catch (error) {
        console.error('Error deleting booking:', error);
        return NextResponse.json({ error: 'Failed to delete booking' }, { status: 500 });
    }
}
