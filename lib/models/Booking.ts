import mongoose from "mongoose";

const BookingSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        lowercase: true,
        match: /.+\@.+\..+/,
        unique: true,
    },
    phone: {
        type: String,
    },
    country: {
        type: String
    },
    status: {
        type: String,
        enum: ['open', 'closed', 'pending'],
        default: 'open'
    }
})

const Booking = mongoose.model('Booking', BookingSchema)


export default Booking