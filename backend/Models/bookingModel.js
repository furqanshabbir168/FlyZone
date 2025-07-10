import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema({
  userId: { type: String, required: true }, // Clerk user ID
  flightId: { type: mongoose.Schema.Types.ObjectId, ref: 'flight', required: true },
  seats: { type: [String], required: true }, // Array of seat numbers
  amount: { type: Number, required: true }, // Total paid

  flightDate: { type: String, required: true }, // e.g. "2025-07-20"
  flightTime: { type: String, required: true }, // e.g. "12:30 PM"

  date: { type: Date, default: Date.now }, // Booking creation date
  paymentStatus: { type: Boolean, default: false },
});

const bookingModel = mongoose.models.booking || mongoose.model('booking', bookingSchema);
export default bookingModel;
