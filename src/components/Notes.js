import React, { useContext, useState } from 'react';
import NoteContext from "../context/notes/NoteContext";
import Notesitem from './Notesitem';

const Notes = () => {
  const context = useContext(NoteContext);
  const { notes, setNotes } = context;

  return (
    <div className="container my-3">
        <div className='row'>
      <h2>Your Note</h2>
      {notes.map((note)=>{
        return <Notesitem key={note.id} note={note} />;
      })}
      </div>
    </div>
  );
};

export default Notes;
