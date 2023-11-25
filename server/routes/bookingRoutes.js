const express = require("express");
const router = express.Router();
const bookingController = require("../controllers/bookingController");

router.post("/booking", bookingController.addBooking);
router.get("/booking", bookingController.getBooking);
router.put("/booking/:id", bookingController.updateBooking);
router.delete("/booking/:id", bookingController.deleteBooking);

module.exports = router;
