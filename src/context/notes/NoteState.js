import React, { useState } from "react";
import NoteContext from "./NoteContext";


const NoteState = (props)=> {
    
    const noteInitial = [
        {
          "_id": "65299943a6fce42ca9fb7195",
          "user": "65281402136636199f660d0d",
          "title": "Saga Seladiya",
          "description": "Appointment Today",
          "tag": "Personal",
          "date": "2023-10-13T19:23:47.174Z",
          "__v": 0
        },
        {
          "_id": "6529994ba6fce42ca9fb7197",
          "user": "65281402136636199f660d0d",
          "title": "Ajay Ahir",
          "description": "Appointment Today",
          "tag": "Personal",
          "date": "2023-10-13T19:23:55.896Z",
          "__v": 0
        },
        {
          "_id": "65299952a6fce42ca9fb7199",
          "user": "65281402136636199f660d0d",
          "title": "Ramesh Sabad",
          "description": "Appointment Today",
          "tag": "Personal",
          "date": "2023-10-13T19:24:02.277Z",
          "__v": 0
        },
        {
          "_id": "6529995aa6fce42ca9fb719b",
          "user": "65281402136636199f660d0d",
          "title": "Gitesh Raval",
          "description": "Appointment Today",
          "tag": "Personal",
          "date": "2023-10-13T19:24:10.057Z",
          "__v": 0
        },
        {
            "_id": "6529995aa6fce42ca9fb719b",
            "user": "65281402136636199f660d0d",
            "title": "Shree Patel",
            "description": "I am going to Canada",
            "tag": "Personal",
            "date": "2023-10-13T19:24:10.057Z",
            "__v": 0
          }
      ]
      const [notes, setNotes] = useState(noteInitial);
      
    return (
        <NoteContext.Provider value={{ notes, setNotes }}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;
