require("dotenv").config();
const PORT = process.env.PORT || 5000;
const express = require("express");
const app = express();
const cors = require("cors");
const connectDB = require("./config/db");
const path = require("path");

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

// ---------------------------- DEPLOYMENT ------------------------------------
__dirname = path.resolve();
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../frontend/build")));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "../frontend", "build", "index.html"));
  });
} else {
}

// ---------------------------- DEPLOYMENT ------------------------------------

app.listen(PORT, console.log(`App running on port ${PORT}`));
