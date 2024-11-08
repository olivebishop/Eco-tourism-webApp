import { NextRequest, NextResponse } from "next/server";
import BlogImage from "@/lib/models/BlogImages";
import Blog from "@/lib/models/Blog";
import { connectToDB } from "@/lib/config/db";

export const POST = async (req: NextRequest,) => {
  const formData = await req.formData();
  const id = req.nextUrl.searchParams.get('blogId')

  const file = formData.get("file") as File;
  if (!file) {
    return NextResponse.json({ error: "No files received." }, { status: 400 });
  }
  try {
    await connectToDB()
    const blog = await Blog.findById(id)
    if (!blog) {
      return NextResponse.json({ error: "Blog not found"}, { status: 404})
    }
  
    const buffer = Buffer.from(await file.arrayBuffer());
    
    const newBlogImage = await BlogImage.create({
      image: buffer,
      blogId: id
    })
    return NextResponse.json({ message: "Success", newBlogImage, status: 201 });
  } catch (error) {
    console.log("Error occured ", error);
    return NextResponse.json({ error: error, status: 500 });
  }
};
