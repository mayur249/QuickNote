require("dotenv").config();
const PORT = process.env.PORT || 5000;
const express = require("express");
const app = express();
const connectDB = require("./config/db");

connectDB();

app.get("/", (req, res) => {
  res.send("Hello There");
});
app.listen(PORT, console.log(`App running on port ${PORT}`));
