import React from 'react'
import { useState   } from "react"
import {  useNavigate } from 'react-router-dom';

function Login(props) {
    const [emailpass, setemailpass] = useState({email : "" , password : ""})
    const navigate = useNavigate();
    const host = "notebook-backend-xi.vercel.app"

    
    const handleSubmmit = async (e) =>{
        e.preventDefault()
        const response = await fetch(`${host}/api/auth/login`, {
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
            props.showAlerts("Account login successfully" , "success")
            navigate("/")
        }else{
            props.showAlerts("Enter Currect password and email" , "danger")
          }
    }
    const onchange = (e) => {
        setemailpass({ ...emailpass, [e.target.name]: e.target.value })
    }


    return (
    <div className='container-fluid'>
            <form onSubmit={handleSubmmit} className='container'>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="email" name='email' aria-describedby="emailHelp" value={emailpass.email} onChange={onchange} />
                    {/* <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div> */}
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" className="form-control" name='password' value={emailpass.password} id="password" onChange={onchange}/>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default Login