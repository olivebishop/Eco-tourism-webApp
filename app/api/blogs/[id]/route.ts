import { connectToDB } from "@/lib/config/db";
import Blog from "@/lib/models/Blog";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, { params }: { params: { id: string}}) {

    if (!params.id) {
        return NextResponse.json({ error: "BLOG ID IS REQUIRED" }, { status: 400 });
    }
    try {
        await connectToDB()
        const blog = await Blog.findById(params.id)
        if (!blog) {
            return NextResponse.json({ success: false, message: "Blog not found" }, { status: 404 })
        }

        return NextResponse.json({ blog }, { status: 200})
    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: error }.error, { status: 500 })
    }
}