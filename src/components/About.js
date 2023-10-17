import React, { useContext, useEffect } from 'react'
import NoteContext from '../context/notes/NoteContext'

const About = () => {
    const a = useContext(NoteContext)
    useEffect(() =>{
        a.Update()
    }, [])
    return (
        <h1>My name is {a.state.name} and I am in {a.state.class} Class</h1>
    )
}

export default About;