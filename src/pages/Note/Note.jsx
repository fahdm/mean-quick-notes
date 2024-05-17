export default function Note({ note }) {
  return (
    <div className="note">
      <p>{note.text}</p>
      <small>{new Date(note.createdAt).toLocaleString()}</small>
    </div>
  );
}
