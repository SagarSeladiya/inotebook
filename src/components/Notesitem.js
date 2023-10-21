import React, { useContext } from "react";
import NoteContext from "../context/notes/NoteContext";


const Notesitem = (props) => {
  const context = useContext(NoteContext)
  const { deleteNote } = context
  const { note } = props;
  return (
    <>
      <div className="col-md-4 my-3">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">
              {note.title} <i className="fa-solid fa-trash mx-2" onClick={() =>{deleteNote(note._id)}}></i>
              <i className="mx-2 fa-solid fa-pen-to-square"></i>
            </h5>
            <p className="card-text">{note.description}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Notesitem;
