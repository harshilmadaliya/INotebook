import React from 'react'
import { useState   } from "react"
import {  useNavigate } from 'react-router-dom';

function Signup(props) {
    const [emailpass, setemailpass] = useState({name : "",email : "" , password : ""})
    const navigate = useNavigate();
    const host = "notebook-backend-xi.vercel.app"


    
    const handleSubmmit = async (e) =>{
        e.preventDefault()
        // const {name , email , passWord } = emailpass
        const response = await fetch(`${host}/api/auth/signup`, {
            method: "POST",
            mode: "cors",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ email : emailpass.email , passWord : emailpass.password })
        });
        const json = await response.json()
        if(json.success){
            localStorage.setItem('token' , json.token)
            props.showAlerts("New Account created" , "success")
            navigate("/")
            console.log(json.success +" "+ json.token)
          }else{
            
            props.showAlerts("Enter a velid detile" , "danger")
        }
    }
    const onchange = (e) => {
        setemailpass({ ...emailpass, [e.target.name]: e.target.value })
    }


    return (
        <div className='container'>
            <form onSubmit={handleSubmmit}>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input type="text" className="form-control" id="name" name='name' aria-describedby="emailHelp" value={emailpass.name} onChange={onchange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="email" name='email' aria-describedby="emailHelp" value={emailpass.email} onChange={onchange} />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" className="form-control" name='password' value={emailpass.password || ''} id="password" onChange={onchange}/>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default Signup