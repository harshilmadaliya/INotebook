import React, { useContext } from 'react'
import NoteState from '../context/notes/noteContext'


function Noteitem(props) {
    const note = props.note
    // const {showAlerts} = props
    const Context = useContext(NoteState)
    const { deletenote, updated } = Context;

    return (
        <>
            <div className="card text-center col-md-3 my-3 mx-3">
                <div className="card-header">
                    {note.tag}
                </div>
                <div className="card-body">
                    <h5 className="card-title">{note.title}</h5>
                    <p className="card-text">{note.discription}</p>
                    <i className=" fontawesome mx-2 fa-solid fa-trash" onClick={() => { deletenote(note._id); props.showAlerts("Deleted successfully", "success") }}></i>
                    <i className=" fontawesome mx-2 fa-solid fa-file-pen" onClick={() => { updated(note); }}></i>
                </div>
                <div className="card-footer text-body-secondary">
                    2 days ago
                </div>
            </div>






            {/* <div className="card col-md-3 my-3 mx-3">
                <div className="card-body">
                    <h5 className="card-title">{note.title}</h5>
                    <p className="card-text">{note.discription}</p>
                    <p className="card-text">{note.tag}</p>
                    <i className=" fontawesome mx-2 fa-solid fa-trash" onClick={() => { deletenote(note._id); props.showAlerts("Deleted successfully", "success") }}></i>
                    <i className=" fontawesome mx-2 fa-solid fa-file-pen" onClick={() => { updated(note); }}></i>
                </div>
            </div> */}
        </>
    )
}

export default Noteitem