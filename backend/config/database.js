const mongoose = require("mongoose");
const colors = require("colors");

const dbConnection = async () => {
  try {
    const connect = await new mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB Connected".cyan.underline);
    console.log("------------- x -------------");
  } catch (error) {
    console.log(`Error: ${error.message}`.red.bold);
    process.exit();
  }
};

module.exports = dbConnection;
