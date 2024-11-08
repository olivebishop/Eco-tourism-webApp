import mongoose, { Schema } from "mongoose";

const BlogSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true,
    },
    author: {
        type: String,
        required: true,
        trim: true,
    },
    content: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    updatedAt: {
        type: Date,
        default: Date.now,
    },
    tags: {
        type: [String], // Array of tags
    },
    imageId: {
        type: Schema.Types.ObjectId, // URL for a featured image
        ref: "BlogImage"
    },
    meta: {
        views: {
            type: Number,
            default: 0,
        },
        likes: {
            type: Number,
            default: 0,
        },
    },
});


const Blog = mongoose.model('Blog', BlogSchema);

export default Blog;
