import mongoose, { Schema } from "mongoose";

const BlogImageSchema = new Schema({
  blogId: {
    type: Schema.Types.ObjectId,
    ref: "Blog",
    required: true,
  },
  image: {
    type: Buffer,
    required: false,
  },
  uploadedAt: {
    type: Date,
    default: Date.now,
  },
});

const BlogImage = mongoose.model('BlogImage', BlogImageSchema)
export default BlogImage