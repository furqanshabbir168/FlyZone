import bookingModel from "../Models/bookingModel.js";

// place booking
async function placeBooking(request, response) {
  try {
    const { userId, flightId, flightDate, seats, flightTime, amount } = request.body;

    // Specific validation messages
    if (!userId) {
      return response.status(401).json({ message: "Please login to book a flight." });
    }

    if (!flightId) {
      return response.status(400).json({ message: "Flight ID is missing." });
    }

    if (!flightDate) {
      return response.status(400).json({ message: "Please select a flight date." });
    }

    if (!flightTime) {
      return response.status(400).json({ message: "Please select a flight time." });
    }

    if (!seats || !seats.length) {
      return response.status(400).json({ message: "Please select your seat(s)." });
    }

    if (!amount) {
      return response.status(400).json({ message: "Booking amount is missing." });
    }

    const newBooking = new bookingModel({
      userId,
      flightId,
      flightDate,
      flightTime,
      amount,
      seats,
    });

    await newBooking.save();
    response.status(201).json({ message: "Booking placed successfully!", data: newBooking });
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

export { placeBooking , myBookings};
