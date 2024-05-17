export async function getNotes(userId) {
    
    const response = await fetch(`/api/notes?user=${userId}`);
    const notes = await response.json();
    return notes;
  }
  
  export async function addNote(note) {
   
    const response = await fetch('/api/notes', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(note),
    });
    const newNote = await response.json();
    return newNote;
  }
  