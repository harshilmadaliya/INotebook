import React, { useContext, useState } from 'react'
import NoteState from '../context/notes/noteContext'


function Addnotes(props) {

    const Context = useContext(NoteState)
    const { addnote } = Context;
    const [note, setnote] = useState({ title: "", discription: "", tag: "" })

    const onchange = (e) => {
        setnote({ ...note, [e.target.name]: e.target.value })
    }
    const noteadded = (e) => {
        e.preventDefault()
        addnote(note.title, note.discription, note.tag)
        setnote({ title: "", discription: "", tag: "" })
    }

    return (
        <>
            <div className='mx-auto my-3 col-md-4'>
                <h5>Add Note</h5>
                <div className="form-floating my-2 ">
                    <input type="text" className="form-control justify-content-center" name='title'  value={note.title}  id="title" onChange={onchange} />
                    <label>Title</label>
                </div>
                <div className="form-floating my-2">
                    <input type="text" className="form-control" name='discription' id="discription"   value={note.discription} onChange={onchange} />
                    <label>Discription</label>
                </div>
                <div className="form-floating my-2">
                    <input type="text" className="form-control" name='tag' id="tag" value={note.tag}  onChange={onchange} />
                    <label>Tag</label>
                </div>
                <button type="button" className="btn btn-outline-secondary" onClick={noteadded}>Add</button>
            </div>
        </>
    )
}

export default Addnotes