const express = require("express");
const {
  signup,
  signin,
  updateUserProfile,
} = require("../controllers/userControllers");
const { getUserById } = require("../middlewares/getUserById");
const { isSignedIn, isAuthenticated } = require("../middlewares/protected");
const router = express.Router();

router.param("userId", getUserById);

router.post("/signup", signup);

router.post("/signin", signin);

router.put("/profile/:userId", isSignedIn, isAuthenticated, updateUserProfile);

module.exports = router;
