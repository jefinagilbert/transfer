import React, { useState } from 'react'
import './styles.css'
import {Button} from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router'

function Login(){

    const users = useSelector(state=> state.users)
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const history = useHistory()

    function handleLogin(){
        users.forEach(user=>{
            if(user.email === email && user.password === password){
                history.push("/dash/")
            }
        })                
    }



    return(
        <div className="login-main">
            <div className="login-box">
                <div className="login-header">
                    <h2>Login</h2>
                </div>
                <div className="login-input">
                    <label>Email</label>
                    <input className="form-control" type="email" />
                </div>
                <div className="login-input">
                    <label>Password</label>
                    <input className="form-control" type="password" />
                </div>
                <div className="login-button">
                    <button className="btn btn-primary" onClick={handleLogin}>Login</button>
                </div>
            </div>
        </div>
    )
}

export default Login