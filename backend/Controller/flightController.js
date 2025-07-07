import flightModel from "../Models/flightModel.js";

// add flight
async function addFlight(request, response) {
  try {
    const imageUrl = request.file?.path; // safe access

    const flight = new flightModel({
      title: request.body.title,
      airline: request.body.airline,
      tripType: request.body.tripType,
      travelClass: request.body.travelClass,
      flightType: request.body.flightType,
      duration: request.body.duration,
      description: request.body.description,
      features: JSON.parse(request.body.features), // ✅ FIXED
      price: request.body.price,
      isPopular: request.body.isPopular === 'true',
      image: imageUrl,
      availableDates: JSON.parse(request.body.availableDates),
    });

    const savedFlight = await flight.save();

    response.status(201).json({
      success: true,
      message: "Flight added successfully",
      data: savedFlight,
    });
  } catch (error) {
    console.error("Add Flight Error:", error);
    response.status(500).json({ message: "Error adding flight" });
  }
}

export { addFlight };
