import React, { useContext, useState } from "react";
import NoteContext from "../context/notes/NoteContext";

const AddNote = (props) => {
  const context = useContext(NoteContext);
  const { addNote } = context;

  const [note, setNote] = useState({title: "", description: "", tag: "default" })

  const handelClick = (e)=>{
    e.preventDefault();
    addNote(note.title, note.description, note.tag);
    props.showAlert("Added successfully", "success");
  }

  const onChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };
  return (
    <>
      <div className="container my-3">
        <h2>Add Note</h2>
        <form className="my-3">
          <div className="mb-3">
            <label htmlFor="title" className="form-label">
              Title
            </label>
            <input
              type="text"
              className="form-control"
              id="title"
              placeholder="Description should be more than 3 Words"
              aria-describedby="title"
              name="title"
              onChange={onChange}
              minLength={5} required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="description" className="form-label">
              Description
            </label>
            <input
              type="text"
              name="description"
              className="form-control"
              id="description"
              onChange={onChange}
              minLength={5} required
              placeholder="Description should be more than 5 Words"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="tag" className="form-label">
              Tag
            </label>
            <input
              type="text"
              name="tag"
              className="form-control"
              id="tag"
              placeholder="Please add Tag"
              onChange={onChange}
              minLength={5} required
            />
          </div>

          <button
           disabled={note.title.length<5 || note.description.length<5}
            type="submit" 
            className="btn btn-primary"
            onClick={handelClick}
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
}

export default AddNote