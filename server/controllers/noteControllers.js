const Note = require("../models/noteModel");

const getNotes = async (req, res) => {
  const notes = await Note.find({ user: req.profile._id });
  res.json(notes);
};

const createNote = async (req, res) => {
  const { title, content, category } = req.body;

  if (!title || !content || !category) {
    res.status(400).json({ message: "Please fill all the Fields" });
  } else {
    const note = new Note({ user: req.profile._id, title, content, category });
    const createdNote = await note.save();
    res.status(200).json(createdNote);
  }
};

const getNoteById = async (req, res) => {
  const note = await Note.findById(req.params.noteId);
  if (note) {
    res.json(note);
  } else {
    res.status(404).json({ message: "Note Not Found" });
  }
};

const updateNote = async (req, res) => {
  const { title, content, category } = req.body;

  const note = await Note.findById(req.params.noteId);
  console.log(note);
  if (note.user.toString() !== req.profile._id.toString()) {
    res.status(400).json({ message: "You cannot perform this action" });
  }

  if (note) {
    note.title = title;
    note.content = content;
    note.category = category;

    const updatedNote = await note.save();
    res.json(updatedNote);
  } else {
    res.status(404).json({
      message: "Note Not Found",
    });
  }
};

const deleteNote = async (req, res) => {
  const note = await Note.findById(req.params.noteId);
  if (note.user.toString() !== req.profile._id.toString()) {
    res.status(400).json({ message: "You cannot perform this action" });
  }
  if (note) {
    await note.remove();
    res.status(200).json({ message: "Note Removed Successfully" });
  } else {
    res.status(404).json({
      message: "Note Not Found",
    });
  }
};

module.exports = { getNotes, createNote, getNoteById, updateNote, deleteNote };
