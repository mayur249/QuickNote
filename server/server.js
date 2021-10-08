require("dotenv").config();
const PORT = process.env.PORT || 5000;
const express = require("express");
const app = express();
const connectDB = require("./config/db");

//My Routes
const userRoutes = require("./routes/userRoutes");

// DB Connection
connectDB();

//middleware
app.use(express.json());

//My Routes
app.use("/api/users", userRoutes);

app.get("/", (req, res) => {
  res.send("Hello There");
});
app.listen(PORT, console.log(`App running on port ${PORT}`));
