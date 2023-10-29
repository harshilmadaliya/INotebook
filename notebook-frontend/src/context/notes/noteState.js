//use context api to making state
import NoteContext from "./noteContext";
import { useState } from "react";

const NoteState = (props) => {
    const host = "notebook-backend-xi.vercel.app"

    //Get all notes  ==>
    const getallnotes = async () => {
        const response = await fetch(`${host}/api/note/fetchallnotes`, {
            method: "GET",
            mode: "cors",
            headers: {
                "Content-Type": "application/json",
                "auth-token": localStorage.getItem('token')
            },
        });
        let json = await response.json()
        setnotes(json)
    }

    //add note ==> 
    const addnote = async (title, discription, tag) => {
        const response = await fetch(`${host}/api/note/addnotes`, {
            method: "POST",
            mode: "cors",
            headers: {
                "Content-Type": "application/json",
                "auth-token": localStorage.getItem('token')
            },
            body: JSON.stringify({ title, discription, tag })
        });
        const note = response.json()
        setnotes(notes.concat(note))
        getallnotes()

    }
    //delete note ==>
    const deletenote = async (id) => {
        const response = await fetch(`${host}/api/note/deleted/${id}`, {
            method: "DELETE",
            mode: "cors",
            headers: {
                "Content-Type": "application/json",
                "auth-token": localStorage.getItem('token')
            },
        });
        const json = response.json()
        const newnote = notes.filter((note) => { return note._id !== id })
        setnotes(newnote)
    }
    const [notes, setnotes] = useState()



    return (
        <>
           
            <NoteContext.Provider value={{ notes, setnotes, deletenote,  addnote, getallnotes }}>
                {props.children}
            </NoteContext.Provider>
        </>
    )
}

export default NoteState