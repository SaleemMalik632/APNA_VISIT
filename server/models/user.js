const mongoose = require("mongoose");

const loginSchema = new mongoose.Schema(
    {
        name:String,
        email: String,
        password: String,
    },
    { timestamps: true }
);
module.exports = mongoose.model("Login", loginSchema);
