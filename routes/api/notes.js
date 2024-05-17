const express = require('express');
const router = express.Router();
const Note = require('../../models/note');

// GET /api/notes?user=userId
router.get('/', async (req, res) => {
  const { user } = req.query;
  try {
    const notes = await Note.find({ user });
    res.json(notes);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch notes' });
  }
});

// POST /api/notes
router.post('/', async (req, res) => {
  const { text, user } = req.body;
  if (!text || !user) {
    return res.status(400).json({ error: 'Text and user ID are required' });
  }
  
  try {
    const note = new Note({
      text,
      user,
    });
    await note.save();
    res.status(201).json(note);
  } catch (err) {
    res.status(500).json({ error: 'Failed to create note' });
  }
});

module.exports = router;
