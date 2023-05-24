//import mongoose
const mongoose = require("mongoose")


try {
  mongoose.connect("mongodb://localhost:27017/Reminderdb", {
    useNewUrlParser: true,
  });
  console.log("Connected to MongoDB");

  const User = mongoose.model("User", {
    email: String,
    name: String,
    password: String,
    reminders: [],
  });

  // Exporting the User model
  module.exports = {
    User,
  };
} catch (error) {
  console.error("Error connecting to MongoDB:", error);
}
