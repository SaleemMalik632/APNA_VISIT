const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    country: { type: String, enum: ["Paris", "SanFrancisco", "Canada", "Australia"] },
    destination: { type: String, required: true },
    arrivalDate: { type: Date, required: true },
    departureDate: { type: Date, required: true },
    numberTravelers: { type: Number, required: true },
    specialRequests: { type: String },
});

module.exports = mongoose.model("Booking", bookingSchema);
