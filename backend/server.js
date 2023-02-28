require("dotenv").config();
const dbConnection = require("./config/database");

const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 8000;

// ------> Middleware
app.use(cors());
app.use(express.json());

dbConnection();

const authRoutes = require("./routes/auth.route");
const adminRoutes = require("./routes/admin.route");
const serviceRoutes = require("./routes/service.route");
const reviewRoutes = require("./routes/review.route");

// ------> Routes
app.use("/api/auth", authRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/service", serviceRoutes);
app.use("/api/review", reviewRoutes);

app.get("/", (req, res) => {
  res.send("Jerin Parlour is running");
});

app.listen(port, function () {
  console.log(`Jerin Parlour is running on ${port}`.yellow);
});
