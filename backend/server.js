require("dotenv").config();
const dbConnection = require("./confiq/database");

const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 8000;

// ------> Middleware
app.use(cors());
app.use(express.json());

dbConnection();

// Routes

app.get("/", (req, res) => {
  res.send("Jerin Parlour is running");
});

app.listen(port, function () {
  console.log(`Jerin Parlour is running on ${port}`.yellow);
});
