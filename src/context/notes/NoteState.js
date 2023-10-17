import React, { useState } from "react";
import NoteContext from "./NoteContext";


const NoteState = (props)=> {
    const s1 ={
        "name": "Sagar",
        "class": "5th"
    }
    const [state, setState] = useState(s1);
    
    const Update = () =>{
        setTimeout(() => {
            setState({
                "name": "Rajvi",
                "class": "LKG"
            })
        }, 1000);
    }
    return (
        <NoteContext.Provider value={{ state, Update }}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;
