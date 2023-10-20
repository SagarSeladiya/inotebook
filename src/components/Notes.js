import React, { useContext } from 'react';
import NoteContext from "../context/notes/NoteContext";
import Notesitem from './Notesitem';
import AddNote from './AddNote';

const Notes = () => {
  const context = useContext(NoteContext);
  const { notes, addNote } = context;

  return (
    <>
    <AddNote />
    <div className="container my-3">
        <div className="row">
      <h2>Your Note</h2>
      {notes.map((note)=>{
        return <Notesitem key={note._id} note={note} />;
      })}
      </div>
    </div>
    </>
  );
};

export default Notes;
