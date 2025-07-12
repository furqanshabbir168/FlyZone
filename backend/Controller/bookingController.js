import bookingModel from "../Models/bookingModel.js";
import Stripe from "stripe";
import dotenv from 'dotenv'
dotenv.config();
import { inngest } from "../Inngest/index.js";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
const frontend_url = 'http://localhost:5173'


// place booking
async function placeBooking(request, response) {
  try {
    const { userId, flightId, flightDate, seats, flightTime, amount } = request.body;

    // Validations
    if (!userId) return response.status(401).json({ message: "Please login to book a flight." });
    if (!flightId) return response.status(400).json({ message: "Flight ID is missing." });
    if (!flightDate) return response.status(400).json({ message: "Please select a flight date." });
    if (!flightTime) return response.status(400).json({ message: "Please select a flight time." });
    if (!seats || !seats.length) return response.status(400).json({ message: "Please select your seat(s)." });
    if (!amount) return response.status(400).json({ message: "Booking amount is missing." });

    // Create and save booking
    const newBooking = new bookingModel({
      userId,
      flightId,
      flightDate,
      flightTime,
      amount,
      seats,
      paymentStatus: false  // add this field in your schema
    });

    await newBooking.save();

    // Fire delayed check
    await inngest.send({
      name: "booking/placed",
      data: {
      bookingId: newBooking._id.toString()
    }
    });

    response.status(201).json({ 
      message: "Booking placed successfully!", 
      data: newBooking 
    });

  } catch (error) {
    console.error("Booking Error:", error);
    response.status(500).json({ message: "Something went wrong while placing booking." });
  }
}


// get user booking
async function myBookings(request , response) {
    try{
        const userId = request.params.userId;

        const bookings = await bookingModel.find({userId});
        response.status(200).json({
        success: true,
        message: "User bookings fetched successfully",
        data: bookings,
    });
    
    } catch(error){
        response.status(500).json({
        success: false,
        message: "Failed to fetch user bookings",
        error: error.message,
    });
    }
}

// stripe payment
async function stripePayment(request, response) {
  try {
    const { bookingId } = request.params;

    const booking = await bookingModel.findById(bookingId);
    if (!booking) {
      return response.status(404).json({ message: "Booking not found" });
    }

    // Stripe line item: only flight
    const line_items = [
      {
        price_data: {
          currency: "usd", // ✅ USD
          product_data: {
            name: `Flight ${booking.flightId}`,
            description: `Date: ${booking.flightDate} | Time: ${booking.flightTime}`,
          },
          unit_amount: Math.round(booking.amount * 100), // convert to cents
        },
        quantity: 1,
      },
    ];

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items,
      mode: "payment",
      locale: "en",
      metadata: {
        bookingId: booking._id.toString()
      },
      success_url: `${frontend_url}/verify?success=true&bookingId=${booking._id}`,
      cancel_url: `${frontend_url}/verify?success=false&bookingId=${booking._id}`,
    });

    response.status(200).json({
      success: true,
      session_url: session.url,
    });
  } catch (error) {
    console.log("Stripe Error:", error);
    response.status(500).json({
      success: false,
      message: "Stripe session creation failed",
    });
  }
}

export { placeBooking , myBookings , stripePayment};
