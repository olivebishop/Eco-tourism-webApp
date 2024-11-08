import mongoose from "mongoose";

const BookingSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  people: {
    type: Number,
    required: true,
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
  date: {
    type: String,
  },
  specialRequirements: {
    type: String,
  },
  status: {
    type: String,
    enum: ["open", "closed", "pending"],
    default: "open",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Booking = mongoose.model('Booking', BookingSchema)


export default Booking