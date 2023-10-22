import NoteContext from "./NoteContext";
import { useState } from "react";

const NoteState = (props) => {
  const host = "http://localhost:5000";
  const noteInitial = [];
  const [notes, setNotes] = useState(noteInitial);

  //Get all a Note
  const getNotes = async () => {
    try {
      //API CALL
      const response = await fetch(`${host}/api/notes/fetchallnotes`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "auth-token":
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjUyODE0MDIxMzY2MzYxOTlmNjYwZDBkIn0sImlhdCI6MTY5NzEyNTM3OH0.Ef-6D9uRbUxohTgluw8bB2cpiylXFMpIB7PYxz5EqPk",
        },
      });
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const json = await response.json();
      console.log(json);
      setNotes(json);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  //Add a Note
  const addNote = async (title, description, tag) => {
    //API CALL
    const response = await fetch(`${host}/api/notes/addnote`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjUyODE0MDIxMzY2MzYxOTlmNjYwZDBkIn0sImlhdCI6MTY5NzEyNTM3OH0.Ef-6D9uRbUxohTgluw8bB2cpiylXFMpIB7PYxz5EqPk",
      },
      body: JSON.stringify({ title, description, tag }),
    });

    const json = await response.json();
    console.log(json)

    console.log("Adding a new note");
    const note = {
      _id: "6529995aa6fce42ca9f4b719b",
      user: "65281402136636199f660d0d",
      title: title,
      description: description,
      tag: tag,
      date: "2023-10-13T19:24:10.057Z",
      __v: 0,
    };
    setNotes(notes.concat(note));
  };

  // Delete a Note
  const deleteNote = async (id) => {
    //API CALL
    const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjUyODE0MDIxMzY2MzYxOTlmNjYwZDBkIn0sImlhdCI6MTY5NzEyNTM3OH0.Ef-6D9uRbUxohTgluw8bB2cpiylXFMpIB7PYxz5EqPk",
      },
    });

    console.log("Deleting the Note with id" + id);
    const newNotes = notes.filter((note) => {
      return note._id !== id;
    });
    setNotes(newNotes);
  };

  // Edit a Note
  const editNote = async (id, title, description, tag) => {
    //API CALL
    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjUyODE0MDIxMzY2MzYxOTlmNjYwZDBkIn0sImlhdCI6MTY5NzEyNTM3OH0.Ef-6D9uRbUxohTgluw8bB2cpiylXFMpIB7PYxz5EqPk",
      },
      body: JSON.stringify({ title, description, tag }),
    });
    const json = await response.json();
    console.log(json)

    let newNotes = JSON.parse(JSON.stringify(notes))

    //Logic to edit in client
    for (let index = 0; index < newNotes.length; index++) {
      const element = newNotes[index];
      if (element._id === id) {
        newNotes[index].title = title;
        newNotes[index].description = description;
        newNotes[index].tag = tag;
        break;
      }
    }
    setNotes(newNotes);
  };

  return (
    <NoteContext.Provider
      value={{ notes, getNotes, addNote, deleteNote, editNote }}
    >
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
