require("dotenv").config();
const PORT = process.env.PORT || 5000;
const express = require("express");
const app = express();
const cors = require("cors");
const connectDB = require("./config/db");

//My Routes
const userRoutes = require("./routes/userRoutes");
const noteRoutes = require("./routes/noteRoutes");

// DB Connection
connectDB();

//middleware
app.use(express.json());
app.use(cors());

//My Routes
app.use("/api/users", userRoutes);
app.use("/api/notes", noteRoutes);

app.get("/", (req, res) => {
  res.send("Hello There");
});
app.listen(PORT, console.log(`App running on port ${PORT}`));
