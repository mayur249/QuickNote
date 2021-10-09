const express = require("express");
const {
  getNotes,
  createNote,
  getNoteById,
  updateNote,
  deleteNote,
} = require("../controllers/noteControllers");
const { getUserById } = require("../middlewares/getUserById");
const { isSignedIn, isAuthenticated } = require("../middlewares/protected");
const router = express.Router();

router.param("userId", getUserById);

router.get("/getNotes/:userId", isSignedIn, isAuthenticated, getNotes);

router.post("/create/:userId", isSignedIn, isAuthenticated, createNote);

router.get(
  "/getSingleNote/:noteId/:userId",
  isSignedIn,
  isAuthenticated,
  getNoteById
);

router.put(
  "/updateNote/:noteId/:userId",
  isSignedIn,
  isAuthenticated,
  updateNote
);

router.delete(
  "/deleteNote/:noteId/:userId",
  isSignedIn,
  isAuthenticated,
  deleteNote
);

module.exports = router;
