const Booking = require("../models/booking");

async function addBooking(req, res)
{
    try
    {
        console.log(req.body);
        const booking = await Booking.create(req.body);
        res.status(201).json(booking);
    }
    catch (err)
    {
            console.log(err);
        res.status(500).json({ error: err.message });
    }
}
async function getBooking(req, res)
{
    try
    {
        const booking = await Booking.find();
        res.status(200).json({ booking: booking, message: "Successfully finded" });
    }
    catch (err)
    {

        res.status(500).json({ error: err.message, message: "Internal server error" });
    }
}
async function updateBooking(req, res)
{
    try
    {
        console.log("update")
        const { id } = req.params;
        const updatedBooking = await Booking.findByIdAndUpdate(id, req.body, {new: true,});
        res.json(updatedBooking);
    } catch (err)
    {
        res.status(500).json({ error: err.message });
    }
}

async function deleteBooking(req, res)
{
    try
    {
        const { id } = req.params;
        console.log(id);
        await Booking.findByIdAndRemove(id);
        res.sendStatus(200);
    } catch (err)
    {
        res.status(500).json({ error: err.message });
    }
}

module.exports = {
    addBooking,
    getBooking,
    deleteBooking,
    updateBooking
};
