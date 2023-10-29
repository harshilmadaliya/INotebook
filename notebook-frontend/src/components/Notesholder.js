import React, { useContext, useEffect } from 'react'
import NoteState from '../context/notes/noteContext'
import Noteitem from './Noteitem';
import Addnotes from './Addnotes';
import {  useNavigate } from 'react-router-dom';


function Notesholder(props) {
  const navigate = useNavigate();
  const Context = useContext(NoteState)
  const { notes, getallnotes } = Context;
  const {showAlerts} = props
  useEffect(() => {
    if(localStorage.getItem('token')){
      getallnotes()
    }else{
      // showAlerts("login first" , "success")
      navigate("/login")
    }
  })

  return (
    <>
      
      <div className="container">
        <h2 className='text-center'>My Notes</h2>
      </div>
      <div className='container mx-auto d-flex justify-content-center flex-wrap'>
        {notes?.map((note) => {
          return <Noteitem key={note._id} note={note} showAlerts = {showAlerts}/>
        })}
      </div>
      <Addnotes showAlerts={showAlerts}/>
    </>
  )
}

export default Notesholder