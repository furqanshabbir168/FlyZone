import cloudinary from "../Config/cloudinary.js";
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

// listed flights
async function listFlight(request,response) {
  try{
    const flight = await flightModel.find();

    response.status(201).json({
      success:true,
      message: "Flight listed successfully",
      data:flight
    })
    
  } catch(error){
    console.error("List Flight Error:", error);
    response.status(500).json({ message: "Error listing flight" });
  }
}

// delete filght
async function deleteFlight(request,response) {
  try{
    const {id} = request.body;

  const flight = await flightModel.findById(id);
   if (!flight) {
      return response.status(404).json({ message: "Flight not found" });
   } else {
    // Extract public_id from Cloudinary URL
    const imageUrl = flight.image; // e.g., https://res.cloudinary.com/.../FlyZone/flights/abcxyz.png
    const publicId = `FlyZone/flights/${imageUrl.split('/').pop().split('.')[0]}`;

    // Delete from Cloudinary
    await cloudinary.uploader.destroy(publicId);

    // Delete from MongoDB
    await flightModel.findByIdAndDelete(id);

    response.status(201).json({
      success:true,
      message: "Flight deleted successfully"
   });
   }
  } catch(error){
    console.error("Delete Flight Error:", error);
    response.status(500).json({ message: "Server error" });
  }
}

export { addFlight , listFlight , deleteFlight};
