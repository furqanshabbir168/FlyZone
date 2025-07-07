import mongoose from "mongoose";

const flightSchema = new mongoose.Schema({
    title: { type: String, required: true },
    airline: { type: String, required: true },
    tripType: { type: String, required: true },
    travelClass: { type: String, required: true },
    flightType: { type: String, required: true },
    duration: { type: String, required: true },
    description: { type: String },
    features: { type: [String], default: [] },
    price: { type: Number, required: true },
    isPopular: { type: Boolean, default: false },
    image: { type: String, required: true },
    availableDates: [{ date: { type: String, required: true }, timeSlots: { type: [String], required: true } }]
}, { timestamps: true });

const flightModel = mongoose.models.flight || mongoose.model('flight',flightSchema);
export default flightModel