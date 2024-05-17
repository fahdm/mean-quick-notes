import { useState, useEffect } from 'react';
import Note from '../Note/Note';
import * as notesAPI from '../../utilities/notes-api';

export default function NotesPage({ user }) {
  const [notes, setNotes] = useState([]);
  const [newNoteText, setNewNoteText] = useState('');

  useEffect(() => {
    async function fetchNotes() {
      const fetchedNotes = await notesAPI.getNotes(user._id);
      setNotes(fetchedNotes);
    }
    fetchNotes();
  }, [user]);

  async function handleAddNote() {
    if (!newNoteText) return;
    const newNote = await notesAPI.addNote({
      text: newNoteText,
      user: user._id,
    });
    setNotes([...notes, newNote]);
    setNewNoteText('');
  }

  return (
    <main>
      <h1>Your Notes</h1>
      <div className='button-container'>
        <textarea 
          value={newNoteText} 
          onChange={(e) => setNewNoteText(e.target.value)} 
          placeholder="Enter your note here" 
          rows="4" 
          cols="50"
        />
        <button onClick={handleAddNote} className='button'>Add Note</button>
      </div>
      {notes.length === 0 ? (
        <p>No Notes Yet!</p>
      ) : (
        <div className="notes-list">
          {notes.map(note => (
            <Note key={note._id} note={note} />
          ))}
        </div>
      )}
    </main>
  );
}
