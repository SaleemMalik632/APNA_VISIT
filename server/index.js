const express = require("express");
const bodyParser = require("body-parser");
require("./utils/db");
const morgan = require('morgan');
const userRoute = require("./routes/userRoutes");
const bookingRoute = require("./routes/bookingRoutes");
const cors = require('cors');
const app = express();
const port = 3005;

app.use(bodyParser.json());
app.use(cors());
app.use(morgan('dev'));
app.use("/api", userRoute);
app.use("/api2", bookingRoute);

app.get('/', (req, res) =>
{
    res.send("Hello World");
})

app.listen(port, () =>
{
    console.log(`Server is listening on port ${port}`);
});
